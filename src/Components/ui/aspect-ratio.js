import React from 'react';

export default function AspectRatio({ ratio = 16 / 9, children }) {
  return (
    <div className="relative w-full" style={{ paddingTop: `${(1 / ratio) * 100}%` }}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}