import easyocr
from PIL import Image
import numpy as np

# Global OCR reader
reader = None

def load_reader():
    global reader
    if reader is None:
        reader = easyocr.Reader(
            ["en"],
            gpu=False,
            model_storage_directory="model",
            download_enabled=True
        )

def get_reader():
    global reader
    if reader is None:
        load_reader()
    return reader

def extract_text(image_path: str):
    image = Image.open(image_path).convert("RGB")
    image = np.array(image)

    result = get_reader().readtext(image)

    lines = [item[1] for item in result]
    full_text = " ".join(lines)

    return {
        "text": full_text,
        "lines": lines
    }