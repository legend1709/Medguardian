import easyocr
from PIL import Image
import numpy as np

# OCR model load only once when server starts
reader = easyocr.Reader(
    ["en"],
    gpu=False
)

def extract_text(image_path: str):
    image = Image.open(image_path).convert("RGB")
    image = np.array(image)

    result = reader.readtext(image)

    lines = [item[1] for item in result]

    return {
        "text": " ".join(lines),
        "lines": lines
    }