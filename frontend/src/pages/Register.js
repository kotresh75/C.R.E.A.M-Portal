import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(name, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '64px auto', padding: '24px' }} className="m3-card m3-card--elevated">
      <h2 className="headline-medium" style={{ marginBottom: '24px', textAlign: 'center' }}>Join the Community</h2>
      
      {error && <div style={{ color: 'var(--md-sys-color-error)', marginBottom: '16px', padding: '12px', backgroundColor: 'var(--md-sys-color-error-container)', borderRadius: '8px' }}>{error}</div>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label className="label-large" style={{ display: 'block', marginBottom: '8px' }}>Full Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--md-sys-color-outline)' }}
          />
        </div>

        <div>
          <label className="label-large" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--md-sys-color-outline)' }}
          />
        </div>
        
        <div>
          <label className="label-large" style={{ display: 'block', marginBottom: '8px' }}>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--md-sys-color-outline)' }}
          />
        </div>
        
        <button type="submit" className="m3-button m3-button--filled" style={{ marginTop: '16px' }}>
          Create Account
        </button>
      </form>
      
      <p className="body-medium" style={{ marginTop: '24px', textAlign: 'center' }}>
        Already have an account? <Link to="/login" style={{ color: 'var(--md-sys-color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>Log in</Link>
      </p>
    </div>
  );
};

export default Register;
