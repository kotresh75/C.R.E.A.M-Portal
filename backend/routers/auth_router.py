from fastapi import APIRouter, HTTPException, Depends, status
import models
import auth

router = APIRouter(prefix="/api/auth", tags=["auth"])

@router.post("/register", response_model=models.UserResponse)
async def register(user: models.UserCreate):
    from main import db
    if db is None:
        raise HTTPException(status_code=500, detail="Database not connected")
    
    existing_user = await db.users.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
        
    hashed_password = auth.get_password_hash(user.password)
    user_dict = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password,
        "role": "user",
        "profile": {}
    }
    
    result = await db.users.insert_one(user_dict)
    
    return models.UserResponse(
        id=str(result.inserted_id),
        name=user_dict["name"],
        email=user_dict["email"],
        role=user_dict["role"],
        profile=None
    )

@router.post("/login")
async def login(user: models.UserLogin):
    from main import db
    if db is None:
        raise HTTPException(status_code=500, detail="Database not connected")
        
    db_user = await db.users.find_one({"email": user.email})
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid email or password")
        
    if not auth.verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid email or password")
        
    access_token = auth.create_access_token(data={"sub": str(db_user["_id"]), "role": db_user.get("role", "user")})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": str(db_user["_id"]),
            "name": db_user["name"],
            "email": db_user["email"],
            "role": db_user.get("role", "user")
        }
    }
