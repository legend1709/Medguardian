from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.init_db import init_database

from routes.scan import router as scan_router
from routes.history import router as history_router
from routes.reminder import router as reminder_router
from routes.medicine import router as medicine_router
from routes.admin import router as admin_router

app = FastAPI(
    title="MedGuardian API",
    version="2.0.0"
)

# Database initialize
init_database()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https:// medguardian-o1w9.vercel.app",  # apna Vercel URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "status": "running",
        "app": "MedGuardian API"
    }

# API Routes
app.include_router(scan_router, prefix="/scan", tags=["AI Scan"])
app.include_router(history_router, prefix="/history", tags=["History"])
app.include_router(reminder_router, prefix="/reminder", tags=["Reminder"])
app.include_router(medicine_router, prefix="/medicine", tags=["Medicine"])
app.include_router(admin_router, prefix="/admin", tags=["Admin"])