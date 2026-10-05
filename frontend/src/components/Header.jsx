import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CreamLogo from './CreamLogo';
import gsap from 'gsap';

const NavLink = ({ to, children, currentPath, onClick }) => {
  const isActive = currentPath === to;
  return (
    <Link 
      to={to} 
      onClick={onClick}
      style={{ 
        textDecoration: 'none', 
        color: isActive ? 'var(--sys-color-on-background)' : 'var(--sys-color-muted)', 
        fontWeight: '500', 
        fontSize: '0.95rem',
        fontFamily: 'var(--font-sans)',
        padding: '8px 16px',
        transition: 'color 0.2s ease'
      }}
      onMouseOver={e => { if(!isActive) e.currentTarget.style.color = 'var(--sys-color-on-background)' }}
      onMouseOut={e => { if(!isActive) e.currentTarget.style.color = 'var(--sys-color-muted)' }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Elegant fade down entry for the whole header
    gsap.fromTo(headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header ref={headerRef} style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, 
        background: 'rgba(250, 250, 250, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.6)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.02)'
      }}>
        
        <div className="header-container">
          
          {/* LEFT: Brand */}
          <div className="header-brand">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CreamLogo style={{ width: '48px', height: '48px', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '700', color: 'var(--sys-color-on-background)', letterSpacing: '-0.02em', marginTop: '2px' }}>
                .R.E.A.M.
              </span>
            </Link>
          </div>

          {/* CENTER: Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '8px' }}>
            <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
            <NavLink to="/education" currentPath={location.pathname}>Knowledge Base</NavLink>
            {user && <NavLink to="/dashboard" currentPath={location.pathname}>Dashboard</NavLink>}
          </nav>

          {/* RIGHT: Actions */}
          <div className="header-actions desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--sys-color-on-background)' }}>{user.name}</span>
                <button onClick={logout} className="m3-button m3-button--outlined" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                  Logout
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'var(--sys-color-muted)', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--sys-color-on-background)'} onMouseOut={e => e.currentTarget.style.color='var(--sys-color-muted)'}>
                  Log in
                </Link>
                <Link to="/register" className="m3-button" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '10px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--sys-color-on-background)', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
            <div style={{ width: '24px', height: '2px', background: 'var(--sys-color-on-background)', transition: '0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}></div>
            <div style={{ width: '24px', height: '2px', background: 'var(--sys-color-on-background)', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
          </button>

        </div>
        
        {/* MOBILE MENU DROPDOWN */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '24px', gap: '16px' }}>
            <NavLink to="/" currentPath={location.pathname} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/education" currentPath={location.pathname} onClick={toggleMenu}>Knowledge Base</NavLink>
            {user && <NavLink to="/dashboard" currentPath={location.pathname} onClick={toggleMenu}>Dashboard</NavLink>}
            <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '16px 0' }} />
            {user ? (
              <button onClick={() => { logout(); toggleMenu(); }} className="m3-button m3-button--outlined" style={{ width: '100%', padding: '12px' }}>Logout</button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/login" onClick={toggleMenu} className="m3-button m3-button--outlined" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>Log in</Link>
                <Link to="/register" onClick={toggleMenu} className="m3-button" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>Sign Up</Link>
              </div>
            )}
          </nav>
        </div>
      </header>
      
      <style>{`
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 40px;
          box-sizing: border-box;
          width: 100%;
        }
        .mobile-menu {
          display: none;
          background: rgba(250, 250, 250, 0.98);
          backdrop-filter: blur(20px);
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 16px 24px;
          }
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-menu.open {
            display: block;
            animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Header;
