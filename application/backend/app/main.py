from fastapi import FastAPI, Request
from slowapi import _rate_limit_exceeded_handler
from .rate_limiter import limiter
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, users, reports, admin, collector
from .config import settings
import logging
from pathlib import Path

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="CleanCity API", version="1.0")

@app.on_event("startup")
def startup_event():
    import threading
    from .ml_service import init_models, run_resilient_queue_scheduler
    threading.Thread(target=init_models, daemon=True).start()
    threading.Thread(target=run_resilient_queue_scheduler, daemon=True).start()

# Rate Limiting
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins if settings.cors_origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static files (uploaded images)
static_path = Path("static")
static_path.joinpath("uploads").mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=str(static_path)), name="static")

# Include routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(reports.router)
app.include_router(admin.router)
app.include_router(collector.router)

@app.get("/")
@limiter.limit("100/minute")
def root(request: Request):
    return {"message": "CleanCity API running"}

# ---- WebSocket for real-time notifications ----
from fastapi import WebSocket, WebSocketDisconnect
from .websocket import manager

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            # Keep connection alive; we only broadcast from other endpoints
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)