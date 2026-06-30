# create_tables.py
from app.database import engine, Base
from app import models  # Registers all models with Base

print("Creating database tables...")
Base.metadata.create_all(bind=engine)
print("Tables created successfully!")