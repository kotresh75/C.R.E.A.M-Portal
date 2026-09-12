from fastapi import FastAPI
from contextlib import asynccontextmanager
from dotenv import load_dotenv
import os
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv(dotenv_path="../.env")

# Setup MongoDB Connection
MONGO_URI = os.getenv("MongoUri")
client = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global client, db
    if MONGO_URI:
        try:
            client = AsyncIOMotorClient(MONGO_URI)
            db = client.cream_portal
            print("Successfully initialized MongoDB connection!")
        except Exception as e:
            print(f"Error initializing MongoDB: {e}")
    yield
    if client:
        client.close()

app = FastAPI(title="CREAM Portal API", lifespan=lifespan)

@app.get("/")
@app.head("/")
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
    import os
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)
