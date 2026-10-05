import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Education from './pages/Education';
import ArticleDetail from './pages/ArticleDetail';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import LiveBackground from './components/LiveBackground';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="lenis-container">
      <LiveBackground />
      <Router>
        <AuthProvider>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<div className="container" style={{paddingTop: '100px'}}><Login /></div>} />
              <Route path="/register" element={<div className="container" style={{paddingTop: '100px'}}><Register /></div>} />
              <Route path="/dashboard" element={<div className="container" style={{paddingTop: '100px'}}><Dashboard /></div>} />
              <Route path="/education" element={<div className="container" style={{paddingTop: '100px'}}><Education /></div>} />
              <Route path="/education/:id" element={<div className="container" style={{paddingTop: '100px'}}><ArticleDetail /></div>} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
