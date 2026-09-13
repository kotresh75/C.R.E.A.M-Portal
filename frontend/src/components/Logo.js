import React from 'react';

const Logo = ({ width = 48, height = 48, className = "" }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ flexShrink: 0 }}
  >
    {/* Warm Sun/Energy Background */}
    <circle cx="50" cy="50" r="40" fill="#FFE0B2" />
    <circle cx="50" cy="50" r="30" fill="#FFB74D" />
    
    {/* Renewable Green Leaf */}
    <path 
      d="M30 75 C30 35, 70 25, 70 25 C70 25, 65 75, 30 75 Z" 
      fill="#10B981" 
    />
    
    {/* Leaf Stem / Shine */}
    <path 
      d="M35 70 L65 35" 
      stroke="#FFFFFF" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
