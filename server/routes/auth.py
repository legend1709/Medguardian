from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


# -----------------------------
# Request Models
# -----------------------------
class LoginRequest(BaseModel):
    phone: str


class OTPRequest(BaseModel):
    phone: str
    otp: str


# -----------------------------
# Send OTP
# POST /auth/login
# -----------------------------
@router.post("/login")
def login(data: LoginRequest):
    return {
        "success": True,
        "message": "OTP sent successfully",
        "phone": data.phone
    }


# -----------------------------
# Verify OTP
# POST /auth/otp
# -----------------------------
@router.post("/otp")
def verify_otp(data: OTPRequest):

    # Temporary OTP
    if data.otp == "123456":
        return {
            "success": True,
            "token": "medguardian_demo_token",
            "user": {
                "id": 1,
                "name": "Santosh Yadav",
                "phone": data.phone
            }
        }

    return {
        "success": False,
        "message": "Invalid OTP"
    }


# -----------------------------
# User Profile
# GET /auth/profile
# -----------------------------
@router.get("/profile")
def profile():
    return {
        "id": 1,
        "name": "Santosh Yadav",
        "phone": "+91 9876543210",
        "email": "demo@medguardian.com"
    }