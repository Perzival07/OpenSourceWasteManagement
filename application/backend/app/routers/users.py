from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas, auth, database, models

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/me", response_model=schemas.UserOut)
def read_users_me(current_user: schemas.UserOut = Depends(auth.get_current_user)):
    return current_user

@router.put("/me", response_model=schemas.UserOut)
def update_user_me(
    user_update: schemas.UserUpdate,
    current_user: schemas.UserOut = Depends(auth.get_current_user),
    db: Session = Depends(database.get_db)
):
    return crud.update_user(db, user_id=current_user.id, user_update=user_update)

@router.post("/me/password")
def change_password(
    data: schemas.PasswordChange,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(database.get_db)
):
    if not auth.verify_password(data.old_password, current_user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect current password")
    
    current_user.hashed_password = auth.get_password_hash(data.new_password)
    db.commit()
    return {"message": "Password changed successfully"}

@router.get("", response_model=list[schemas.UserOut])
def get_users(
    role: str | None = None,
    search: str | None = None,
    db: Session = Depends(database.get_db)
):
    # This is a simple list, but we might want pagination later.
    query = db.query(models.User)
    if role:
        query = query.filter(models.User.role == role)
    if search:
        query = query.filter(
            (models.User.email.ilike(f"%{search}%")) |
            (models.User.display_name.ilike(f"%{search}%"))
        )
    return query.all()