import React from 'react';

export default function SocialStatsCharts() {
  return (
    <div className="p-5 bg-slate-900 rounded-3xl border border-white/5">
      <h3 className="text-white text-xs font-bold mb-6 uppercase opacity-60 text-center">Volume d'interactions par mois</h3>
      <div className="flex items-end justify-center gap-3 h-24">
        {[30, 60, 45, 90, 75, 95].map((h, i) => (
          <div key={i} className="w-4 bg-violet-500/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
        ))}
      </div>
      <div className="mt-4 flex justify-around text-[9px] text-gray-600 font-mono">
        <span>AOÛT</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DÉC</span><span>JAN</span>
      </div>
    </div>
  );
}