import os
import uuid
import asyncio
from fastapi import UploadFile

from ai.ocr import extract_text
from ai.gemini import analyze_medicine

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


async def scan_medicine(image: UploadFile):
    # Unique filename
    filename = f"{uuid.uuid4()}.jpg"
    filepath = os.path.join(UPLOAD_FOLDER, filename)

    try:
        # Save image
        contents = await image.read()
        with open(filepath, "wb") as buffer:
            buffer.write(contents)

        # OCR (background thread)
        ocr = await asyncio.to_thread(extract_text, filepath)

        if len(ocr["text"].strip()) < 3:
            return {
                "success": False,
                "message": "Medicine not detected."
            }

        # Gemini (background thread)
        medicine = await asyncio.to_thread(
            analyze_medicine,
            ocr["text"]
        )

        return {
            "success": True,
            "data": {
                **medicine,
                "ocr_text": ocr["text"]
            }
        }

    finally:
        if os.path.exists(filepath):
            os.remove(filepath)