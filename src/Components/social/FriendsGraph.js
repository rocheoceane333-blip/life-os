import React from 'react';

export default function FriendsGraph() {
  return (
    <div className="p-4 bg-yellow-900/10 rounded-xl border border-yellow-500/20">
      <h3 className="text-yellow-200 text-xs font-bold mb-2">Cercle Amical</h3>
      <div className="flex -space-x-2 overflow-hidden py-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-gray-800 border border-yellow-500/50"></div>
        ))}
      </div>
      <p className="text-[10px] text-yellow-500/50">Flux d'interactions sociales actif</p>
    </div>
  );
}