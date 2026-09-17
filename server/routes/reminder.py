from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# Temporary in-memory database
reminders_db = []


# -----------------------------
# Model
# -----------------------------
class Reminder(BaseModel):
    name: str
    time: str
    active: bool = True


# -----------------------------
# GET /reminder
# -----------------------------
@router.get("")
def get_reminders():
    return {
        "success": True,
        "reminders": reminders_db
    }


# -----------------------------
# POST /reminder
# -----------------------------
@router.post("")
def add_reminder(reminder: Reminder):

    new_item = {
        "id": len(reminders_db) + 1,
        **reminder.model_dump()
    }

    reminders_db.append(new_item)

    return {
        "success": True,
        "message": "Reminder added",
        "data": new_item
    }


# -----------------------------
# PUT /reminder/{id}
# -----------------------------
@router.put("/{id}")
def update_reminder(id: int, reminder: Reminder):

    for item in reminders_db:
        if item["id"] == id:
            item.update(reminder.model_dump())

            return {
                "success": True,
                "message": "Reminder updated",
                "data": item
            }

    return {
        "success": False,
        "message": "Reminder not found"
    }


# -----------------------------
# DELETE /reminder/{id}
# -----------------------------
@router.delete("/{id}")
def delete_reminder(id: int):

    global reminders_db

    reminders_db = [
        item for item in reminders_db
        if item["id"] != id
    ]

    return {
        "success": True,
        "message": "Reminder deleted"
    }