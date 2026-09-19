import os
import json
import time
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

PROMPT = """
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

MAX_WAIT = 30  # Retry for 30 seconds


def analyze_medicine_image(image_path):
    with open(image_path, "rb") as f:
        img = f.read()

    start_time = time.time()

    while True:
        try:
            response = client.models.generate_content(
                model="gemini-3.6-flash",
                contents=[
                    PROMPT,
                    genai.types.Part.from_bytes(
                        data=img,
                        mime_type="image/jpeg"
                    )
                ]
            )

            text = response.text.strip()

            # Remove markdown if Gemini returns it
            if text.startswith("```"):
                text = (
                    text.replace("```json", "")
                        .replace("```", "")
                        .strip()
                )

            # Extract JSON safely
            start = text.find("{")
            end = text.rfind("}") + 1

            if start == -1 or end == 0:
                raise Exception("Invalid JSON received")

            return json.loads(text[start:end])

        except Exception as e:
            print("Gemini Retry:", e)

            # Stop after 30 seconds
            if time.time() - start_time >= MAX_WAIT:
                break

            time.sleep(2)

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
            "reason": "Gemini server is temporarily busy."
        },
        "dosage": "N/A",
        "timing": "N/A",
        "side_effects": [],
        "warnings": [
            "Please try scanning again."
        ],
        "confidence": 0
    }