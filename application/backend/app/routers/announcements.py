from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from .. import schemas, crud, database, auth

router = APIRouter()

@router.get("/", response_model=List[schemas.AnnouncementOut])
def read_announcements(
    limit: int = 10,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    return crud.get_announcements(db, limit=limit)

@router.post("/", response_model=schemas.AnnouncementOut)
def create_announcement(
    announcement: schemas.AnnouncementCreate,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    return crud.create_announcement(db, announcement, current_user.display_name)
