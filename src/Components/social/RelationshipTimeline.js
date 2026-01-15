import React from 'react';

export default function RelationshipTimeline() {
  return (
    <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5">
      <h3 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4">Historique de Relation</h3>
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="text-[10px] text-gray-500 font-mono w-12 text-right">MAR 24</div>
          <div className="relative border-l border-violet-500/50 pl-4 pb-2">
            <div className="absolute left-[-4.5px] top-1 w-2 h-2 rounded-full bg-violet-500"></div>
            <p className="text-xs text-white">Premier contact établi</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="text-[10px] text-gray-500 font-mono w-12 text-right">AVR 24</div>
          <div className="relative border-l border-violet-500/50 pl-4">
            <div className="absolute left-[-4.5px] top-1 w-2 h-2 rounded-full bg-violet-500/50"></div>
            <p className="text-xs text-gray-400">Dîner en groupe</p>
          </div>
        </div>
      </div>
    </div>
  );
}