import React from 'react';

export default function EntityHistory() {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl border border-white/10">
      <div className="flex justify-between mb-4">
        <h3 className="text-white text-xs font-bold uppercase">Logs des Entités</h3>
        <span className="text-[9px] text-gray-500">AUTO_CLEAN: OFF</span>
      </div>
      <div className="text-[10px] font-mono text-blue-400 space-y-1">
        <p>{">"} MEAL_ADDED: "Salade César" (450kcal)</p>
        <p>{">"} MOOD_UPDATED: Level 8/10</p>
        <p className="animate-pulse">{">"} WAITING_FOR_SYNC...</p>
      </div>
    </div>
  );
}