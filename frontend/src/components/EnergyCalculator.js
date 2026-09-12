import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const EnergyCalculator = () => {
  const { user, token } = useContext(AuthContext);
  const [consumption, setConsumption] = useState('');
  const [results, setResults] = useState(null);

  const calculateSolar = (e) => {
    e.preventDefault();
    if (!consumption || isNaN(consumption)) return;

    const kwh = parseFloat(consumption);
    
    // Simple mock logic for Indian context
    // Assume 1 kW solar generates ~120 kWh per month
    const recommendedCapacity = (kwh / 120).toFixed(1); 
    
    // Cost ~ ₹60,000 per kW (approx)
    const cost = Math.round(recommendedCapacity * 60000);
    
    // Savings ~ ₹8 per unit (tariff)
    const annualSavings = Math.round(kwh * 8 * 12);
    
    // CO2 ~ 0.82 kg per kWh
    const co2Reduction = Math.round(kwh * 12 * 0.82);

    setResults({
      capacity: `${recommendedCapacity} kW`,
      cost: `₹ ${cost.toLocaleString('en-IN')}`,
      savings: `₹ ${annualSavings.toLocaleString('en-IN')} / year`,
      co2: `${co2Reduction.toLocaleString('en-IN')} kg / year`,
      rawKwh: kwh,
      rawCapacity: recommendedCapacity,
      rawCost: cost,
      rawSavings: annualSavings,
      rawCo2: co2Reduction
    });
  };

  const saveAssessment = async () => {
    if (!results || !token) return;
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/energy/assess`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          consumption_kwh: parseFloat(results.rawKwh),
          recommended_capacity_kw: parseFloat(results.rawCapacity),
          estimated_cost_inr: parseFloat(results.rawCost),
          annual_savings_inr: parseFloat(results.rawSavings),
          co2_reduction_kg: parseFloat(results.rawCo2)
        })
      });
      if (res.ok) {
        alert("Assessment saved to Dashboard!");
      } else {
        alert("Failed to save assessment.");
      }
    } catch(e) {
      console.error(e);
      alert("Error saving assessment.");
    }
  };

  return (
    <div className="m3-card m3-card--elevated" style={{ marginTop: '32px' }}>
      <h2 className="headline-large" style={{ marginBottom: '16px' }}>Energy Savings Calculator</h2>
      <p className="body-medium" style={{ marginBottom: '24px' }}>
        Enter your average monthly electricity consumption (in kWh/units) to estimate your solar potential.
      </p>

      <form onSubmit={calculateSolar} style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input 
          type="number" 
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
          placeholder="e.g. 300" 
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--md-sys-shape-corner-small)',
            border: '1px solid var(--md-sys-color-outline)',
            font: 'var(--md-sys-typescale-body-large)',
            width: '200px'
          }}
          required
        />
        <button type="submit" className="m3-button m3-button--filled">Calculate</button>
      </form>

      {results && (
        <div style={{ marginTop: '32px', padding: '16px', backgroundColor: 'var(--md-sys-color-primary-container)', color: 'var(--md-sys-color-on-primary-container)', borderRadius: 'var(--md-sys-shape-corner-medium)' }}>
          <h3 className="title-large" style={{ marginBottom: '16px' }}>Your Solar Potential</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <p className="label-large">Recommended System</p>
              <p className="body-large" style={{ fontWeight: 'bold' }}>{results.capacity}</p>
            </div>
            <div>
              <p className="label-large">Estimated Cost</p>
              <p className="body-large" style={{ fontWeight: 'bold' }}>{results.cost}</p>
            </div>
            <div>
              <p className="label-large">Est. Annual Savings</p>
              <p className="body-large" style={{ fontWeight: 'bold', color: 'green' }}>{results.savings}</p>
            </div>
            <div>
              <p className="label-large">CO₂ Reduction</p>
              <p className="body-large" style={{ fontWeight: 'bold' }}>{results.co2}</p>
            </div>
          </div>
          {user && (
            <div style={{ marginTop: '24px' }}>
              <button onClick={saveAssessment} className="m3-button m3-button--filled">Save to Dashboard</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnergyCalculator;
