import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AuthPage from './components/AuthPage'
import Dashboard from './components/Dashboard'
import ComplianceForm from './components/ComplianceForm'
import ComplianceReport from './components/ComplianceReport'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/compliance-form" element={<ComplianceForm />} />
      <Route path="/report" element={<ComplianceReport />} />
    </Routes>
  )
}

export default App
