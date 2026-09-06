import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, Mail, Lock } from 'lucide-react';

export default function AuthPage() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('phone');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      alert('OTP sent to ' + mobile);
    }
  };

  const handleVerify = () => {
    // Simulate verification
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-dark p-8 rounded-2xl w-full max-w-md border border-white/10"
      >
        <div className="text-center mb-8">
          <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">DTCP Portal Login</h1>
          <p className="text-blue-200 text-sm">Secure access for Patta Owners & Professionals</p>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setLoginMethod('phone')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
              loginMethod === 'phone' 
                ? 'bg-primary text-white' 
                : 'bg-white/10 text-blue-200 hover:bg-white/20'
            }`}
          >
            <Phone className="w-5 h-5 inline mr-2" />
            Mobile OTP
          </button>
          <button
            onClick={() => setLoginMethod('email')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
              loginMethod === 'email' 
                ? 'bg-primary text-white' 
                : 'bg-white/10 text-blue-200 hover:bg-white/20'
            }`}
          >
            <Mail className="w-5 h-5 inline mr-2" />
            Email Login
          </button>
        </div>

        {loginMethod === 'phone' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-blue-200 text-sm mb-2">Mobile Number</label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="10-digit mobile number"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-accent"
                />
                <button
                  onClick={handleSendOtp}
                  disabled={mobile.length !== 10}
                  className="bg-accent hover:bg-amber-600 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {otpSent ? 'Resend' : 'Send OTP'}
                </button>
              </div>
            </div>
            
            {otpSent && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <label className="block text-blue-200 text-sm mb-2">Enter OTP</label>
                <input
                  type="text"
                  placeholder="6-digit OTP"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-accent mb-4"
                />
                <button
                  onClick={handleVerify}
                  className="w-full bg-success hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Verify & Login
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-blue-200 text-sm mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="professional@example.com"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-accent"
              />
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-success hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <Lock className="w-5 h-5 inline mr-2" />
              Sign In
            </button>
          </div>
        )}

        <p className="text-center text-blue-300 text-xs mt-6">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
}
