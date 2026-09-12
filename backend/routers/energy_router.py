from fastapi import APIRouter, HTTPException, Depends
from typing import List
from datetime import datetime
import models
import auth
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/api/energy", tags=["energy"])

@router.post("/assess")
async def save_assessment(assessment: models.EnergyAssessment, user_id: str = Depends(auth.get_current_user)):
    from main import db
    if db is None:
        raise HTTPException(status_code=500, detail="Database not connected")
    
    assessment_dict = assessment.dict()
    assessment_dict["user_id"] = user_id
    if not assessment_dict.get("timestamp"):
        assessment_dict["timestamp"] = datetime.utcnow().isoformat()
        
    await db.energy_assessments.insert_one(assessment_dict)
    return {"message": "Assessment saved successfully"}

@router.get("/assess", response_model=List[models.EnergyAssessment])
async def get_assessments(user_id: str = Depends(auth.get_current_user)):
    from main import db
    if db is None:
        raise HTTPException(status_code=500, detail="Database not connected")
        
    cursor = db.energy_assessments.find({"user_id": user_id}).sort("timestamp", -1)
    assessments = await cursor.to_list(length=100)
    return assessments

@router.post("/log")
async def add_energy_log(log: models.EnergyLog, user_id: str = Depends(auth.get_current_user)):
    from main import db
    if db is None:
        raise HTTPException(status_code=500, detail="Database not connected")
        
    log_dict = log.dict()
    log_dict["user_id"] = user_id
    
    await db.energy_logs.insert_one(log_dict)
    return {"message": "Energy log saved successfully"}

@router.get("/log", response_model=List[models.EnergyLog])
async def get_energy_logs(user_id: str = Depends(auth.get_current_user)):
    from main import db
    if db is None:
        raise HTTPException(status_code=500, detail="Database not connected")
        
    cursor = db.energy_logs.find({"user_id": user_id}).sort("month", 1)
    logs = await cursor.to_list(length=100)
    return logs
