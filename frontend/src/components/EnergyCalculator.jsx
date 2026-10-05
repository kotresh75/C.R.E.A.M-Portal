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
      <h2 className="headline-large" style={{ marginBottom: '16px' }}>System Assessor</h2>
      <p className="body-large" style={{ marginBottom: '40px' }}>
        Enter your average monthly electricity consumption (in kWh/units) to generate an immediate solar viability model.
      </p>

      <form onSubmit={calculateSolar} style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input 
          type="number" 
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
          placeholder="e.g. 300" 
          className="premium-input"
          style={{ width: '250px' }}
          required
        />
        <button type="submit" className="m3-button m3-button--filled" style={{ height: '58px' }}>Assess Viability</button>
      </form>

      {results && (
        <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid var(--sys-color-outline)' }}>
          <h3 className="headline-small" style={{ marginBottom: '24px' }}>Viability Model</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div className="stat-card" style={{ padding: '24px' }}>
              <p className="label-large">Recommended System</p>
              <p className="headline-small tabular-nums" style={{ marginTop: '12px', color: 'var(--sys-color-on-background)' }}>{results.capacity}</p>
            </div>
            <div className="stat-card" style={{ padding: '24px' }}>
              <p className="label-large">Estimated Capital</p>
              <p className="headline-small tabular-nums" style={{ marginTop: '12px', color: 'var(--sys-color-on-background)' }}>{results.cost}</p>
            </div>
            <div className="stat-card" style={{ padding: '24px', borderTop: '2px solid var(--sys-color-primary)' }}>
              <p className="label-large" style={{ color: 'var(--sys-color-primary)' }}>Annual Savings</p>
              <p className="headline-small tabular-nums" style={{ marginTop: '12px', color: 'var(--sys-color-primary)' }}>{results.savings}</p>
            </div>
            <div className="stat-card" style={{ padding: '24px' }}>
              <p className="label-large">CO₂ Offset</p>
              <p className="headline-small tabular-nums" style={{ marginTop: '12px', color: 'var(--sys-color-on-background)' }}>{results.co2}</p>
            </div>
          </div>
          {user && (
            <div style={{ marginTop: '32px' }}>
              <button onClick={saveAssessment} className="m3-button m3-button--outlined">Archive to Dashboard</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnergyCalculator;
