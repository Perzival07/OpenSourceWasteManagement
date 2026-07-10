from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional, List
from datetime import datetime
from .. import crud, schemas, auth, database, models
from ..dependencies import require_admin

router = APIRouter(prefix="/admin", tags=["admin"], dependencies=[Depends(require_admin)])

# ---- Analytics ----
@router.get("/analytics", response_model=schemas.AnalyticsResponse)
def get_analytics(
    period: str = Query("30d", pattern="^(7d|30d|90d|1y)$"),
    db: Session = Depends(database.get_db)
):
    days_map = {"7d": 7, "30d": 30, "90d": 90, "1y": 365}
    days = days_map.get(period, 30)
    data = crud.get_analytics(db, days)
    return data

# ---- Users ----
@router.get("/users", response_model=schemas.PaginatedUsers)
def list_users(
    role: Optional[str] = None,
    search: Optional[str] = None,
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=100),
    db: Session = Depends(database.get_db)
):
    skip = (page - 1) * limit
    users, total = crud.get_users(db, role=role, search=search, skip=skip, limit=limit)
    total_pages = (total + limit - 1) // limit
    return {
        "items": users,
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": total_pages
    }

@router.post("/users", response_model=schemas.UserOut)
def create_user(
    user: schemas.UserAdminCreate,
    db: Session = Depends(database.get_db)
):
    # Check email uniqueness
    existing = crud.get_user_by_email(db, user.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    # Convert to UserCreate (same fields)
    user_create = schemas.UserCreate(
        email=user.email,
        password=user.password,
        display_name=user.display_name,
        phone_number=user.phone_number,
        role=user.role,
        zone=user.zone
    )
    return crud.create_user(db, user_create)

@router.patch("/users/{user_id}/deactivate")
def toggle_user_active(
    user_id: int,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    user = crud.toggle_user_active(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    crud.log_admin_action(db, current_user.id, current_user.display_name, "Toggle User Active", f"User {user_id} active status set to {user.is_active}")
    return {"status": "ok", "is_active": user.is_active}

# ---- Zones ----
@router.get("/zones", response_model=list[schemas.ZoneOut])
def list_zones(
    db: Session = Depends(database.get_db)
):
    return crud.get_zones(db)

@router.post("/zones", response_model=schemas.ZoneOut)
def create_zone(
    zone: schemas.ZoneCreate,
    db: Session = Depends(database.get_db)
):
    # Check duplicate name
    existing = db.query(models.Zone).filter(models.Zone.name == zone.name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Zone name already exists")
    return crud.create_zone(db, zone)

@router.delete("/zones/{zone_id}", status_code=204)
def delete_zone(
    zone_id: int,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    if not crud.delete_zone(db, zone_id):
        raise HTTPException(status_code=404, detail="Zone not found")
    crud.log_admin_action(db, current_user.id, current_user.display_name, "Delete Zone", f"Deleted zone {zone_id}")
    return None

# ---- Audit Logs ----
@router.get("/audit_logs", response_model=List[schemas.AuditLogOut])
def get_audit_logs(
    limit: int = Query(50, ge=1, le=100),
    db: Session = Depends(database.get_db)
):
    return crud.get_audit_logs(db, limit)

# ---- Health ----
@router.get("/health")
def get_system_health(db: Session = Depends(database.get_db)):
    return crud.get_system_health(db)

# ---- Settings ----
@router.get("/settings/{key}", response_model=schemas.SystemSettingOut)
def get_system_setting(
    key: str,
    db: Session = Depends(database.get_db)
):
    setting = crud.get_system_setting(db, key)
    if not setting:
        raise HTTPException(status_code=404, detail="Setting not found")
    return setting

@router.patch("/settings/{key}", response_model=schemas.SystemSettingOut)
def update_system_setting(
    key: str,
    setting_update: schemas.SystemSettingUpdate,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    setting = crud.set_system_setting(db, key, setting_update.value)
    crud.log_admin_action(db, current_user.id, current_user.display_name, "Update Setting", f"Updated setting {key}")
    return setting