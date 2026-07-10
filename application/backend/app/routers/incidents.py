from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from .. import schemas, crud, database, auth

router = APIRouter()

@router.post("/", response_model=schemas.IncidentOut)
def create_incident(
    incident: schemas.IncidentCreate,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(auth.get_current_user)
):
    return crud.create_incident(db, incident, current_user.id, current_user.display_name)
