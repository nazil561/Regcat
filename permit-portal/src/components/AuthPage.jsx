import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function AuthPage({ onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      let userCredential;
      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      onAuthSuccess(userCredential.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-8 text-white font-sans">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">Regcat / TNCDBR 2019 Core</span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white">
          {isSignUp ? 'Create Enterprise Account' : 'Portal Access Authentication'}
        </h1>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400 font-mono">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition font-mono"
            placeholder="architect@tn.gov.in"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition font-mono"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-3 rounded-xl transition text-xs tracking-wider uppercase shadow-lg shadow-blue-600/20 mt-2 text-white"
        >
          {loading ? 'Authenticating...' : isSignUp ? 'Register Account' : 'Sign In to Portal'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-xs text-slate-400 hover:text-white transition font-mono"
        >
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
}
