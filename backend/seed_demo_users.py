"""
Seed demo users and zones for CleanCity.
"""
import os
import sys
from sqlalchemy.orm import Session
from dotenv import load_dotenv
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from app.database import SessionLocal
from app import models
from app.auth import get_password_hash

def seed():
    db = SessionLocal()
    try:
        # Seed zones
        zones = ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"]
        for z in zones:
            existing = db.query(models.Zone).filter(models.Zone.name == z).first()
            if not existing:
                db.add(models.Zone(name=z, description=f"Zone for {z}"))
        db.commit()

        # Demo users
        users = [
            {
                "email": "citizen@demo.cleancity.dev",
                "password": "Password123!",
                "display_name": "Casey Citizen",
                "role": "citizen",
                "phone_number": "+15550100001",
            },
            {
                "email": "collector@demo.cleancity.dev",
                "password": "Password123!",
                "display_name": "Cory Collector",
                "role": "collector",
                "phone_number": "+15550100002",
                "zone": "Ward 1",
            },
            {
                "email": "admin@demo.cleancity.dev",
                "password": "Password123!",
                "display_name": "Avery Admin",
                "role": "admin",
                "phone_number": "+15550100003",
            },
        ]
        for u in users:
            existing = db.query(models.User).filter(models.User.email == u["email"]).first()
            if existing:
                print(f"User {u['email']} already exists, skipping.")
                continue
            hashed = get_password_hash(u.pop("password"))
            user = models.User(**u, hashed_password=hashed, is_active=True)
            db.add(user)
            print(f"Created user: {u['email']} with role {u['role']}")
        db.commit()
        print("Seeding completed successfully.")
    finally:
        db.close()

if __name__ == "__main__":
    load_dotenv()
    seed()