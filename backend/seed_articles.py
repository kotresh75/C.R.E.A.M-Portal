import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv(dotenv_path='../.env')

articles_data = [
    {
        "title": "Understanding the PM-Surya Ghar Scheme",
        "category": "Solar",
        "content": "The PM-Surya Ghar: Muft Bijli Yojana aims to light up 1 crore households by providing up to 300 units of free electricity every month. Subsidies cover up to 60% of the system cost for 2kW installations. It is a major push for rooftop solar in India.",
        "tags": ["Subsidy", "Government", "Rooftop"]
    },
    {
        "title": "Wind Energy Basics for Communities",
        "category": "Wind",
        "content": "Wind energy is one of the fastest-growing renewable energy sources globally. For community-scale projects in India, states like Tamil Nadu and Gujarat offer excellent wind potential. A single turbine can power hundreds of homes.",
        "tags": ["Wind", "Community Grid", "Basics"]
    },
    {
        "title": "Biomass: Powering Rural India",
        "category": "Biomass",
        "content": "Biomass energy converts agricultural residue into electricity and biogas. It is a fantastic solution for rural India, providing local employment while managing waste effectively. The MNRE provides various incentives for setting up biogas plants.",
        "tags": ["Rural", "Agriculture", "Waste-to-Energy"]
    },
    {
        "title": "How to Maintain Your Solar Panels",
        "category": "Solar",
        "content": "Solar panels require very little maintenance. In dusty environments, cleaning them with water once a month can improve efficiency by up to 15%. Always check the inverter display for any fault indicators.",
        "tags": ["Maintenance", "Efficiency", "Tips"]
    }
]

async def seed():
    uri = os.getenv('MongoUri')
    if not uri:
        print("MongoUri not found in .env")
        return
        
    client = AsyncIOMotorClient(uri)
    db = client.cream_portal
    
    # Clear existing articles to avoid duplicates
    await db.articles.delete_many({})
    
    # Insert new articles
    result = await db.articles.insert_many(articles_data)
    print(f"Successfully seeded {len(result.inserted_ids)} articles!")

if __name__ == "__main__":
    asyncio.run(seed())
