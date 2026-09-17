import os
import json
from google import genai
from dotenv import load_dotenv

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_medicine_image(image_path):
    with open(image_path, "rb") as f:
        img = f.read()

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[
            "Read this medicine strip and return ONLY JSON with name, generic_name, uses, dosage, timing, side_effects, warnings, confidence.",
            genai.types.Part.from_bytes(data=img, mime_type="image/jpeg"),
        ],
    )

    text = response.text.replace("```json", "").replace("```", "").strip()
    return json.loads(text)