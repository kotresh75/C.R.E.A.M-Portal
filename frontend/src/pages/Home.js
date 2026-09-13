import React from 'react';
import { Link } from 'react-router-dom';
import EnergyCalculator from '../components/EnergyCalculator';
import heroImage from '../hero.jpg';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Communities with <br/><span style={{ color: 'var(--md-sys-color-primary-container)' }}>Clean Energy</span>
          </h1>
          <p className="hero-subtitle">
            Join the movement towards a sustainable future. Discover how renewable energy sources can reduce your carbon footprint, lower electricity bills, and unlock government subsidies for your home or business.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="m3-button m3-button--filled" style={{ fontSize: '18px', padding: '16px 32px' }} onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
              Estimate Savings
            </button>
            <Link to="/education" className="m3-button m3-button--outlined" style={{ fontSize: '18px', padding: '16px 32px', color: 'white', borderColor: 'white', textDecoration: 'none' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Renewable Energy / Overlapping Stats Section */}
      <section className="overlapping-section" style={{ marginBottom: '80px' }}>
        <div className="stats-container">
          <div className="stat-card">
            <h4 className="title-large" style={{ color: 'var(--md-sys-color-primary)', marginBottom: '12px', fontWeight: 'bold' }}>Cost Savings</h4>
            <p className="body-medium">Dramatically reduce your monthly electricity bills. Protect yourself from rising grid tariffs with free power.</p>
          </div>
          <div className="stat-card">
            <h4 className="title-large" style={{ color: '#F59E0B', marginBottom: '12px', fontWeight: 'bold' }}>Government Subsidies</h4>
            <p className="body-medium">Take advantage of central and state schemes designed to make solar installation affordable in India.</p>
          </div>
          <div className="stat-card">
            <h4 className="title-large" style={{ color: '#3B82F6', marginBottom: '12px', fontWeight: 'bold' }}>Environmental Impact</h4>
            <p className="body-medium">Reduce your reliance on fossil fuels. Every kilowatt generated helps decrease pollution and combat climate change.</p>
          </div>
        </div>
      </section>

      {/* Premium Key Sources Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px', padding: '0 24px' }}>
        <div className="premium-card">
          <h3 className="headline-small" style={{ color: 'var(--md-sys-color-primary)', marginBottom: '16px' }}>Solar Energy</h3>
          <p className="body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Harness the power of the sun. Learn about rooftop solar installations and maximize your government subsidies for a brighter tomorrow.</p>
        </div>
        <div className="premium-card" style={{ borderTopColor: '#F59E0B' }}>
          <h3 className="headline-small" style={{ color: '#F59E0B', marginBottom: '16px' }}>Wind Energy</h3>
          <p className="body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Understand how wind turbines can contribute to our community grid and provide clean power round the clock efficiently.</p>
        </div>
        <div className="premium-card" style={{ borderTopColor: '#3B82F6' }}>
          <h3 className="headline-small" style={{ color: '#3B82F6', marginBottom: '16px' }}>Biomass</h3>
          <p className="body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Explore organic energy solutions suitable for local agriculture. Turn waste into continuous, reliable, and sustainable power.</p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" style={{ marginBottom: '80px' }}>
        <h3 className="headline-large" style={{ textAlign: 'center', marginBottom: '40px' }}>Calculate Your Potential Savings</h3>
        <EnergyCalculator />
      </section>
    </main>
  );
};

export default Home;
