from fastapi import FastAPI
from dotenv import load_dotenv
import os
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv(dotenv_path="../.env")

app = FastAPI(title="CREAM Portal API")

# Setup MongoDB Connection
MONGO_URI = os.getenv("MongoUri")
client = None
db = None

@app.on_event("startup")
async def startup_db_client():
    global client, db
    if MONGO_URI:
        try:
            client = AsyncIOMotorClient(MONGO_URI)
            db = client.cream_portal
            print("Successfully initialized MongoDB connection!")
        except Exception as e:
            print(f"Error initializing MongoDB: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    if client:
        client.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to CREAM Portal API"}

@app.get("/health")
async def health_check():
    """Endpoint to confirm the backend and database are running correctly."""
    db_status = "disconnected"
    if client:
        try:
            # Ping the database to ensure connection is active
            await client.admin.command('ping')
            db_status = "connected"
        except Exception as e:
            db_status = f"error: {str(e)}"
            
    return {
        "backend": "running",
        "database": db_status
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
