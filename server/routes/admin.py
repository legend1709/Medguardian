from fastapi import APIRouter

router = APIRouter()

# Temporary dashboard data
dashboard = {
    "total_users": 1248,
    "total_scans": 5234,
    "active_reminders": 894,
    "total_medicines": 532
}


# GET /admin/dashboard
@router.get("/dashboard")
def get_dashboard():
    return {
        "success": True,
        "data": dashboard
    }


# GET /admin/activity
@router.get("/activity")
def recent_activity():
    return {
        "success": True,
        "activities": [
            {
                "id": 1,
                "title": "New user registered",
                "time": "2 min ago"
            },
            {
                "id": 2,
                "title": "Paracetamol scanned",
                "time": "8 min ago"
            },
            {
                "id": 3,
                "title": "Reminder created",
                "time": "15 min ago"
            },
            {
                "id": 4,
                "title": "Medicine database updated",
                "time": "1 hour ago"
            }
        ]
    }