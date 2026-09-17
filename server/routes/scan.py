from fastapi import APIRouter, UploadFile, File, HTTPException
from ai.scanner import scan_medicine

router = APIRouter()


@router.post("/")
async def scan(image: UploadFile = File(...)):

    # Validate image
    if not image.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Please upload a valid image."
        )

    result = await scan_medicine(image)

    if result["success"] is False:
        raise HTTPException(
            status_code=404,
            detail=result["message"]
        )

    return result