<div align="center">
  <h1>C.R.E.A.M Portal 🌍⚡</h1>
  <p><b>Community Renewable Energy Awareness & Management</b></p>
  <p><i>A Societal Project (1BCP308) promoting SDGs 7, 11, and 15</i></p>
</div>

---

## 📖 About The Project
The **C.R.E.A.M Portal** is a full-stack web application designed to bridge the knowledge gap regarding renewable energy in local communities. Built to simplify the transition to sustainable energy, the portal offers an intuitive **Energy Calculator** and an unbiased **Educational Hub**.

**Team Members:** Kotresh C | Chinmay Homkar | Preetham Javali  
**Project Guide:** Prof. Rajini Tiwari  

---

## ✨ Key Features
- ⚡ **Energy Calculator:** Calculate solar capacity, installation costs, annual savings, and CO2 reduction based on your monthly grid (BESCOM) bill.
- 📚 **Educational Hub:** Read unbiased articles and guides on sustainable energy practices.
- 🔒 **User Dashboard:** Secure authentication (JWT) to save your calculation history and track your transition goals.
- 🌓 **Premium UI:** Glassmorphism design with a fully responsive, dark-mode-first aesthetic.

---

## 🛠️ Tech Stack
- **Frontend:** React, HTML5, Custom CSS3
- **Backend:** Python, FastAPI
- **Database:** MongoDB
- **Architecture:** Decoupled Client-Server

---

## 📑 Official Project Documentation (Syllabus Phases)
This project strictly follows the 15-phase Continuous Internal Evaluation (CIE) process as outlined in the 1BCP308 syllabus.

### Part 1: Planning & Research
| Phase | Deliverable / Activity | Status | Document Link |
| :--- | :--- | :---: | :--- |
| **Phase 1** | Course Plan & Team Structure | ✅ | [📄 View phase-1-course-plan.md](./docs/phase-1-course-plan.md) |
| **Phase 2** | Topic Selection | ✅ | [📄 View phase-2-topic-selection.md](./docs/phase-2-topic-selection.md) |
| **Phase 4** | Problem Statement & Scope | ✅ | [📄 View phase-4-problem-statement.md](./docs/phase-4-problem-statement.md) |
| **Phase 5** | Literature Review | ✅ | [📄 View phase-5-literature-review.md](./docs/phase-5-literature-review.md) |
| **Phase 6** | Work Plan (Gantt Chart) | ✅ | [📄 View phase-6-work-plan.md](./docs/phase-6-work-plan.md) |
| **Phase 7** | Feasibility Analysis | ✅ | [📄 View phase-7-feasibility-analysis.md](./docs/phase-7-feasibility-analysis.md) |
| **Phase 8** | Concept Note (Design Outline) | ✅ | [📄 View phase-8-concept-note.md](./docs/phase-8-concept-note.md) |
| **Phase 9** | Technical Analysis | ✅ | [📄 View phase-9-technical-analysis.md](./docs/phase-9-technical-analysis.md) |

### Part 2: Field Work & Final Deliverables
| Phase | Deliverable / Activity | Status | Document Link |
| :--- | :--- | :---: | :--- |
| **Phase 3** | Preliminary Survey (Stakeholders) | ✅ | [📄 View phase-3-preliminary-survey.md](./docs/phase-3-preliminary-survey.md) |
| **Phase 11** | Testing & Refinement | ✅ | [📄 View phase-11-testing.md](./docs/phase-11-testing.md) |
| **Phase 12** | Field Implementation Record | ✅ | [📄 View phase-12-implementation.md](./docs/phase-12-implementation.md) |
| **Phase 13** | Draft Project Report | ✅ | [📄 View phase-13-draft-report.md](./docs/phase-13-draft-report.md) |
| **Phase 14** | Presentation Deck Outline | ✅ | [📄 View phase-14-presentation.md](./docs/phase-14-presentation.md) |
| **Phase 15** | Final Submission Checklist | ✅ | [📄 View phase-15-final-report.md](./docs/phase-15-final-report.md) |

*(Note: Phase 10 corresponds to the App Development/Codebase itself).*

---

## 📁 Annexures & References
- 📝 [Annexure A: Preliminary Survey Questionnaire](./docs/annexure-questionnaire.md)
- 👥 [Annexure B: Team Peer-Evaluation Sheet](./docs/annexure-peer-evaluation.md)
- 📋 [Official Syllabus Reference](./docs/syllabus.md)

---

## 🚀 How to Run Locally

### 1. Start the Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Start the Frontend (React)
```bash
cd frontend
npm install
npm start
```
*(Note: Ensure MongoDB is running locally or provide a valid URI in your environment variables).*
