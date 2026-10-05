import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--md-sys-color-surface-variant)', color: 'var(--md-sys-color-on-surface-variant)', padding: '48px 0 24px 0', marginTop: 'auto', borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
        <div>
          <h3 className="title-large" style={{ color: 'var(--md-sys-color-primary)', marginBottom: '16px' }}>CREAM Portal</h3>
          <p className="body-medium">Community Renewable Energy Awareness and Management. Empowering communities for a sustainable future.</p>
        </div>
        <div>
          <h4 className="title-medium" style={{ marginBottom: '16px' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} className="body-medium">Home</Link>
            <Link to="/education" style={{ color: 'inherit', textDecoration: 'none' }} className="body-medium">Education</Link>
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }} className="body-medium">Login</Link>
          </div>
        </div>
        <div>
          <h4 className="title-medium" style={{ marginBottom: '16px' }}>Contact</h4>
          <p className="body-medium">Email: info@creamportal.in</p>
          <p className="body-medium">Phone: +91 12345 67890</p>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
        <p className="label-medium">&copy; {new Date().getFullYear()} CREAM Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
