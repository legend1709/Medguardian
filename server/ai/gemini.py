import os
import json
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

prompt = """
Analyze this medicine strip image.

Return ONLY valid JSON in this format:

{
  "brand_name": "",
  "composition": "",
  "dosage_form": "",
  "manufacturer": "",
  "uses": ["", "", ""],
  "advantages": ["", "", ""],
  "disadvantages": ["", "", ""],
  "good_or_not": {
    "rating": "Good | Average | Avoid without doctor",
    "reason": ""
  },
  "dosage": "",
  "timing": "",
  "side_effects": ["", "", ""],
  "warnings": ["", "", ""],
  "confidence": 95
}

Rules:
- Identify the medicine from the image.
- Give 3–5 common uses.
- Give 3 advantages and 3 disadvantages.
- Mention common side effects only.
- Give a general assessment, not personalized medical advice.
- Return JSON only. No markdown.
"""

def analyze_medicine_image(image_path):
    with open(image_path, "rb") as f:
        img = f.read()

    try:
        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=[
                prompt,
                genai.types.Part.from_bytes(
                    data=img,
                    mime_type="image/jpeg"
                )
            ]
        )

        text = response.text.strip()

        if "```" in text:
            text = text.replace("```json", "").replace("```", "").strip()

        start = text.find("{")
        end = text.rfind("}") + 1
        text = text[start:end]

        return json.loads(text)

    except Exception:
        return {
            "brand_name": "AI temporarily unavailable",
            "composition": "Unknown",
            "dosage_form": "Unknown",
            "manufacturer": "Unknown",
            "uses": [],
            "advantages": [],
            "disadvantages": [],
            "good_or_not": {
                "rating": "Unavailable",
                "reason": "Gemini server is busy. Please try again."
            },
            "dosage": "N/A",
            "timing": "N/A",
            "side_effects": [],
            "warnings": [
                "Server busy (503). Try again in a few seconds."
            ],
            "confidence": 0
        }