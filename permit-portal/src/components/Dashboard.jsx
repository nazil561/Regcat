import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, FileSearch, MapPin, Calculator, LogOut, User } from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user') || '{}')

  const services = [
    { icon: <Building2 size={32} />, title: 'New Building Permission', description: 'Apply for new building construction permits', color: '#0F2A43', path: '/compliance-form' },
    { icon: <FileSearch size={32} />, title: 'Application Status', description: 'Track your application using reference number', color: '#1E4D7B', path: '#' },
    { icon: <MapPin size={32} />, title: 'Plot Approval Checker', description: 'Verify plot approvals with GIS integration', color: '#0E7C7B', path: '/compliance-form' },
    { icon: <Calculator size={32} />, title: 'Fee Calculator', description: 'Calculate development charges and fees', color: '#C98A2C', path: '#' }
  ]

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)' }}>
      <header style={{ background: 'var(--gradient-primary)', padding: '16px 0', boxShadow: 'var(--shadow-lg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--white)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '28px' }}>🏛️</span>
              </div>
              <div>
                <h1 style={{ color: 'var(--white)', fontSize: '20px', fontWeight: '700' }}>DTCP Permit Portal</h1>
                <p style={{ color: 'var(--border-color)', fontSize: '12px' }}>Dashboard</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <User size={18} color="var(--white)" />
                <span style={{ color: 'var(--white)', fontSize: '14px' }}>{user.phoneNumber || '+91 XXXXXXXXXX'}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="card" style={{ background: 'var(--gradient-primary)', color: 'var(--white)', marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px', fontFamily: 'Playfair Display, serif' }}>Welcome to DTCP Portal</h2>
                <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '600px' }}>Access all urban planning services from a single dashboard.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ textAlign: 'center', padding: '16px 24px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '28px', fontWeight: '800' }}>0</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Active Applications</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px 24px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '28px', fontWeight: '800' }}>0</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Approved</div>
                </div>
              </div>
            </div>
          </motion.div>

          <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '32px' }}>Our Services</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} className="card" onClick={() => service.path !== '#' && navigate(service.path)} style={{ cursor: service.path !== '#' ? 'pointer' : 'default', border: '1px solid var(--border-color)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = 'var(--shadow-xl)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}>
                <div style={{ width: '64px', height: '64px', background: service.color, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', marginBottom: '20px' }}>{service.icon}</div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '8px' }}>{service.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: 'var(--primary-dark)', padding: '30px 0', marginTop: '60px', color: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '13px', opacity: 0.8 }}>© 2024 Directorate of Town and Country Planning, Tamil Nadu | Helpline: 1800-425-3999</p>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard
