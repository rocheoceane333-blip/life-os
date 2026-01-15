import React from 'react';

export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`
      relative overflow-hidden
      bg-white/5 backdrop-blur-xl 
      border border-white/10 
      rounded-3xl shadow-2xl
      hover:bg-white/10 transition-all duration-500
      ${className}
    `}>
      {/* Reflet lumineux interne */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}