import React from 'react';

const CreamLogo = ({ className, style }) => (
  <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" fill="none" className={className} style={style}>
    <defs>
      {/* Main green */}
      <linearGradient id="greenGradient" x1="45" y1="55" x2="190" y2="190">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="50%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>

      {/* Lightning */}
      <linearGradient id="boltGradient" x1="142" y1="62" x2="108" y2="186">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#ECFDF5" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>

      {/* Soft glow */}
      <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="4" />
      </filter>

      <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="7" />
      </filter>

      {/* C shape */}
      <path id="cPath" d="
          M188.4 75.6
          C172.8 52.8 147.6 38 120 38
          C74.7 38 38 74.7 38 120
          C38 165.3 74.7 202 120 202
          C147.6 202 172.8 187.2 188.4 164.4
        " />

      <style>{`
        .logo { transform-origin: 120px 120px; }
        .ring {
          opacity: 0;
          transform-origin: 120px 120px;
          animation: ringIntro 1.5s cubic-bezier(.16, 1, .3, 1) forwards;
        }
        .bolt {
          opacity: 0;
          transform-origin: 127px 124px;
          animation: boltIntro 1.1s cubic-bezier(.16, 1, .3, 1) .55s forwards;
        }
        .energy {
          fill: none;
          stroke: #6EE7B7;
          stroke-linecap: round;
          stroke-dasharray: 14 280;
          animation: energyFlow 2.8s linear 1.8s infinite;
        }
        .energyGlow {
          fill: none;
          stroke: #10B981;
          stroke-linecap: round;
          stroke-width: 8;
          stroke-dasharray: 18 276;
          opacity: .28;
          filter: url(#strongGlow);
          animation: energyFlow 2.8s linear 1.8s infinite;
        }
        .boltEnergy {
          fill: none;
          stroke: white;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 10 170;
          opacity: 0;
          animation: boltEnergyIntro .8s ease 1.45s forwards, boltEnergyFlow 2.4s linear 2.25s infinite;
        }
        .ambient {
          transform-origin: 120px 120px;
          animation: ambientPulse 4s ease-in-out 2s infinite;
        }
        @keyframes ringIntro {
          0% { opacity: 0; transform: scale(.72) rotate(-18deg); }
          55% { opacity: 1; transform: scale(1.025) rotate(2deg); }
          78% { transform: scale(.995) rotate(-.5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes boltIntro {
          0% { opacity: 0; transform: scale(.65) rotate(-8deg); }
          60% { opacity: 1; transform: scale(1.04) rotate(1deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes energyFlow {
          0% { stroke-dashoffset: 0; opacity: .15; }
          10% { opacity: .9; }
          50% { opacity: .65; }
          90% { opacity: .9; }
          100% { stroke-dashoffset: -294; opacity: .15; }
        }
        @keyframes boltEnergyIntro {
          0% { opacity: 0; }
          40% { opacity: 1; }
          100% { opacity: .75; }
        }
        @keyframes boltEnergyFlow {
          0% { stroke-dashoffset: 0; opacity: .15; }
          15% { opacity: .9; }
          50% { opacity: .45; }
          85% { opacity: .9; }
          100% { stroke-dashoffset: -180; opacity: .15; }
        }
        @keyframes ambientPulse {
          0%, 100% { transform: scale(1); opacity: .7; }
          50% { transform: scale(1.035); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ring, .bolt, .energy, .energyGlow, .boltEnergy, .ambient { animation: none; }
          .ring, .bolt, .boltEnergy { opacity: 1; }
          .energy, .energyGlow { opacity: .3; }
        }
      `}</style>
    </defs>

    {/* AMBIENT BACKGROUND */}
    <g className="ambient">
      <circle cx="120" cy="120" r="102" fill="#10B981" opacity=".025" />
      <circle cx="120" cy="120" r="82" fill="#10B981" opacity=".055" />
    </g>

    {/* MAIN C */}
    <g className="ring">
      <path d="
          M188.4 75.6
          C172.8 52.8 147.6 38 120 38
          C74.7 38 38 74.7 38 120
          C38 165.3 74.7 202 120 202
          C147.6 202 172.8 187.2 188.4 164.4
          L157.2 144.6
          C148.6 157.8 135 166 120 166
          C94.6 166 74 145.4 74 120
          C74 94.6 94.6 74 120 74
          C135 74 148.6 82.2 157.2 95.4
          L188.4 75.6Z
        " fill="url(#greenGradient)" />
      <use href="#cPath" className="energyGlow" />
      <use href="#cPath" className="energy" strokeWidth="3" />
    </g>

    {/* LIGHTNING */}
    <g className="bolt">
      <path d="
          M142 62
          L88 136
          H126
          L108 186
          L166 102
          H126
          L142 62Z
        " fill="url(#boltGradient)" />
      <path d="
          M142 62
          L88 136
          H126
          L108 186
          L166 102
          H126
          L142 62Z
        " className="boltEnergy" />
    </g>
  </svg>
);

export default CreamLogo;
