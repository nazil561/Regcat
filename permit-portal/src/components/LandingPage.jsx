import { motion } from 'framer-motion';
import { Building2, MapPin, FileCheck, Shield, ChevronRight, Star, Globe, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building2,
      title: 'Building Permission',
      description: 'Apply for new building permits with automated compliance checking against DTCP regulations.',
      color: '#3b82f6'
    },
    {
      icon: MapPin,
      title: 'GIS Verification',
      description: 'Interactive map integration to verify plot location, zoning, and cadastral boundaries.',
      color: '#10b981'
    },
    {
      icon: FileCheck,
      title: 'Instant Compliance',
      description: 'AI-powered compliance verification with detailed reports on FSI, setbacks, and regulations.',
      color: '#f59e0b'
    },
    {
      icon: Shield,
      title: 'Secure & Verified',
      description: 'Government-grade security with OTP verification and encrypted document storage.',
      color: '#ef4444'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Applications Processed' },
    { value: '98%', label: 'Approval Rate' },
    { value: '24/7', label: 'System Availability' },
    { value: '38', label: 'Districts Covered' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 0'
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'var(--gradient-primary)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <Building2 size={28} />
            </div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                DTCP Permit Portal
              </h1>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Government of Tamil Nadu
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                padding: '8px 16px',
                background: 'transparent',
                color: 'var(--text-secondary)',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                <Globe size={18} style={{ marginRight: '6px' }} />
                English
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/auth')}
              style={{
                padding: '12px 24px',
                background: 'var(--gradient-primary)',
                color: 'white',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                boxShadow: 'var(--shadow-md)'
              }}
            >
              Login / Sign Up
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'var(--gradient-hero)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                marginBottom: '24px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Star size={16} color="#fbbf24" fill="#fbbf24" />
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>
                  Official Government of Tamil Nadu Portal
                </span>
              </div>
              
              <h1 style={{
                fontSize: '64px',
                fontWeight: 800,
                color: 'white',
                marginBottom: '24px',
                lineHeight: 1.1
              }}>
                Permit Compliance<br />
                <span style={{ color: '#60a5fa' }}>Made Simple</span>
              </h1>
              
              <p style={{
                fontSize: '20px',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                lineHeight: 1.6
              }}>
                Streamlined building permission applications with AI-powered compliance verification. 
                Get instant reports on FSI, setbacks, and regulatory requirements.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/auth')}
                  style={{
                    padding: '16px 32px',
                    background: 'white',
                    color: 'var(--primary)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                  Get Started
                  <ChevronRight size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '16px 32px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '60px 0',
        background: 'white',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '100px 0',
        background: 'var(--background)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}
          >
            <h2 style={{
              fontSize: '42px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Powerful Features for<br />
              <span className="gradient-text">Seamless Compliance</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Everything you need to verify, apply, and get approved for building permits in Tamil Nadu
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: `${feature.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <feature.icon size={32} color={feature.color} />
                </div>
                
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 0',
        background: 'var(--gradient-hero)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px'
            }}>
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join thousands of citizens who have simplified their permit application process
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/auth')}
              style={{
                padding: '18px 48px',
                background: 'white',
                color: 'var(--primary)',
                borderRadius: '14px',
                fontSize: '17px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              Create Free Account
              <ChevronRight size={22} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f172a',
        color: 'white',
        padding: '60px 0 30px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600 }}>DTCP Permit Portal</h3>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Government of Tamil Nadu</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Official portal for building permit applications and compliance verification under the Directorate of Town and Country Planning.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['About Us', 'Citizen Services', 'Approved Layouts', 'Circulars', 'Contact'].map(link => (
                  <a key={link} href="#" style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  <Phone size={16} />
                  <span>1800-425-3999</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  <Mail size={16} />
                  <span>support@dtcp.tn.gov.in</span>
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  Mon - Fri, 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            textAlign: 'center',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.5)'
          }}>
            <p>© 2024 Directorate of Town and Country Planning, Government of Tamil Nadu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
