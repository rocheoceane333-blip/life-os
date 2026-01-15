import React from 'react';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="flex h-screen w-full bg-[#030303] text-white overflow-hidden">
      {/* Barre latérale à gauche */}
      <Sidebar />

      {/* Zone de contenu principale à droite */}
      <main className="flex-1 flex flex-col items-center justify-center relative">
        {/* Effet de lumière violette en fond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-black tracking-tighter italic mb-2">
            LIFE <span className="text-violet-500">OS</span>
          </h1>
          <p className="text-violet-400/50 font-mono text-xs tracking-[0.5em] uppercase">
            Interface Système Active
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;