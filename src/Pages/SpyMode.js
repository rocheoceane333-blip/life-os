import React from 'react';
import Card from '../Components/ui/card';
import Badge from '../Components/ui/badge';
import { Eye, ShieldAlert, Terminal } from 'lucide-react';

export default function SpyMode() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
        <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter">Spy Mode</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Traffic Monitor" subtitle="Real-time Access">
          <div className="font-mono text-[10px] space-y-2 text-gray-400">
            <p className="text-emerald-500">[OK] Auth check: User 0x1... Success</p>
            <p className="text-gray-600">[INFO] Data sync: Meals table updated</p>
            <p className="text-amber-500">[WARN] Unknown device attempted handshake</p>
          </div>
        </Card>

        <Card title="Threat Assessment" subtitle="System Integrity">
          <div className="flex items-center justify-between p-4 bg-red-500/5 border border-red-500/20 rounded-2xl">
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-red-500" size={20} />
              <span className="text-xs font-bold text-white">CONFLIT DE DONNÉES</span>
            </div>
            <Badge variant="destructive">ACTION REQUIS</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}