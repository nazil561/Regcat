import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, FileCheck, MapPin, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-10 h-10 text-accent" />
            <div>
              <h1 className="text-xl font-bold font-mono">DTCP Permit Compliance</h1>
              <p className="text-xs text-blue-200">Government of Tamil Nadu | Housing & Urban Development</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono bg-green-600 px-3 py-1 rounded-full">🟢 Systems Operational</span>
            <button 
              onClick={() => navigate('/auth')}
              className="bg-accent hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-paper">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-primary mb-6"
          >
            AI-Powered Building Permit Compliance
          </motion.h2>
          <p className="text-xl text-secondary mb-12 max-w-3xl mx-auto">
            Streamlined DTCP approval process with real-time FSI calculations, geotechnical validation, and GIS-based setback verification.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Building2, title: "Building Permission", desc: "Apply for new construction permits" },
              { icon: FileCheck, title: "Status Tracking", desc: "Real-time application status" },
              { icon: MapPin, title: "Plot Verification", desc: "GIS-based land record checks" },
              { icon: ShieldCheck, title: "Compliance Check", desc: "Automated TNCDBR 2019 validation" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-xl border border-secondary/20 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate('/auth')}
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center text-sm text-blue-200">
          <p>© 2024 Directorate of Town and Country Planning, Tamil Nadu</p>
          <p className="mt-2 font-mono text-xs">For support: dtcp-support@tn.gov.in | Helpline: 1800-425-1234</p>
        </div>
      </footer>
    </div>
  );
}
