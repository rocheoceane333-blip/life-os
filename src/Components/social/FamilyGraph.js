import React from 'react';

export default function FamilyGraph() {
  return (
    <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 relative h-64 overflow-hidden">
      <h3 className="text-white text-xs font-bold uppercase mb-4">Graphe Familial Standard</h3>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 border-2 border-blue-500/30 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="absolute bottom-4 left-4 text-[10px] text-blue-400 font-mono">MAP_ID: ROOT_FAMILY_01</p>
    </div>
  );
}