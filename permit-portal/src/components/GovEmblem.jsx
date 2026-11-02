import React from 'react';

export default function GovEmblem({ size = 90 }) {
  // Vite automatically prepends /Regcat/ using import.meta.env.BASE_URL
  return (
    <img
      src={`${import.meta.env.BASE_URL}tn-emblem.png`}
      alt="Government of Tamil Nadu Emblem"
      style={{ width: size, height: 'auto', objectFit: 'contain' }}
    />
  );
}
