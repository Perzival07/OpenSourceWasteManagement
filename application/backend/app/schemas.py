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
    annotated_photo_url: Optional[str] = None
    ml_status: Optional[str] = None
    detection_metadata: Optional[dict] = None
    ml_retry_count: Optional[int] = None
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
    annotated_photo_url: Optional[str] = None
    ml_status: str
    detection_metadata: Optional[dict] = None
    ml_retry_count: int = 0
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

class ZoneSLA(BaseModel):
    zone: str
    avg_resolution_hours: float
    on_time_rate: float
    status: str

class TonnageProjection(BaseModel):
    month: str
    projected_tons: float
    budget_estimate: float

class AnalyticsResponse(BaseModel):
    summary: SummaryStats
    reports_over_time: List[TimeSeriesPoint]
    by_category: List[CategoryDistribution]
    by_status: List[CategoryDistribution]
    by_zone: List[CategoryDistribution]
    top_collectors: List[TopCollector]
    ai_confidence_avg: Optional[float] = None
    zone_slas: Optional[List[ZoneSLA]] = None
    tonnage_projections: Optional[List[TonnageProjection]] = None

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

# ---- Password Change ----
class PasswordChange(BaseModel):
    old_password: str
    new_password: str

# ---- Announcement ----
class AnnouncementCreate(BaseModel):
    message: str

class AnnouncementOut(BaseModel):
    id: int
    message: str
    created_by_name: str
    created_at: datetime

    class Config:
        from_attributes = True

# ---- Incident ----
class IncidentCreate(BaseModel):
    message: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None

class IncidentOut(BaseModel):
    id: int
    collector_id: int
    collector_name: str
    message: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    created_at: datetime

    class Config:
        from_attributes = True

# ---- Audit Log ----
class AuditLogOut(BaseModel):
    id: int
    admin_name: str
    action: str
    details: Optional[str] = None
    timestamp: datetime

    class Config:
        from_attributes = True

# ---- System Settings ----
class SystemSettingUpdate(BaseModel):
    value: str

class SystemSettingOut(BaseModel):
    key: str
    value: str
    updated_at: datetime

    class Config:
        from_attributes = True