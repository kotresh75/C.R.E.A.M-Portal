from fastapi import APIRouter, HTTPException
from typing import List, Optional
import models

router = APIRouter(prefix="/api/education", tags=["education"])

@router.get("/articles", response_model=List[models.Article])
async def get_articles(category: Optional[str] = None):
    from main import db
    if db is None:
        raise HTTPException(status_code=500, detail="Database not connected")
    
    query = {}
    if category:
        query["category"] = category
        
    cursor = db.articles.find(query)
    articles = await cursor.to_list(length=100)
    
    # Convert _id to string id
    for article in articles:
        article["id"] = str(article["_id"])
        
    return articles
