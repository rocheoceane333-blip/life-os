import React from 'react';
import { Users } from 'lucide-react';

export default function EnhancedFamilyGraph() {
  return (
    <div className="p-5 bg-blue-950/20 rounded-2xl border border-blue-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Users className="text-blue-400" size={20} />
        </div>
        <h3 className="text-white font-semibold">Cercle Familial Étendu</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-center">
          <p className="text-blue-300 text-sm font-bold">1er Cercle</p>
          <p className="text-gray-500 text-[10px]">Parents / Fratrie</p>
        </div>
        <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-center">
          <p className="text-blue-300 text-sm font-bold">2ème Cercle</p>
          <p className="text-gray-500 text-[10px]">Cousins / Oncles</p>
        </div>
      </div>
    </div>
  );
}