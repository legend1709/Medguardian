from fastapi import UploadFile

async def scan_medicine(image: UploadFile):
    return {
        "success": True,
        "data": {
            "name": "Test OK",
            "generic_name": "Scanner Working",
            "uses": ["Backend route verified"],
            "dosage": "N/A",
            "timing": "N/A",
            "side_effects": [],
            "warnings": [],
            "confidence": 100,
            "ocr_text": "BYPASS MODE"
        }
    }