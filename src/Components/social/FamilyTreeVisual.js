import React from 'react';

export default function FamilyTreeVisual() {
  return (
    <div className="p-4 bg-emerald-950/10 rounded-xl border border-emerald-500/20">
      <h3 className="text-emerald-200 text-sm font-bold mb-4 italic">Arbre Généalogique Visuel</h3>
      <div className="space-y-4">
        <div className="flex justify-center"><div className="w-10 h-6 bg-emerald-500/20 border border-emerald-500/50 rounded"></div></div>
        <div className="flex justify-around">
          <div className="w-10 h-6 bg-emerald-500/20 border border-emerald-500/50 rounded"></div>
          <div className="w-10 h-6 bg-emerald-500/20 border border-emerald-500/50 rounded"></div>
        </div>
      </div>
      <p className="text-center text-gray-600 text-[10px] mt-4 uppercase">Visualisation des générations</p>
    </div>
  );
}