import React from 'react';

export default function GovEmblem({ size = 90, color = '#8B0000' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 160" width={size} height={size * 1.33} aria-label="State Emblem of India">
      {/* Three lion heads — stylized silhouette */}
      {/* Center lion (facing forward) */}
      <g fill={color}>
        <path d="M60 18 C52 18, 46 24, 46 32 C46 38, 50 42, 54 44 L54 52 L66 52 L66 44 C70 42, 74 38, 74 32 C74 24, 68 18, 60 18 Z" />
        <circle cx="54" cy="30" r="1.6" fill="#fff" />
        <circle cx="66" cy="30" r="1.6" fill="#fff" />
        <path d="M56 36 Q60 40, 64 36" stroke="#fff" strokeWidth="1" fill="none" />

        {/* Left lion (profile) */}
        <path d="M30 30 C24 28, 18 32, 16 40 C14 46, 18 52, 24 54 L26 60 L36 60 L36 54 C40 52, 42 46, 40 40 C38 34, 34 30, 30 30 Z" opacity="0.95" />
        <circle cx="24" cy="40" r="1.4" fill="#fff" />

        {/* Right lion (profile) */}
        <path d="M90 30 C96 28, 102 32, 104 40 C106 46, 102 52, 96 54 L94 60 L84 60 L84 54 C80 52, 78 46, 80 40 C82 34, 86 30, 90 30 Z" opacity="0.95" />
        <circle cx="96" cy="40" r="1.4" fill="#fff" />
      </g>

      {/* Abacus with wheel */}
      <rect x="28" y="62" width="64" height="8" rx="2" fill={color} />
      <circle cx="60" cy="66" r="5" fill="#fff" stroke={color} strokeWidth="1.2" />
      {[...Array(24)].map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        return <line key={i} x1={60 + Math.cos(a) * 1.2} y1={66 + Math.sin(a) * 1.2} x2={60 + Math.cos(a) * 4} y2={66 + Math.sin(a) * 4} stroke={color} strokeWidth="0.4" />;
      })}
      <circle cx="60" cy="66" r="1" fill={color} />

      {/* Lotus base */}
      <g fill={color}>
        <path d="M30 78 Q60 92, 90 78 L88 86 Q60 100, 32 86 Z" />
        <ellipse cx="60" cy="88" rx="34" ry="4" />
        <path d="M22 92 Q60 106, 98 92" stroke={color} strokeWidth="1.5" fill="none" />
      </g>

      {/* Motto: सत्यमेव जयते */}
      <text x="60" y="122" textAnchor="middle" fontSize="14" fontWeight="700" fill={color} fontFamily="'Noto Sans Devanagari', 'Mangal', serif">
        सत्यमेव जयते
      </text>

      {/* English below */}
      <text x="60" y="138" textAnchor="middle" fontSize="6.5" fontWeight="600" fill={color} letterSpacing="1.2" fontFamily="sans-serif">
        SATYAMEVA JAYATE
      </text>

      {/* Fine circular border */}
      <circle cx="60" cy="80" r="72" fill="none" stroke={color} strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}
