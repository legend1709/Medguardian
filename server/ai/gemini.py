import os
import json
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_medicine_image(image_path):
    with open(image_path, "rb") as f:
        img = f.read()

    prompt = """
    Analyze this medicine strip image.

    Return ONLY valid JSON.

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
    - 3–5 common uses.
    - 3 advantages and 3 disadvantages.
    - Give a general assessment only.
    - Return JSON only.
    """

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

    text = response.text.replace("```json", "").replace("```", "").strip()
    return json.loads(text)