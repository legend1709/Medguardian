from sqlalchemy import Column, Integer, String, ForeignKey
from database.db import Base


class ScanHistory(Base):
    __tablename__ = "scan_history"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    medicine_name = Column(String(150), nullable=False)
    uses = Column(String(255), nullable=False)
    confidence = Column(Integer, nullable=False)

    scan_date = Column(String(50), nullable=False)
    image_path = Column(String(255), nullable=True)