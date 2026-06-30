from fastapi import Depends, HTTPException, status
from .auth import get_current_user
from .schemas import UserOut

async def require_admin(current_user: UserOut = Depends(get_current_user)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Admin privileges required")
    return current_user