import React from 'react';

export default function ContactHistoryTimeline() {
  return (
    <div className="p-4 bg-black/40 rounded-xl border border-white/5 relative h-48 overflow-y-auto">
      <h3 className="text-white text-[10px] font-bold uppercase mb-3 sticky top-0 bg-black/40 py-1">Historique des Contacts</h3>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-[11px] border-l-2 border-emerald-500/30 pl-3">
            <span className="text-gray-500 block font-mono">2026-01-14 10:07</span>
            <span className="text-emerald-400">Modification du profil : Contact #{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}