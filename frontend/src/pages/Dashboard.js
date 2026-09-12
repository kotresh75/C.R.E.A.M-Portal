import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { token, user } = useContext(AuthContext);
  const [assessments, setAssessments] = useState([]);
  const [logs, setLogs] = useState([]);
  
  const [month, setMonth] = useState('');
  const [consumption, setConsumption] = useState('');
  const [billAmount, setBillAmount] = useState('');

  const fetchAssessments = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/energy/assess`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setAssessments(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchLogs = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/energy/log`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setLogs(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAssessments();
      fetchLogs();
    }
  }, [token]);

  const handleLogSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/energy/log`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          month,
          consumption_kwh: parseFloat(consumption),
          bill_amount_inr: parseFloat(billAmount)
        })
      });
      if (res.ok) {
        setMonth('');
        setConsumption('');
        setBillAmount('');
        fetchLogs();
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!user) {
    return <div style={{ padding: '48px', textAlign: 'center' }}>Please log in to view your dashboard.</div>;
  }

  return (
    <div style={{ padding: '24px' }}>
      <h2 className="display-small" style={{ marginBottom: '32px' }}>Welcome to your Dashboard, {user.name}</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
        
        <div className="m3-card m3-card--elevated">
          <h3 className="title-large" style={{ marginBottom: '16px' }}>Log Monthly Electricity Usage</h3>
          <form onSubmit={handleLogSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label className="label-large" style={{ display: 'block' }}>Month (YYYY-MM)</label>
              <input type="month" value={month} onChange={e => setMonth(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div>
              <label className="label-large" style={{ display: 'block' }}>Consumption (kWh)</label>
              <input type="number" value={consumption} onChange={e => setConsumption(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div>
              <label className="label-large" style={{ display: 'block' }}>Bill Amount (₹)</label>
              <input type="number" value={billAmount} onChange={e => setBillAmount(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
            </div>
            <button type="submit" className="m3-button m3-button--filled">Save Log</button>
          </form>
        </div>

        <div className="m3-card m3-card--elevated">
          <h3 className="title-large" style={{ marginBottom: '16px' }}>Energy Consumption Over Time</h3>
          {logs.length > 0 ? (
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={logs} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="consumption_kwh" stroke="var(--md-sys-color-primary)" strokeWidth={3} />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p>No energy logs yet. Start adding them!</p>
          )}
        </div>

      </div>

      <h3 className="title-large" style={{ marginBottom: '16px' }}>Your Saved Solar Assessments</h3>
      {assessments.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {assessments.map((a, i) => (
            <div key={i} className="m3-card m3-card--outlined">
              <p className="label-medium">Date: {new Date(a.timestamp).toLocaleDateString()}</p>
              <p className="body-large"><strong>{a.recommended_capacity_kw} kW</strong> System</p>
              <p>Savings: ₹{a.annual_savings_inr}/yr</p>
              <p>Cost: ₹{a.estimated_cost_inr}</p>
              <p style={{ color: 'green' }}>CO₂ Reduction: {a.co2_reduction_kg} kg/yr</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You haven't run any solar assessments yet. <Link to="/">Go to Calculator</Link></p>
      )}
    </div>
  );
};

export default Dashboard;
