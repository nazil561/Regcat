import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, ShieldCheck, Activity, ArrowRight, Globe, Phone } from 'lucide-react';

const STATS = [
  { label: 'Applications Processed', value: '45,291', icon: Activity },
  { label: 'Avg. Approval Time', value: '3.2 Days', icon: ShieldCheck },
  { label: 'Districts Covered', value: '38', icon: MapPin },
  { label: 'Success Rate', value: '99.4%', icon: Globe },
];

export default function LandingPage({ onGetStarted }) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Building2 className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-white leading-none">DTCP OPTIMIZER</h1>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Govt. of Tamil Nadu</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                SYSTEM OPERATIONAL
              </span>
              <button type="button" className="text-xs font-medium text-slate-300 hover:text-white transition">Help</button>
              <button type="button" className="text-xs font-medium text-slate-300 hover:text-white transition">Contact</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50" aria-hidden="true"></div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true"></span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">AI-Powered Compliance Engine v2.0</span>
              </div>

              <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Permit Approval</span> System
              </h2>

              <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Streamlining Tamil Nadu's building permit process with real-time GIS verification,
                automated TNCDBR 2019 compliance checks, and instant geotechnical analysis.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onGetStarted}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm tracking-wide uppercase shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Start Application <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 rounded-xl font-bold text-sm tracking-wide uppercase transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  View Guidelines
                </button>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-10"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
                  <stat.icon className="w-5 h-5 text-slate-500 mb-3 mx-auto" aria-hidden="true" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-mono text-slate-500 uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-600 font-mono">
            © {year} Directorate of Town and Country Planning, Tamil Nadu.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-600 hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-600 hover:text-cyan-400 transition">Terms of Service</a>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Phone className="w-3 h-3" aria-hidden="true" />
              <span>1800-425-1100</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
