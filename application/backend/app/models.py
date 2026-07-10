from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Enum as SQLEnum, JSON, Index
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from .database import Base

class Role(str, enum.Enum):
    citizen = "citizen"
    collector = "collector"
    admin = "admin"

class ReportStatus(str, enum.Enum):
    pending = "pending"
    assigned = "assigned"
    in_progress = "in_progress"
    resolved = "resolved"
    cancelled = "cancelled"

class MLStatus(str, enum.Enum):
    pending = "pending"
    success = "success"
    no_objects_found = "no_objects_found"
    failed = "failed"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    display_name = Column(String, nullable=False)
    phone_number = Column(String, nullable=True)
    role = Column(SQLEnum(Role), default=Role.citizen)
    zone = Column(String, nullable=True)          # for collectors
    is_active = Column(Boolean, default=True)
    xp = Column(Integer, default=0)
    level = Column(Integer, default=1)
    completed_today = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)

    reports = relationship("Report", foreign_keys="Report.citizen_id", back_populates="citizen")
    assigned_reports = relationship("Report", foreign_keys="Report.assigned_worker_id", back_populates="worker")

class Report(Base):
    __tablename__ = "reports"
    id = Column(Integer, primary_key=True, index=True)
    citizen_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    citizen_name = Column(String, nullable=False)
    address = Column(String, nullable=True)         # street address
    block = Column(String, nullable=True)
    category = Column(String, nullable=True)        # e.g., "overflow", "litter"
    priority = Column(String, nullable=True)        # "low", "medium", "high", "urgent"
    message_text = Column(String, nullable=False)
    photo_url = Column(String, nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    status = Column(SQLEnum(ReportStatus), default=ReportStatus.pending)
    tags = Column(JSON, nullable=True)              # list of strings
    assigned_worker_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    assigned_worker_name = Column(String, nullable=True)
    completion_photo_url = Column(String, nullable=True)
    completion_latitude = Column(Float, nullable=True)
    completion_longitude = Column(Float, nullable=True)
    annotated_photo_url = Column(String, nullable=True)
    ml_status = Column(SQLEnum(MLStatus), default=MLStatus.pending, nullable=False)
    detection_metadata = Column(JSON, nullable=True)
    ml_retry_count = Column(Integer, default=0, nullable=False)
    submitted_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)

    citizen = relationship("User", foreign_keys=[citizen_id], back_populates="reports")
    worker = relationship("User", foreign_keys=[assigned_worker_id], back_populates="assigned_reports")

class Zone(Base):
    __tablename__ = "zones"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)