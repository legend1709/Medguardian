import os
import json
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_medicine(ocr_text):
    prompt = f"""
    Extract medicine information from this OCR text.

    OCR:
    {ocr_text}

    Return ONLY JSON:
    {{
      "name":"",
      "generic_name":"",
      "uses":[""],
      "dosage":"",
      "timing":"",
      "side_effects":[""],
      "warnings":[""],
      "confidence":90
    }}
    """

    try:
        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt
        )

        text = response.text.replace("```json","").replace("```","").strip()
        return json.loads(text)

    except Exception:
        return {
            "name": "Medicine Detected",
            "generic_name": "AI temporarily unavailable",
            "uses": ["OCR completed successfully"],
            "dosage": "Try again in a few seconds",
            "timing": "N/A",
            "side_effects": [],
            "warnings": ["Gemini server is busy (503)."],
            "confidence": 40
        }