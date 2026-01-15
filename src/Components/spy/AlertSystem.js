import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function AlertSystem() {
  return (
    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl animate-pulse">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-red-500 rounded-full">
          <AlertTriangle size={16} className="text-white" />
        </div>
        <div>
          <h4 className="text-red-500 text-xs font-bold uppercase">Système d'Alerte</h4>
          <p className="text-[10px] text-red-200/70">Aucune menace détectée</p>
        </div>
      </div>
    </div>
  );
}