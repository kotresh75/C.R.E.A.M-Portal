import React from 'react';
import EnergyCalculator from './components/EnergyCalculator';

function App() {
  return (
    <div className="container">
      <header style={{ padding: '24px 0', borderBottom: '1px solid var(--md-sys-color-outline-variant)', marginBottom: '32px' }}>
        <h1 className="display-large" style={{ color: 'var(--md-sys-color-primary)' }}>
          CREAM Portal
        </h1>
        <p className="title-large">Community Renewable Energy Awareness and Management</p>
      </header>
      
      <main>
        <section style={{ marginBottom: '48px' }}>
          <h2 className="headline-large">Welcome to a Sustainable Future</h2>
          <p className="body-large" style={{ marginTop: '16px', maxWidth: '800px' }}>
            Empowering our community to adopt renewable energy sources, reduce carbon footprints, and save on electricity costs.
          </p>
          
          <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
            <button className="m3-button m3-button--filled">Explore Energy Calculator</button>
            <button className="m3-button m3-button--outlined">View Resources</button>
          </div>

          <EnergyCalculator />
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div className="m3-card m3-card--elevated">
            <h3 className="title-large">Solar Energy</h3>
            <p className="body-medium" style={{ marginTop: '8px' }}>Harness the power of the sun. Learn about rooftop solar installations and savings.</p>
          </div>
          <div className="m3-card">
            <h3 className="title-large">Wind Energy</h3>
            <p className="body-medium" style={{ marginTop: '8px' }}>Understand how wind turbines can contribute to our community grid.</p>
          </div>
          <div className="m3-card">
            <h3 className="title-large">Biomass</h3>
            <p className="body-medium" style={{ marginTop: '8px' }}>Explore organic energy solutions suitable for local agriculture.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
