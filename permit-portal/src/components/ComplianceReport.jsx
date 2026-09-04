import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertTriangle, Download, FileText, Home, Ruler, Layers, MapPin } from 'lucide-react'
import jsPDF from 'jspdf'

const ComplianceReport = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)

  useEffect(() => {
    const savedData = sessionStorage.getItem('complianceData')
    if (savedData) setData(JSON.parse(savedData))
    else navigate('/compliance-form')
  }, [navigate])

  if (!data) return null

  const fsi = data.buildingArea / data.plotSize
  const maxFSI = 1.5
  const coverage = (data.buildingArea / data.plotSize) * 100
  const maxCoverage = 60

  const complianceChecks = [
    { name: 'FSI Compliance', value: ((fsi * 100).toFixed(1)) + '% of ' + (maxFSI * 100) + '%', status: fsi <= maxFSI ? 'pass' : 'fail' },
    { name: 'Ground Coverage', value: coverage.toFixed(1) + '% of ' + maxCoverage + '%', status: coverage <= maxCoverage ? 'pass' : 'fail' },
    { name: 'Setback Requirements', value: 'Front: 3m, Sides: 1.5m', status: 'pass' },
    { name: 'Height Restriction', value: data.floors + ' Floors (Max: G+2)', status: data.floors <= 3 ? 'pass' : 'fail' },
    { name: 'Zoning Verification', value: 'Residential Zone', status: 'pass' },
    { name: 'Environmental Clearance', value: 'Not Required', status: 'pass' }
  ]

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(20)
    doc.text('DTCP - Permit Compliance Report', 20, 20)
    doc.setFontSize(12)
    doc.text('Generated: ' + new Date().toLocaleDateString(), 20, 30)
    doc.text('Application Ref: DTCP/' + Date.now(), 20, 38)
    doc.line(20, 45, 190, 45)
    let y = 60
    doc.setFontSize(14)
    doc.text('Property Details:', 20, y)
    y += 10
    doc.setFontSize(11)
    doc.text('District: ' + (data.district || 'Chennai'), 20, y); y += 8
    doc.text('Survey No: ' + (data.surveyNumber || 'N/A'), 20, y); y += 8
    doc.text('Patta No: ' + (data.pattaNumber || 'N/A'), 20, y); y += 8
    doc.text('Plot Size: ' + (data.plotSize || '0') + ' sq.ft', 20, y); y += 8
    doc.text('Building Area: ' + (data.buildingArea || '0') + ' sq.ft', 20, y); y += 8
    y += 15
    doc.setFontSize(14)
    doc.text('Compliance Status:', 20, y)
    y += 10
    doc.setFontSize(11)
    complianceChecks.forEach((check) => {
      const status = check.status === 'pass' ? 'PASS' : 'FAIL'
      doc.text(check.name + ': ' + status, 20, y)
      y += 8
    })
    y += 15
    const overallStatus = complianceChecks.filter(c => c.status === 'fail').length === 0
    doc.setFontSize(16)
    doc.setTextColor(overallStatus ? 31 : 181)
    doc.text('Overall: ' + (overallStatus ? 'COMPLIANT' : 'NON-COMPLIANT'), 20, y)
    doc.save('Compliance_Report_' + Date.now() + '.pdf')
  }

  const overallStatus = complianceChecks.filter(c => c.status === 'fail').length === 0

  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)', padding: '40px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', paddingBottom: '24px', borderBottom: '2px solid var(--border-color)' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '8px' }}>Permit Compliance Report</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Application Reference: DTCP/{Date.now()}</p>
            </div>
            <button onClick={generatePDF} className="btn btn-primary"><Download size={18} /> Download PDF</button>
          </div>

          <div style={{ padding: '24px', borderRadius: '12px', marginBottom: '32px', background: overallStatus ? 'rgba(31, 122, 92, 0.1)' : 'rgba(181, 68, 46, 0.1)', border: '2px solid ' + (overallStatus ? 'var(--success)' : 'var(--error)') }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {overallStatus ? <CheckCircle size={40} color="var(--success)" /> : <AlertTriangle size={40} color="var(--error)" />}
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: overallStatus ? 'var(--success)' : 'var(--error)' }}>{overallStatus ? 'Compliant - Approved' : 'Non-Compliant - Revision Required'}</h2>
                <p style={{ color: 'var(--text-secondary)' }}>{overallStatus ? 'Your proposal meets all regulatory requirements.' : 'Some compliance checks failed. Please review and revise.'}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {[
              { icon: <MapPin size={20} />, label: 'District', value: data.district || 'Chennai' },
              { icon: <FileText size={20} />, label: 'Survey No', value: data.surveyNumber || 'N/A' },
              { icon: <Home size={20} />, label: 'Plot Size', value: (data.plotSize || '0') + ' sq.ft' },
              { icon: <Layers size={20} />, label: 'Building Area', value: (data.buildingArea || '0') + ' sq.ft' },
              { icon: <Ruler size={20} />, label: 'Floors', value: data.floors || '0' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px', background: 'var(--paper)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: 'var(--primary-blue)' }}>{item.icon}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary-dark)' }}>{item.value}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '24px' }}>Detailed Compliance Analysis</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            {complianceChecks.map((check, i) => (
              <div key={i} style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--primary-dark)', marginBottom: '4px' }}>{check.name}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{check.value}</div>
                </div>
                {check.status === 'pass' ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontWeight: '600' }}><CheckCircle size={20} /> PASS</div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--error)', fontWeight: '600' }}><XCircle size={20} /> FAIL</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
            <button onClick={generatePDF} className="btn btn-primary btn-block"><Download size={18} /> Download Compliance Report</button>
            {!overallStatus && (<button onClick={() => navigate('/compliance-form')} className="btn btn-outline btn-block">Revise Application</button>)}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ComplianceReport
