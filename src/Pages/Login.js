import React, { useState } from 'react';
import { authService } from '../Services/authService';
import Button from '../Components/ui/button';
import Card from '../Components/ui/card';
import Input from '../Components/ui/input';
import { Lock, Shield, Zap } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await authService.login(email, password);
      // La session se mettra à jour via le SessionProvider
    } catch (err) {
      setError("ACCÈS REFUSÉ : Identifiants invalides");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Effet de lueur violette en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-2xl bg-violet-600/10 border border-violet-500/20 mb-4">
            <Shield className="text-violet-500" size={32} />
          </div>
          <h1 className="text-4xl font-black text-white italic tracking-tighter">LIFE_OS</h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Secure Biometric Gateway</p>
        </div>

        <Card className="p-8 border-violet-500/20 bg-black/40 backdrop-blur-xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-violet-400 uppercase ml-1">System Identity</label>
              <Input 
                type="email" 
                placeholder="EMAIL_ADDRESS" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 focus:border-violet-500/50 text-sm h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-violet-400 uppercase ml-1">Access Code</label>
              <Input 
                type="password" 
                placeholder="PASSWORD" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10 focus:border-violet-500/50 text-sm h-12"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-[10px] font-bold text-center uppercase">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 text-white font-black rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
            >
              {loading ? "Decrypting..." : <><Zap size={14} /> Initialize Session</>}
            </button>
          </form>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-[9px] uppercase tracking-widest">
            Level 4 Encryption Active • Pulse v1.0.2
          </p>
        </div>
      </div>
    </div>
  );
}