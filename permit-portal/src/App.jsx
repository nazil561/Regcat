import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
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
    const params = new URLSearchParams(window.location.search);
    const hash = params.get('hash');
    if (hash) {
      setUrlHash(hash);
      setCurrentView('verify');
    }

    const timeout = setTimeout(() => {
      console.warn('[Regcat] Auth init timeout — showing login page');
      setLoading(false);
    }, 3000);

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        clearTimeout(timeout);
        setUser(currentUser);
        setLoading(false);
        if (currentUser?.uid) {
          const q = query(collection(db, 'formDrafts'), where('__name__', '==', currentUser.uid));
          getDocs(q).then(snap => {
            const reports = [];
            snap.forEach(d => { const data = d.data(); if (data.overallStatus || data.result) reports.push(data); });
            setActiveReports(reports);
          }).catch(e => console.warn('[Regcat] report load failed:', e?.message));
        }
      },
      (error) => {
        clearTimeout(timeout);
        console.error('[Regcat] onAuthStateChanged error:', error?.code, error?.message);
        setLoading(false);
      }
    );

    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
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
          onComplete={async (reportResult) => {
            const enriched = { ...reportResult, userId: user.uid, createdAt: new Date().toISOString(), hash: crypto.randomUUID().replace(/-/g,'') };
            try {
              const { setDoc, doc } = await import('firebase/firestore');
              await setDoc(doc(db, 'reports', enriched.hash), enriched, { merge: true });
              await setDoc(doc(db, 'formDrafts', user.uid), { ...enriched, lastReportHash: enriched.hash }, { merge: true });
            } catch (e) { console.warn('[Regcat] report save fail:', e?.message); }
            setSelectedReport(enriched);
            setActiveReports((prev) => [enriched, ...prev]);
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
