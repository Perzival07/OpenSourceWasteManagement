from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///./cleancity.db"
    SECRET_KEY: str = "your-secret-key"
    ALLOWED_ORIGINS: str = "*"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 300
    UPLOAD_MAX_SIZE: int = 5 * 1024 * 1024
    UPLOAD_ALLOWED_TYPES: List[str] = ["image/jpeg", "image/png", "image/jpg", "image/webp", "image/heic"]

    # for importing the cloudinary creds
    CLOUDINARY_CLOUD_NAME: str = ""
    CLOUDINARY_API_KEY: str = ""
    CLOUDINARY_API_SECRET: str = ""
    CLOUDINARY_FOLDER: str = "cleancity"

    # config class for telling pydantic settings to load from .env
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

    @property
    def cors_origins(self) -> List[str]:
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",") if origin.strip()]

    @property
    def upload_allowed_list(self) -> List[str]:
        return self.UPLOAD_ALLOWED_TYPES

settings = Settings()