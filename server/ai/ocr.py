import easyocr
from PIL import Image
import numpy as np

# Lazy load OCR model
reader = None

def get_reader():
    global reader
    if reader is None:
        reader = easyocr.Reader(
            ["en"],
            gpu=False,
            download_enabled=True
        )
    return reader


def extract_text(image_path: str):
    """
    Image se text extract karta hai
    Returns:
        {
            "text": "...",
            "lines": [...]
        }
    """

    image = Image.open(image_path).convert("RGB")
    image = np.array(image)

    result = get_reader().readtext(image)

    lines = [item[1] for item in result]
    full_text = " ".join(lines)

    return {
        "text": full_text,
        "lines": lines
    }