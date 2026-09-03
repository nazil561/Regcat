import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Lock, Smartphone, CheckCircle, AlertCircle } from 'lucide-react'
import { sendOTP, verifyOTP, saveFormDraft } from '../firebase'

const AuthPage = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [confirmationResult, setConfirmationResult] = useState(null)
  const [verified, setVerified] = useState(false)

  const handleSendOTP = async () => {
    if (mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }
    setLoading(true)
    setError('')
    try {
      // For demo purposes, we'll simulate OTP
      // In production, use: const result = await sendOTP('+91' + mobileNumber, 'recaptcha-container')
      setTimeout(() => {
        setConfirmationResult({ confirm: async (code) => ({ user: { uid: 'demo-user-id', phoneNumber: '+91' + mobileNumber } }) })
        setStep(2)
        setLoading(false)
      }, 1500)
    } catch (err) {
      setError('Failed to send OTP. Please try again.')
      setLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP')
      return
    }
    setLoading(true)
    setError('')
    try {
      // Simulate OTP verification
      setTimeout(async () => {
        const user = await confirmationResult.confirm(otp)
        setVerified(true)
        setLoading(false)
        // Save to session storage
        sessionStorage.setItem('user', JSON.stringify({ uid: user.user.uid, phoneNumber: user.user.phoneNumber }))
        // Navigate to dashboard after short delay
        setTimeout(() => navigate('/dashboard'), 1000)
      }, 1500)
    } catch (err) {
      setError('Invalid OTP. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--gradient-hero)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '500px', margin: '0 auto' }}
        >
          <div className="card" style={{ padding: '48px' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--gradient-primary)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <Shield size={40} color="var(--white)" />
              </div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: 'var(--primary-dark)',
                marginBottom: '8px',
                fontFamily: 'Playfair Display, serif'
              }}>
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                {isLogin ? 'Sign in to access your dashboard' : 'Register for permit services'}
              </p>
            </div>

            {/* Progress Steps */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
              {[1, 2].map((s) => (
                <div key={s} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: step >= s ? 'var(--gradient-primary)' : 'var(--paper)',
                  color: step >= s ? 'var(--white)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}>
                  {step > s ? <CheckCircle size={20} /> : s}
                </div>
              ))}
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                padding: '12px 16px',
                background: 'rgba(181, 68, 46, 0.1)',
                border: '1px solid var(--error)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                color: 'var(--error)',
                fontSize: '14px'
              }}>
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            {/* Step 1: Mobile Number */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '8px'
                  }}>
                    Mobile Number
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Smartphone size={20} style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-secondary)'
                    }} />
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="input-field"
                      style={{ paddingLeft: '50px' }}
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-block"
                  onClick={handleSendOTP}
                  disabled={loading || mobileNumber.length !== 10}
                  style={{ marginBottom: '16px' }}
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>

                <div id="recaptcha-container" style={{ marginTop: '16px' }}></div>

                <p style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  marginTop: '24px'
                }}>
                  By continuing, you agree to our{' '}
                  <a href="#" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>Privacy Policy</a>
                </p>
              </motion.div>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Enter the 6-digit OTP sent to
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: 'var(--primary-dark)' }}>
                    +91 {mobileNumber}
                  </p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '8px'
                  }}>
                    Enter OTP
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={20} style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-secondary)'
                    }} />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                      className="input-field"
                      style={{ paddingLeft: '50px', textAlign: 'center', letterSpacing: '4px', fontSize: '18px' }}
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-block"
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.length !== 6}
                  style={{ marginBottom: '16px' }}
                >
                  {loading ? 'Verifying...' : 'Verify & Continue'}
                </button>

                <button
                  className="btn btn-outline btn-block"
                  onClick={() => { setStep(1); setOtp(''); setError(''); }}
                  disabled={loading}
                >
                  Change Mobile Number
                </button>

                <p style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  marginTop: '24px'
                }}>
                  Didn't receive OTP?{' '}
                  <button
                    onClick={handleSendOTP}
                    disabled={loading}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary-blue)',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      textDecoration: 'underline'
                    }}
                  >
                    Resend
                  </button>
                </p>
              </motion.div>
            )}

            {/* Success State */}
            {verified && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--success)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <CheckCircle size={40} color="var(--white)" />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'var(--primary-dark)',
                  marginBottom: '8px'
                }}>
                  Verified Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Redirecting to dashboard...
                </p>
              </motion.div>
            )}
          </div>

          {/* Back to Home */}
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              margin: '24px auto 0',
              opacity: 0.8,
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = 1}
            onMouseLeave={(e) => e.target.style.opacity = 0.8}
          >
            ← Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
