import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import ComplianceWizard from './components/ComplianceWizard';
import ComplianceReport from './components/ComplianceReport';
import VerificationPage from './components/VerificationPage';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeReports, setActiveReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [urlHash, setUrlHash] = useState(null);

  useEffect(() => {
    // Check if user is accessing QR verification URL (?hash=...)
    const params = new URLSearchParams(window.location.search);
    const hash = params.get('hash');
    if (hash) {
      setUrlHash(hash);
      setCurrentView('verify');
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (currentView === 'verify') {
    return (
      <VerificationPage
        hashFromUrl={urlHash}
        onReturn={() => {
          window.history.pushState({}, document.title, window.location.pathname);
          setCurrentView('dashboard');
        }}
      />
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-mono text-xs">
        Initializing Regcat Permit Portal...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <AuthPage onAuthSuccess={(authenticatedUser) => setUser(authenticatedUser)} />
      </div>
    );
  }

  return (
    <div>
      {currentView === 'dashboard' && (
        <Dashboard
          user={user}
          activeReports={activeReports}
          onStartNewForm={() => setCurrentView('wizard')}
        />
      )}

      {currentView === 'wizard' && (
        <ComplianceWizard
          user={user}
          onComplete={(reportResult) => {
            setSelectedReport(reportResult);
            setActiveReports((prev) => [reportResult, ...prev]);
            setCurrentView('report');
          }}
          onCancel={() => setCurrentView('dashboard')}
        />
      )}

      {currentView === 'report' && (
        <ComplianceReport
          reportData={selectedReport}
          onBack={() => setCurrentView('dashboard')}
        />
      )}
    </div>
  );
}
