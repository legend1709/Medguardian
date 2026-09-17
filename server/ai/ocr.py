import easyocr
from PIL import Image
import numpy as np

# OCR reader (lazy loading)
reader = None

def get_reader():
    global reader
    if reader is None:
        reader = easyocr.Reader(
            ["en"],
            gpu=False
        )
    return reader

def extract_text(image_path: str):
    image = Image.open(image_path).convert("RGB")
    image = np.array(image)

    result = get_reader().readtext(image)

    lines = [item[1] for item in result]

    return {
        "text": " ".join(lines),
        "lines": lines
    }