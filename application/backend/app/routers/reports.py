from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, Query, Request, BackgroundTasks
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
import logging
import json
from ..websocket import manager
from .. import crud, schemas, auth, database, models
from ..rate_limiter import limiter
from ..utils.file_upload import upload_to_cloudinary

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/reports", tags=["reports"])

@router.post("/", response_model=schemas.ReportOut)
@limiter.limit("30/minute")
async def create_report(
    request: Request,
    message_text: str = Form(...),
    latitude: float = Form(...),
    longitude: float = Form(...),
    tags: str = Form(...),
    address: Optional[str] = Form(None),
    block: Optional[str] = Form(None),
    category: Optional[str] = Form(None),
    priority: Optional[str] = Form(None),
    photo: UploadFile = File(...),
    background_tasks: BackgroundTasks = None,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    # Parse tags (comma separated)
    tag_list = [t.strip() for t in tags.split(",") if t.strip()]
    # If category not provided, try to infer from first tag
    if not category and tag_list:
        category = tag_list[0]
    if not priority and len(tag_list) > 1:
        priority = tag_list[1]

    photo_url = upload_to_cloudinary(photo, f"reports/{current_user.id}")

    report_data = schemas.ReportCreate(
        citizen_id=current_user.id,
        citizen_name=current_user.display_name,
        address=address,
        block=block,
        category=category,
        priority=priority,
        message_text=message_text,
        latitude=latitude,
        longitude=longitude,
        tags=tag_list
    )
    db_report = crud.create_report(db, report_data, photo_url)
    
    # Trigger background ML task if BackgroundTasks is provided
    if background_tasks:
        from ..ml_service import process_and_upload_image
        background_tasks.add_task(process_and_upload_image, db_report.id, photo_url)
        
    return db_report

@router.get("/", response_model=schemas.PaginatedReports)
def list_reports(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=200),
    status: Optional[str] = None,
    search: Optional[str] = None,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    # Role-based filtering
    citizen_id = None
    assigned_worker_id = None
    if current_user.role == "citizen":
        citizen_id = current_user.id
    elif current_user.role == "collector":
        assigned_worker_id = current_user.id
    # Admin sees all

    reports, total = crud.get_reports(
        db,
        citizen_id=citizen_id,
        assigned_worker_id=assigned_worker_id,
        status=status,
        search=search,
        skip=skip,
        limit=limit
    )
    total_pages = (total + limit - 1) // limit
    return schemas.PaginatedReports(
        items=reports,
        total=total,
        page=skip // limit + 1,
        limit=limit,
        total_pages=total_pages
    )

@router.get("/community")
def list_community_reports(
    limit: int = Query(5, ge=1, le=20),
    db: Session = Depends(database.get_db)
):
    """Get recent publicly resolved reports for the community feed"""
    return crud.get_community_reports(db, limit=limit)

@router.get("/leaderboard")
def get_leaderboard(
    limit: int = Query(3, ge=1, le=10),
    db: Session = Depends(database.get_db)
):
    """Get top citizens by resolved report count"""
    leaders = crud.get_citizen_leaderboard(db, limit=limit)
    return [{"name": name, "resolved_count": count} for name, count in leaders]

@router.put("/{report_id}", response_model=schemas.ReportOut)
async def update_report(
    report_id: int,
    report_update: schemas.ReportUpdate,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    report = crud.get_report(db, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")

    # Authorization
    if current_user.role == "admin":
        pass
    elif current_user.role == "collector":
        if report.assigned_worker_id != current_user.id:
            raise HTTPException(status_code=403, detail="Not assigned to this report")
        # Collectors can only update status and completion fields
        allowed_fields = {"status", "completion_photo_url", "completion_latitude", "completion_longitude", "annotated_photo_url", "ml_status", "detection_metadata", "ml_retry_count"}
        update_dict = report_update.dict(exclude_unset=True)
        if not all(k in allowed_fields for k in update_dict.keys()):
            raise HTTPException(status_code=403, detail="Collectors can only update status and completion fields")
    else:
        raise HTTPException(status_code=403, detail="Not authorized")

    # Auto-set completed_at if status becomes "resolved"
    if report_update.status == "resolved" and report.status != "resolved":
        report_update.completed_at = datetime.utcnow()
        crud.update_worker_stats(db, current_user.id)

    updated = crud.update_report(db, report_id, report_update)
    
    await manager.broadcast(json.dumps({
        "event": "report:status_changed",
        "id": updated.id,
        "status": updated.status,
        "address": updated.address
    }))
    
    return updated

@router.get("/collector/leaderboard")
async def get_collector_leaderboard(
    limit: int = 5,
    db: Session = Depends(database.get_db)
):
    """Get top collectors by resolved report count for the day"""
    return crud.get_collector_leaderboard(db, limit=limit)

@router.post("/{report_id}/reassign")
async def reassign_report(
    report_id: int,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    """Unassign a report from the current collector"""
    if current_user.role != "collector" and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
        
    report = crud.get_report(db, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")
        
    if current_user.role == "collector" and report.assigned_worker_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not assigned to this report")

    # Unassign it and reset to pending
    report.assigned_worker_id = None
    report.assigned_worker_name = None
    report.status = models.ReportStatus.pending
    db.commit()
    db.refresh(report)

    await manager.broadcast(json.dumps({
        "event": "report:reassigned",
        "id": report.id,
        "status": report.status,
        "address": report.address
    }))

    return report

@router.post("/{report_id}/verify")
async def verify_report(
    report_id: int,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    """Admin quality inspector: verify and approve a resolved report"""
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
        
    report = crud.get_report(db, report_id)
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")
        
    if report.status != models.ReportStatus.resolved:
        raise HTTPException(status_code=400, detail="Only resolved reports can be verified")

    crud.log_admin_action(db, current_user.id, current_user.display_name, "Verify Report", f"Approved report {report_id}")
    return {"status": "ok", "verified": True}