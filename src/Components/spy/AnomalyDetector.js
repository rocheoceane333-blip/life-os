import React from 'react';

export default function AnomalyDetector() {
  return (
    <div className="p-5 bg-slate-900 rounded-3xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      <h3 className="text-cyan-400 text-[10px] font-bold uppercase tracking-tighter mb-4">Détecteur d'Anomalies</h3>
      <div className="h-20 flex items-center justify-center border-y border-cyan-500/10">
        <div className="w-full bg-cyan-500/5 h-[1px] relative">
          <div className="absolute top-[-2px] left-1/2 w-1 h-5 bg-cyan-500 animate-ping"></div>
        </div>
      </div>
      <p className="text-[9px] text-center text-cyan-600 mt-2 font-mono">ANOMALY_STATUS: 0.00%</p>
    </div>
  );
}