from pydantic import BaseModel, EmailStr
from typing import Optional, List

class UserProfile(BaseModel):
    location: Optional[str] = None
    property_type: Optional[str] = None
    average_tariff: Optional[float] = None
    roof_area: Optional[float] = None

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: str
    name: str
    email: EmailStr
    profile: Optional[UserProfile] = None
    role: str = "user"

class EnergyAssessment(BaseModel):
    consumption_kwh: float
    recommended_capacity_kw: float
    estimated_cost_inr: float
    annual_savings_inr: float
    co2_reduction_kg: float
    timestamp: Optional[str] = None

class EnergyLog(BaseModel):
    month: str # e.g. "2026-09"
    consumption_kwh: float
    bill_amount_inr: float

class Article(BaseModel):
    id: Optional[str] = None
    title: str
    category: str
    content: str
    tags: List[str] = []

