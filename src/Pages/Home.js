import React from 'react';
import Card from '../Components/ui/card';
import WellbeingDashboard from '../Components/wellbeing/WellbeingDashboard';
import MoodSelector from '../Components/mood/MoodSelector';

export default function Home() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-5xl font-black tracking-tighter text-white">SYSTEM OVERVIEW</h1>
        <p className="text-violet-500 font-bold text-xs tracking-widest uppercase">Status: Connected</p>
      </header>
      
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-6">
          <WellbeingDashboard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Derniers Repas" subtitle="Nutrition Data">
              {/* On appellera les Meals ici plus tard */}
            </Card>
            <Card title="Social Circle" subtitle="Active Interactions">
              {/* On appellera les Interactions ici plus tard */}
            </Card>
          </div>
        </div>
        <div className="space-y-6">
          <MoodSelector />
          <Card title="Système" subtitle="Vitals">
            <div className="space-y-2 text-[10px] font-mono text-gray-500">
              <p>CPU: STABLE</p>
              <p>SYNC: CLOUD_READY</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}