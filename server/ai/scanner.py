import os
import uuid
from fastapi import UploadFile
from ai.gemini import analyze_medicine_image

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

async def scan_medicine(image: UploadFile):
    filename = f"{uuid.uuid4()}.jpg"
    filepath = os.path.join(UPLOAD_FOLDER, filename)

    try:
        with open(filepath, "wb") as f:
            f.write(await image.read())

        medicine = analyze_medicine_image(filepath)

        return {
            "success": True,
            "data": medicine
        }
    finally:
        if os.path.exists(filepath):
            os.remove(filepath)