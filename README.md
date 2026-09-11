# CREAM Portal Setup Instructions

This document provides instructions on how to download dependencies and start the CREAM Portal application.

## Prerequisites
- Node.js (v18 or higher)
- Python (v3.9 or higher)
- MongoDB Database

## Frontend (React)

1. Open a command prompt (cmd).
2. Navigate to the frontend directory:
   ```cmd
   cd frontend
   ```
3. Install the required npm dependencies:
   ```cmd
   npm install
   ```
4. Start the development server:
   ```cmd
   npm start
   ```
The frontend will be available at `http://localhost:3000`.

## Backend (FastAPI Python)

1. Open a command prompt (cmd).
2. Navigate to the backend directory:
   ```cmd
   cd backend
   ```
3. Install the required Python dependencies:
   ```cmd
   pip install -r requirements.txt
   ```
4. Ensure your `.env` file is present in the root `f:\cream-portal` directory with your MongoDB credentials (e.g., `MongoUri`).
5. Start the FastAPI server:
   ```cmd
   python main.py
   ```
The backend API will be available at `http://localhost:8000`.
