import requests

# Register
reg_url = "http://localhost:8000/api/auth/register"
reg_payload = {
    "name": "Test User",
    "email": "test2@test.com",
    "password": "mypassword"
}
requests.post(reg_url, json=reg_payload)

# Login to get token
login_url = "http://localhost:8000/api/auth/login"
login_payload = {
    "email": "test2@test.com",
    "password": "mypassword"
}
res = requests.post(login_url, json=login_payload)
token = res.json().get("access_token")

if token:
    print("GOT TOKEN")
    headers = {"Authorization": f"Bearer {token}"}
    
    # Assess
    assess_url = "http://localhost:8000/api/energy/assess"
    assess_payload = {
        "consumption_kwh": 300,
        "recommended_capacity_kw": 2.5,
        "estimated_cost_inr": 150000,
        "annual_savings_inr": 28800,
        "co2_reduction_kg": 2952
    }
    r = requests.post(assess_url, json=assess_payload, headers=headers)
    print("SAVE ASSESS:", r.status_code, r.text)
    
    r = requests.get(assess_url, headers=headers)
    print("GET ASSESS:", r.status_code, r.text[:100])
    
    # Log
    log_url = "http://localhost:8000/api/energy/log"
    log_payload = {
        "month": "2026-09",
        "consumption_kwh": 320,
        "bill_amount_inr": 2560
    }
    r = requests.post(log_url, json=log_payload, headers=headers)
    print("SAVE LOG:", r.status_code, r.text)
    
    r = requests.get(log_url, headers=headers)
    print("GET LOG:", r.status_code, r.text[:100])
else:
    print("FAILED LOGIN", res.status_code, res.text)
