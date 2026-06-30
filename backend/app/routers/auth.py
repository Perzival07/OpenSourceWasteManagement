from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from datetime import timedelta
from .. import crud, schemas, auth, database
from ..rate_limiter import limiter

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup", response_model=schemas.UserOut)
def signup(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@router.post("/login", response_model=schemas.TokenResponse)
@limiter.limit("5/minute")
def login(request: Request, form_data: schemas.LoginRequest, db: Session = Depends(database.get_db)):
    user = crud.authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": str(user.id)}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer", "user": user}