from sqlalchemy import Column, Integer, String, Text
from database.db import Base


class Medicine(Base):
    __tablename__ = "medicines"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(150), nullable=False)
    uses = Column(Text, nullable=False)

    dosage = Column(String(100), nullable=False)
    timing = Column(String(100), nullable=False)

    side_effects = Column(Text, nullable=False)
    warnings = Column(Text, nullable=False)

    confidence = Column(Integer, default=0)
    image = Column(String(255), nullable=True)