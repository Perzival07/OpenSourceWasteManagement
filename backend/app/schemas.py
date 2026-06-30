from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# ---- User ----
class UserBase(BaseModel):
    email: EmailStr
    display_name: str
    phone_number: Optional[str] = None
    zone: Optional[str] = None

class UserCreate(UserBase):
    password: str
    role: str = "citizen"

class UserUpdate(BaseModel):
    display_name: Optional[str] = None
    phone_number: Optional[str] = None
    zone: Optional[str] = None

class UserOut(UserBase):
    id: int
    role: str
    is_active: bool
    xp: int
    level: int
    completed_today: int
    created_at: datetime
    class Config:
        from_attributes = True

class UserAdminCreate(BaseModel):
    email: EmailStr
    password: str
    display_name: str
    phone_number: Optional[str] = None
    role: str = "citizen"
    zone: Optional[str] = None

class PaginatedUsers(BaseModel):
    items: List[UserOut]
    total: int
    page: int
    limit: int
    total_pages: int

# ---- Report ----
class ReportBase(BaseModel):
    address: Optional[str] = None
    block: Optional[str] = None
    category: Optional[str] = None
    priority: Optional[str] = None
    message_text: str
    latitude: float
    longitude: float
    tags: List[str] = []

class ReportCreate(ReportBase):
    citizen_id: int
    citizen_name: str

class ReportUpdate(BaseModel):
    status: Optional[str] = None
    assigned_worker_id: Optional[int] = None
    assigned_worker_name: Optional[str] = None
    completion_photo_url: Optional[str] = None
    completion_latitude: Optional[float] = None
    completion_longitude: Optional[float] = None
    completed_at: Optional[datetime] = None

class ReportOut(ReportBase):
    id: int
    citizen_id: int
    citizen_name: str
    photo_url: str
    status: str
    submitted_at: datetime
    assigned_worker_id: Optional[int] = None
    assigned_worker_name: Optional[str] = None
    completion_photo_url: Optional[str] = None
    completion_latitude: Optional[float] = None
    completion_longitude: Optional[float] = None
    completed_at: Optional[datetime] = None
    class Config:
        from_attributes = True

class PaginatedReports(BaseModel):
    items: List[ReportOut]
    total: int
    page: int
    limit: int
    total_pages: int

# ---- Zone ----
class ZoneBase(BaseModel):
    name: str
    description: Optional[str] = None

class ZoneCreate(ZoneBase):
    pass

class ZoneOut(ZoneBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# ---- Analytics ----
class SummaryStats(BaseModel):
    total_reports: int
    resolved: int
    avg_resolution_hours: Optional[float] = None
    resolution_rate: Optional[float] = None

class TimeSeriesPoint(BaseModel):
    date: str
    count: int

class CategoryDistribution(BaseModel):
    label: str
    count: int

class TopCollector(BaseModel):
    name: str
    count: int
    avg_minutes: Optional[float] = None

class AnalyticsResponse(BaseModel):
    summary: SummaryStats
    reports_over_time: List[TimeSeriesPoint]
    by_category: List[CategoryDistribution]
    by_status: List[CategoryDistribution]
    by_zone: List[CategoryDistribution]
    top_collectors: List[TopCollector]

# ---- Auth ----
class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut

# ---- Collector ----
class TaskUpdate(BaseModel):
    status: str