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

---

## 📊 Project Status & Roadmap

Based on the **Community Project / Societal Project (1BCP308)** syllabus requirements, here is the detailed breakdown of completed tasks and pending deliverables.

### 💻 Software Development (COMPLETED ✅)
*Syllabus Phase 10: App Development*
- [x] **Frontend:** React setup, Premium Dark Mode UI, Routing, Login/Register UI.
- [x] **Backend:** FastAPI, MongoDB schema, CORS, Authentication API.
- [x] **Core Features:** Energy Management Dashboard, Energy Calculator integration.
- [x] **Educational Module:** Renewable Energy Education Module with article seeding and AI-generated images.

### 📝 Documentation & Planning (PENDING ⏳)
*Required for CIE & SEE Evaluation.*
- [ ] **Phase 1 - Course Plan:** Define the team structure and finalize the course plan.
- [ ] **Phase 2 - Topic Selection:** Document the shortlisted project topic (*Community Renewable Energy Awareness and Management Portal*).
- [ ] **Phase 4 - Problem Statement:** Draft the official approved problem statement, scope, and objectives.
- [ ] **Phase 5 - Literature Review:** Study existing solutions and prepare a baseline analysis summary.
- [ ] **Phase 6 - Work Plan:** Create a Gantt chart, plan activities, divide roles, and prepare the project schedule.
- [ ] **Phase 7 - Feasibility Analysis:** Generate possible engineering solutions and evaluate technical feasibility.
- [ ] **Phase 8 - Concept Note:** Finalize the concept, methods, and expected outcomes (Design Outline).
- [ ] **Phase 9 - Technical Analysis:** Document data processing, calculations, sizing, and mapping.

### 🤝 Community Interaction & Field Work (PENDING ⏳)
*Mandatory stakeholder engagement evidence required.*
- [ ] **Phase 3 - Preliminary Survey:** Collect initial data from the community/users. *(Deliverable: Survey notes, interview records)*
- [ ] **Phase 11 - Testing & Refinement:** Test the prototype with real users and validate the proposal. *(Deliverable: Test results / revised output)*
- [ ] **Phase 12 - Field Implementation:** Conduct a demonstration or awareness activity within the community. *(Deliverable: Photos, attendance, implementation record)*

### 🎓 Final Deliverables (PENDING ⏳)
*Required for Final Evaluation and Viva.*
- [ ] **Phase 13 - Draft Report:** Compile findings, stakeholder feedback, and observations into a comprehensive draft report.
- [ ] **Phase 14 - Presentation Deck:** Prepare slides/poster and rehearse for the mock presentation.
- [ ] **Phase 15 - Final Report:** Submit the final project report, complete the presentation, and reflect on the learning.
