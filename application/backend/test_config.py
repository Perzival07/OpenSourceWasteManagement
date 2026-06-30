from app.config import settings

print("Cloud Name:", settings.CLOUDINARY_CLOUD_NAME)
print("API Key:", settings.CLOUDINARY_API_KEY)
print("API Secret:", settings.CLOUDINARY_API_SECRET[:10] + "..." if settings.CLOUDINARY_API_SECRET else "MISSING")
print("Folder:", settings.CLOUDINARY_FOLDER)