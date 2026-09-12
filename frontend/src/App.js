import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EnergyCalculator from './components/EnergyCalculator';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Education from './pages/Education';
import ArticleDetail from './pages/ArticleDetail';
import { AuthProvider, AuthContext } from './context/AuthContext';

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="glass-panel" style={{ padding: '20px 32px', margin: '24px 0 48px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderRadius: '24px', position: 'sticky', top: '24px', zIndex: 100 }}>
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="display-medium text-gradient">
            CREAM Portal
          </h1>
        </Link>
        <p className="title-medium" style={{ margin: 0 }}>Community Renewable Energy Awareness and Management</p>
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
    </header>
  );
};

const Home = () => (
  <main>
    <section style={{ marginBottom: '80px', textAlign: 'center', padding: '64px 0' }}>
      <h2 className="display-large" style={{ marginBottom: '24px' }}>
        Welcome to a <span className="text-gradient">Sustainable Future</span>
      </h2>
      <p className="body-large" style={{ margin: '0 auto', maxWidth: '800px', color: 'var(--md-sys-color-on-surface-variant)' }}>
        Empowering our community to adopt renewable energy sources, reduce carbon footprints, and save on electricity costs. Join the movement today.
      </p>
      
      <div style={{ marginTop: '40px', display: 'flex', gap: '24px', justifyContent: 'center' }}>
        <button className="m3-button m3-button--filled" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>Explore Energy Calculator</button>
        <Link to="/education" className="m3-button m3-button--outlined" style={{ textDecoration: 'none' }}>View Resources</Link>
      </div>

      <div id="calculator">
        <EnergyCalculator />
      </div>
    </section>

    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
      <div className="m3-card m3-card--elevated">
        <h3 className="title-large text-gradient">Solar Energy</h3>
        <p className="body-medium" style={{ marginTop: '12px' }}>Harness the power of the sun. Learn about rooftop solar installations and maximize your government subsidies.</p>
      </div>
      <div className="m3-card m3-card--elevated">
        <h3 className="title-large text-gradient">Wind Energy</h3>
        <p className="body-medium" style={{ marginTop: '12px' }}>Understand how wind turbines can contribute to our community grid and provide clean power round the clock.</p>
      </div>
      <div className="m3-card m3-card--elevated">
        <h3 className="title-large text-gradient">Biomass</h3>
        <p className="body-medium" style={{ marginTop: '12px' }}>Explore organic energy solutions suitable for local agriculture. Turn waste into continuous, reliable power.</p>
      </div>
    </section>
  </main>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="container">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/:id" element={<ArticleDetail />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
