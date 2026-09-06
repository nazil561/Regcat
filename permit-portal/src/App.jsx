import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import ComplianceForm from './components/ComplianceForm';
import ComplianceReport from './components/ComplianceReport';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/apply" element={<ComplianceForm />} />
      <Route path="/report/:id" element={<ComplianceReport />} />
    </Routes>
  );
}

export default App;
