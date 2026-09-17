from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

# Temporary in-memory storage
history_db = []


# -----------------------------
# Model
# -----------------------------
class HistoryItem(BaseModel):
    name: str
    uses: str
    confidence: int


# -----------------------------
# GET /history
# -----------------------------
@router.get("")
def get_history():
    return {
        "success": True,
        "history": history_db
    }


# -----------------------------
# POST /history/save
# -----------------------------
@router.post("/save")
def save_history(item: HistoryItem):

    record = {
        "id": len(history_db) + 1,
        "name": item.name,
        "uses": item.uses,
        "confidence": item.confidence,
        "date": datetime.now().strftime("%d %b %Y %I:%M %p")
    }

    history_db.append(record)

    return {
        "success": True,
        "message": "History saved",
        "data": record
    }