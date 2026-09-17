import easyocr
from PIL import Image
import numpy as np

# OCR model load (sirf ek baar)
reader = easyocr.Reader(["en"], gpu=False)


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

    result = reader.readtext(image)

    lines = []

    for item in result:
        lines.append(item[1])

    full_text = " ".join(lines)

    return {
        "text": full_text,
        "lines": lines
    }