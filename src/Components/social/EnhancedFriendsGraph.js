import React from 'react';

export default function EnhancedFriendsGraph() {
  return (
    <div className="p-5 bg-orange-950/10 rounded-2xl border border-orange-500/20">
      <h3 className="text-orange-200 text-sm font-bold mb-4 uppercase tracking-widest">Social Friends Matrix</h3>
      <div className="space-y-3">
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 w-[75%] shadow-[0_0_10px_#f97316]"></div>
        </div>
        <div className="flex justify-between text-[10px] text-orange-500/70 font-mono">
          <span>LOYAUTÉ</span>
          <span>75%</span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 w-[40%] shadow-[0_0_10px_#f97316]"></div>
        </div>
        <div className="flex justify-between text-[10px] text-orange-500/70 font-mono">
          <span>FRÉQUENCE</span>
          <span>40%</span>
        </div>
      </div>
    </div>
  );
}