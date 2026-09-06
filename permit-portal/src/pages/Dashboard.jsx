import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, FileText, MapPin, Calculator, LogOut } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  const services = [
    { 
      icon: Building2, 
      title: "New Building Permission", 
      desc: "Apply for construction permits",
      path: "/apply"
    },
    { 
      icon: FileText, 
      title: "Application Status", 
      desc: "Track your permit applications",
      path: "/dashboard"
    },
    { 
      icon: MapPin, 
      title: "Plot Approval Checker", 
      desc: "Verify land records & zoning",
      path: "/apply"
    },
    { 
      icon: Calculator, 
      title: "Fee Calculator", 
      desc: "Calculate development charges",
      path: "/dashboard"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold font-mono">DTCP Dashboard</h1>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-2">Welcome, Verified Patta Owner</h2>
          <p className="text-secondary">Select a service to continue</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(service.path)}
              className="glass p-6 rounded-xl border border-secondary/20 hover:shadow-xl hover:border-accent/50 transition-all cursor-pointer group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-secondary">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
