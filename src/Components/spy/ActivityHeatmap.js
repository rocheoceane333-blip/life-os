import React from 'react';

export default function ActivityHeatmap() {
  return (
    <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
      <h3 className="text-[10px] text-gray-500 font-bold uppercase mb-3">Intensité d'activité</h3>
      <div className="grid grid-cols-7 gap-1">
        {[...Array(28)].map((_, i) => (
          <div 
            key={i} 
            className="w-3 h-3 rounded-sm" 
            style={{ backgroundColor: i % 5 === 0 ? '#10b981' : '#1e293b' }}
          ></div>
        ))}
      </div>
      <p className="text-[9px] text-gray-600 mt-2 font-mono italic">LOG_SCAN: COMPLETED</p>
    </div>
  );
}