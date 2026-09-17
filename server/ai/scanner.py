import os
import uuid
from fastapi import UploadFile

from ai.ocr import extract_text
from ai.gemini import analyze_medicine

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


async def scan_medicine(image: UploadFile):

    # Unique filename
    filename = f"{uuid.uuid4()}.jpg"
    filepath = os.path.join(UPLOAD_FOLDER, filename)

    # Save image
    with open(filepath, "wb") as buffer:
        buffer.write(await image.read())

    # OCR
    ocr = extract_text(filepath)

    if len(ocr["text"]) < 3:
        return {
            "success": False,
            "message": "Medicine not detected."
        }

    # Gemini AI
    medicine = analyze_medicine(ocr["text"])

    return {
        "success": True,
        "data": {
            **medicine,
            "ocr_text": ocr["text"],
            "image_path": filepath
        }
    }