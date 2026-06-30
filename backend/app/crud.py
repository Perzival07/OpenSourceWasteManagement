from sqlalchemy.orm import Session
from sqlalchemy import func, and_
from datetime import datetime, timedelta
from . import models, schemas, auth

# ---- User ----
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed = auth.get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        hashed_password=hashed,
        display_name=user.display_name,
        phone_number=user.phone_number,
        role=user.role,
        zone=user.zone,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if not user or not user.is_active:
        return False
    if not auth.verify_password(password, user.hashed_password):
        return False
    return user

def update_user(db: Session, user_id: int, user_update: schemas.UserUpdate):
    db_user = get_user(db, user_id)
    if db_user:
        for key, value in user_update.dict(exclude_unset=True).items():
            setattr(db_user, key, value)
        db.commit()
        db.refresh(db_user)
    return db_user

def toggle_user_active(db: Session, user_id: int):
    db_user = get_user(db, user_id)
    if db_user:
        db_user.is_active = not db_user.is_active
        db.commit()
        db.refresh(db_user)
    return db_user

def get_users(db: Session, role: str = None, search: str = None, skip: int = 0, limit: int = 100):
    query = db.query(models.User)
    if role:
        query = query.filter(models.User.role == role)
    if search:
        query = query.filter(
            (models.User.email.ilike(f"%{search}%")) |
            (models.User.display_name.ilike(f"%{search}%"))
        )
    total = query.count()
    users = query.offset(skip).limit(limit).all()
    return users, total

# ---- Report ----
def create_report(db: Session, report: schemas.ReportCreate, photo_url: str):
    db_report = models.Report(
        **report.dict(),
        photo_url=photo_url,
        status=models.ReportStatus.pending
    )
    db.add(db_report)
    db.commit()
    db.refresh(db_report)
    return db_report

def get_report(db: Session, report_id: int):
    return db.query(models.Report).filter(models.Report.id == report_id).first()

def get_reports(
    db: Session,
    citizen_id: int = None,
    assigned_worker_id: int = None,
    status: str = None,
    search: str = None,
    skip: int = 0,
    limit: int = 100
):
    query = db.query(models.Report)
    if citizen_id:
        query = query.filter(models.Report.citizen_id == citizen_id)
    if assigned_worker_id:
        query = query.filter(models.Report.assigned_worker_id == assigned_worker_id)
    if status:
        query = query.filter(models.Report.status == status)
    if search:
        query = query.filter(
            (models.Report.address.ilike(f"%{search}%")) |
            (models.Report.block.ilike(f"%{search}%")) |
            (models.Report.message_text.ilike(f"%{search}%"))
        )
    total = query.count()
    reports = query.order_by(models.Report.submitted_at.desc()).offset(skip).limit(limit).all()
    return reports, total

def update_report(db: Session, report_id: int, report_update: schemas.ReportUpdate):
    db_report = get_report(db, report_id)
    if not db_report:
        return None
    for key, value in report_update.dict(exclude_unset=True).items():
        setattr(db_report, key, value)
    db.commit()
    db.refresh(db_report)
    return db_report

def update_worker_stats(db: Session, worker_id: int):
    worker = get_user(db, worker_id)
    if worker:
        worker.xp += 10
        new_level = worker.xp // 100 + 1
        if new_level > worker.level:
            worker.level = new_level
        worker.completed_today += 1
        db.commit()

# ---- Zone ----
def get_zones(db: Session):
    return db.query(models.Zone).order_by(models.Zone.name).all()

def create_zone(db: Session, zone: schemas.ZoneCreate):
    db_zone = models.Zone(**zone.dict())
    db.add(db_zone)
    db.commit()
    db.refresh(db_zone)
    return db_zone

def delete_zone(db: Session, zone_id: int):
    db_zone = db.query(models.Zone).filter(models.Zone.id == zone_id).first()
    if db_zone:
        db.delete(db_zone)
        db.commit()
        return True
    return False

# ---- Analytics ----
def get_analytics(db: Session, period_days: int):
    cutoff = datetime.utcnow() - timedelta(days=period_days)
    reports = db.query(models.Report).filter(models.Report.submitted_at >= cutoff).all()
    total = len(reports)
    resolved = sum(1 for r in reports if r.status == models.ReportStatus.resolved)
    resolution_rate = (resolved / total * 100) if total > 0 else 0

    # average resolution time (hours) for resolved reports
    avg_hours = None
    if resolved > 0:
        resolved_reports = [r for r in reports if r.status == models.ReportStatus.resolved and r.completed_at]
        if resolved_reports:
            total_seconds = sum((r.completed_at - r.submitted_at).total_seconds() for r in resolved_reports)
            avg_hours = total_seconds / (resolved * 3600)

    # reports over time (daily)
    from collections import defaultdict
    daily_counts = defaultdict(int)
    for r in reports:
        date_str = r.submitted_at.strftime("%Y-%m-%d")
        daily_counts[date_str] += 1
    # sort by date
    sorted_dates = sorted(daily_counts.items())
    over_time = [{"date": d, "count": c} for d, c in sorted_dates]

    # by category
    cat_counts = defaultdict(int)
    for r in reports:
        if r.category:
            cat_counts[r.category] += 1
    by_category = [{"label": k, "count": v} for k, v in cat_counts.items()]

    # by status
    status_counts = defaultdict(int)
    for r in reports:
        status_counts[r.status.value] += 1
    by_status = [{"label": k, "count": v} for k, v in status_counts.items()]

    # by zone (based on block or address)
    zone_counts = defaultdict(int)
    for r in reports:
        zone_key = r.block or r.address or "Unknown"
        zone_counts[zone_key] += 1
    by_zone = [{"label": k, "count": v} for k, v in zone_counts.items()]

    # top collectors (by resolved count in period)
    collector_counts = defaultdict(int)
    collector_names = {}
    for r in reports:
        if r.assigned_worker_id and r.status == models.ReportStatus.resolved:
            collector_counts[r.assigned_worker_id] += 1
            if r.assigned_worker_name:
                collector_names[r.assigned_worker_id] = r.assigned_worker_name
    top_collectors = []
    for uid, cnt in sorted(collector_counts.items(), key=lambda x: x[1], reverse=True)[:5]:
        name = collector_names.get(uid, f"Collector {uid}")
        top_collectors.append({"name": name, "count": cnt, "avg_minutes": None})

    return {
        "summary": {
            "total_reports": total,
            "resolved": resolved,
            "avg_resolution_hours": avg_hours,
            "resolution_rate": resolution_rate
        },
        "reports_over_time": over_time,
        "by_category": by_category,
        "by_status": by_status,
        "by_zone": by_zone,
        "top_collectors": top_collectors
    }