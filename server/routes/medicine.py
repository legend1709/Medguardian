from fastapi import APIRouter

router = APIRouter()

# Temporary medicine database
medicines = [
    {
        "id": 1,
        "name": "Paracetamol 650",
        "uses": "Fever & Pain Relief",
        "dosage": "1 Tablet",
        "timing": "After Food",
        "side_effects": [
            "Nausea",
            "Dizziness",
            "Stomach Pain"
        ],
        "warnings": [
            "Do not exceed 4 tablets/day",
            "Avoid alcohol"
        ],
        "confidence": 96
    },
    {
        "id": 2,
        "name": "Cetirizine",
        "uses": "Allergy Relief",
        "dosage": "1 Tablet",
        "timing": "Night",
        "side_effects": [
            "Sleepiness",
            "Dry Mouth"
        ],
        "warnings": [
            "Avoid driving after taking"
        ],
        "confidence": 93
    }
]


# GET /medicine/{id}
@router.get("/{id}")
def get_medicine(id: int):

    for medicine in medicines:
        if medicine["id"] == id:
            return {
                "success": True,
                "data": medicine
            }

    return {
        "success": False,
        "message": "Medicine not found"
    }


# GET /medicine
@router.get("")
def get_all_medicines():
    return {
        "success": True,
        "data": medicines
    }