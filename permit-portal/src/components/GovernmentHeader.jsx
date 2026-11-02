import React from 'react';
import GovEmblem from './GovEmblem';

export default function GovernmentHeader({ reportData, formData }) {
  const m = { ...(formData || {}), ...(reportData || {}) };
  const reportDate = m.generatedAt ? new Date(m.generatedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : new Date().toLocaleDateString('en-IN');
  const refNo = m.hash ? `TN/DTCP/${String(m.hash).slice(0, 8).toUpperCase()}` : `TN/DTCP/${new Date().getFullYear()}/DRAFT`;

  return (
    <div style={{ background: '#ffffff', borderBottom: '3px double #8B0000', fontFamily: "'Noto Sans', system-ui, sans-serif" }}>
      {/* Tricolor strip */}
      <div style={{ display: 'flex', height: '5px' }}>
        <div style={{ flex: 1, background: '#FF9933' }} />
        <div style={{ flex: 1, background: '#FFFFFF' }} />
        <div style={{ flex: 1, background: '#138808' }} />
      </div>

      {/* Main header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 28px', gap: '24px' }}>
        <GovEmblem size={100} color="#8B0000" />

        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#8B0000', letterSpacing: '0.15em', marginBottom: '2px' }}>
            GOVERNMENT OF INDIA · भारत सरकार
          </div>
          <div style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.02em', lineHeight: 1.15, marginTop: '4px' }}>
            GOVERNMENT OF TAMIL NADU
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155', marginTop: '2px' }}>
            தமிழ்நாடு அரசு · Directorate of Town and Country Planning
          </div>
          <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748b', marginTop: '4px', letterSpacing: '0.05em' }}>
            TNCDBR 2019 · Building Permit Compliance Certificate
          </div>
        </div>

        <div style={{ minWidth: '160px', textAlign: 'right', fontSize: '10px', lineHeight: 1.5, color: '#475569' }}>
          <div style={{ fontWeight: 700, color: '#8B0000', letterSpacing: '0.1em', fontSize: '9px' }}>OFFICIAL DOCUMENT</div>
          <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '11px', marginTop: '4px' }}>Ref: {refNo}</div>
          <div>Date: {reportDate}</div>
          <div>Survey No.: <b>{m.surveyNo || '—'}</b></div>
          <div>District: <b>{m.district || '—'}</b></div>
        </div>
      </div>

      {/* Footer strip of header */}
      <div style={{ borderTop: '1px solid #e2e8f0', background: '#f8fafc', padding: '6px 28px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b' }}>
        <span>Form Regcat / DTCP-TN / 2019</span>
        <span>Ref: {refNo}</span>
        <span>Compliant with Tamil Nadu Combined Development and Building Rules, 2019</span>
      </div>
    </div>
  );
}
