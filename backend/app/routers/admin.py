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
    db: Session = Depends(database.get_db)
):
    user = crud.toggle_user_active(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
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
    db: Session = Depends(database.get_db)
):
    if not crud.delete_zone(db, zone_id):
        raise HTTPException(status_code=404, detail="Zone not found")
    return None