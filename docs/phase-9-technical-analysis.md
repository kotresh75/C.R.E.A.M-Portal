**[⬅️ Back to Main README](../README.md)** | **[⬅️ Previous Phase](./phase-8-concept-note.md)** | **[Next Phase ➡️](./phase-11-testing.md)**

---

# Phase 9: Technical Analysis & Data Processing

## 1. Introduction
This document outlines the technical analysis, underlying mathematical models, and data mapping used within the C.R.E.A.M Portal, specifically focusing on the core feature: the Energy Calculator.

## 2. Mathematical Models & Assumptions (Energy Calculator)
Currently, the portal uses a simplified, hard-coded baseline model suited for the Indian context (specifically Bangalore/BESCOM estimates) to process user inputs. 

**User Input:** Average Monthly Electricity Consumption in kWh (units).

**Calculations applied in the application logic (`EnergyCalculator.js`):**
- **System Capacity Sizing:** 
  - *Assumption:* 1 kW of solar capacity generates approximately 120 kWh per month.
  - *Formula:* `Recommended Capacity (kW) = Monthly Consumption (kWh) / 120`
- **Estimated Cost:**
  - *Assumption:* Average installation cost is roughly ₹60,000 per kW.
  - *Formula:* `Cost (INR) = Recommended Capacity (kW) * 60,000`
- **Estimated Annual Savings:**
  - *Assumption:* The flat grid tariff is estimated at ₹8 per unit.
  - *Formula:* `Annual Savings (INR) = Monthly Consumption (kWh) * 8 * 12`
- **CO₂ Reduction:**
  - *Assumption:* The carbon emission factor for the grid is ~0.82 kg CO₂ per kWh.
  - *Formula:* `Annual CO₂ Reduction (kg) = Monthly Consumption (kWh) * 12 * 0.82`

*(Note: While perfectly functional for this phase of the prototype, this model is basic. Future iterations should ideally move this logic to the FastAPI backend and dynamically fetch real-time, tiered BESCOM tariffs and MNRE subsidy rates rather than hardcoding them.)*

## 3. Data Flow & Schema Mapping
When a user clicks "Save to Dashboard", the calculated metrics are mapped to a JSON payload and sent securely to the backend.

**API Endpoint:** `POST /api/energy/assess`

**MongoDB Schema Mapping:**
```json
{
  "user_id": "JWT_Extracted_User_ID",
  "consumption_kwh": Float,
  "recommended_capacity_kw": Float,
  "estimated_cost_inr": Float,
  "annual_savings_inr": Float,
  "co2_reduction_kg": Float,
  "timestamp": "ISO_8601_DateTime"
}
```

## 4. Conclusion
The current technical processing accurately demonstrates the feasibility of transforming raw utility data into actionable environmental and financial metrics. The data mapping efficiently and securely links the React frontend to the MongoDB database via FastAPI.
