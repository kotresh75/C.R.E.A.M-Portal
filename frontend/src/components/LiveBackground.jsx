import React, { useEffect, useState } from 'react';

const LiveBackground = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    let requestRef;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setPosition({ x: currentX, y: currentY });
      requestRef = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', // Slightly deeper off-white/gray base
      overflow: 'hidden'
    }}>
      
      {/* Abstract Animated Mesh Gradients */}
      <div style={{
        position: 'absolute',
        top: '-10%', left: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.35) 0%, transparent 60%)',
        borderRadius: '50%',
        animation: 'float 22s infinite alternate ease-in-out',
        filter: 'blur(90px)',
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-15%', right: '-5%', width: '65vw', height: '65vw',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, transparent 60%)',
        borderRadius: '50%',
        animation: 'float2 28s infinite alternate-reverse ease-in-out',
        filter: 'blur(100px)',
      }}></div>

      <div style={{
        position: 'absolute',
        top: '20%', right: '15%', width: '45vw', height: '45vw',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 65%)',
        borderRadius: '50%',
        animation: 'float 18s infinite alternate ease-in-out',
        filter: 'blur(80px)',
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '10%', left: '15%', width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 60%)',
        borderRadius: '50%',
        animation: 'float2 24s infinite alternate-reverse ease-in-out',
        filter: 'blur(90px)',
      }}></div>

      {/* Mouse tracker ambient flashlight */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: `radial-gradient(900px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.7), transparent 45%)`,
        mixBlendMode: 'overlay'
      }}></div>

      {/* Subtle Noise Texture for premium glass feel */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E")',
        opacity: 0.8
      }}></div>

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(8%, 12%) scale(1.15) rotate(10deg); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(-12%, -8%) scale(1.2) rotate(-15deg); }
        }
      `}</style>
    </div>
  );
};

export default LiveBackground;
