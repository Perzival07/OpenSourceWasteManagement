import cloudinary
import cloudinary.uploader
from fastapi import UploadFile, HTTPException
from ..config import settings

# Configure Cloudinary
cloudinary.config(
    cloud_name=settings.CLOUDINARY_CLOUD_NAME,
    api_key=settings.CLOUDINARY_API_KEY,
    api_secret=settings.CLOUDINARY_API_SECRET
)

def upload_to_cloudinary(upload_file: UploadFile, subfolder: str = "") -> str:
    """Upload an image to Cloudinary and return the secure URL."""
    # Validate content type
    if upload_file.content_type not in settings.upload_allowed_list:
        raise HTTPException(
            400,
            f"File type not allowed. Allowed: {', '.join(settings.upload_allowed_list)}"
        )

    # Read file content
    content = upload_file.file.read()
    if len(content) > settings.UPLOAD_MAX_SIZE:
        raise HTTPException(
            400,
            f"File too large. Max {settings.UPLOAD_MAX_SIZE // (1024 * 1024)}MB"
        )

    # Build folder path
    folder = f"{settings.CLOUDINARY_FOLDER}/{subfolder}" if subfolder else settings.CLOUDINARY_FOLDER

    try:
        # Upload to Cloudinary
        response = cloudinary.uploader.upload(
            content,
            folder=folder,
            resource_type="image",
            # Optional: auto-optimize and transform
            transformation=[
                {"quality": "auto", "fetch_format": "auto"},
                {"width": 1200, "crop": "limit"}  # max width 1200px
            ]
        )
        return response.get("secure_url")
    except Exception as e:
        raise HTTPException(500, f"Cloudinary upload failed: {str(e)}")