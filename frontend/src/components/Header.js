import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../logo.jpg';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header style={{ backgroundColor: 'var(--md-sys-color-surface)', boxShadow: 'var(--md-sys-elevation-1)', position: 'sticky', top: 0, zIndex: 100, marginBottom: '48px' }}>
      <div className="container" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="CREAM Portal Logo" style={{ height: '72px', objectFit: 'contain' }} />
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link to="/education" className="m3-button m3-button--text" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Education</Link>
          {user ? (
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link to="/dashboard" className="m3-button m3-button--text" style={{ textDecoration: 'none' }}>Dashboard</Link>
              <span className="label-large">Hello, {user.name}</span>
              <button onClick={logout} className="m3-button m3-button--outlined">Logout</button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link to="/login" className="m3-button m3-button--outlined" style={{ textDecoration: 'none' }}>Login</Link>
              <Link to="/register" className="m3-button m3-button--filled" style={{ textDecoration: 'none' }}>Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
