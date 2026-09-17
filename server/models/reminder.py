from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from database.db import Base


class Reminder(Base):
    __tablename__ = "reminders"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    medicine_name = Column(String(150), nullable=False)
    time = Column(String(20), nullable=False)

    active = Column(Boolean, default=True)