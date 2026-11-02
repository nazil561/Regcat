import React from 'react';
import { generateTamperProofPdf, evaluateDataTrust } from '../services/securityEngine';
import GovernmentHeader from './GovernmentHeader';

export default function ComplianceReport({ reportData, formData = {}, onBack }) {
  if (!reportData) {
    return (
      <div className="max-w-4xl mx-auto my-8 p-8 bg-red-50 border border-red-200 rounded-xl">
        <h2 className="text-red-800 font-bold">No report data received</h2>
        <p className="text-sm text-red-700 mt-1">Submit the compliance wizard to generate a report.</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Back to Dashboard</button>
      </div>
    );
  }

  const merged = { ...formData, ...(reportData.formData || {}), ...reportData };
  const isApproved = merged.overallStatus === 'APPROVED';
  const findings = Array.isArray(merged.findings) ? merged.findings : [];

  let trustData;
  try {
    trustData = evaluateDataTrust(merged);
  } catch (e) {
    console.warn('[Regcat] trust eval failed:', e);
    trustData = { sbc: { status: 'UNVERIFIED', warning: null } };
  }

  const handleDownloadCryptoPdf = async () => {
    try {
      await generateTamperProofPdf(merged.surveyNo || '245/3B', merged, merged);
    } catch (e) {
      alert('PDF export failed: ' + (e?.message || e));
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden font-sans">
      <GovernmentHeader reportData={merged} formData={merged} />
      <div className="bg-slate-900 text-white p-6 border-b border-slate-800 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono text-slate-400">TNCDBR 2019 / COMPLIANCE AUDIT</div>
          <h1 className="text-xl font-bold tracking-tight mt-1">Regulatory Compliance Certificate</h1>
        </div>
        <div className="flex gap-3">
          <button onClick={handleDownloadCryptoPdf} className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-md">Export PDF & QR</button>
          <button onClick={onBack} className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-md">Dashboard</button>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className={`p-6 rounded-xl border ${isApproved ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Audit Status</div>
              <div className="text-2xl font-extrabold mt-1">{merged.overallStatus || 'UNDER_REVIEW'}</div>
              <div className="text-xs text-slate-600 mt-1">Engine: {merged.source || 'AI'}</div>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${isApproved ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'}`}>
              {isApproved ? 'COMPLIANT' : 'VARIANCES'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Land Parcel</div>
            <div><b>District:</b> {merged.district || '—'}</div>
            <div><b>Taluk:</b> {merged.taluk || '—'}</div>
            <div><b>Village:</b> {merged.village || '—'}</div>
            <div><b>Survey:</b> {merged.surveyNo || '—'}</div>
            <div><b>Patta:</b> {merged.pattaNo || '—'}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Landowner</div>
            <div><b>Name:</b> {merged.ownerName || '—'}</div>
            <div><b>Phone:</b> {merged.ownerPhone || '—'}</div>
            <div><b>Address:</b> {merged.ownerAddress || '—'}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
            <div className="text-[10px] uppercase text-slate-500 font-bold">FSI</div>
            <div className="text-xl font-bold">{merged.fsi ?? '—'}</div>
            <div className="text-[10px] text-slate-500">Max 2.0</div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
            <div className="text-[10px] uppercase text-slate-500 font-bold">Coverage</div>
            <div className="text-xl font-bold">{merged.coverage ?? '—'}%</div>
            <div className="text-[10px] text-slate-500">Max 75%</div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
            <div className="text-[10px] uppercase text-slate-500 font-bold">RWH</div>
            <div className="text-xl font-bold">{merged.rwh ?? '—'}</div>
            <div className="text-[10px] text-slate-500">Liters</div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center">
            <div className="text-[10px] uppercase text-slate-500 font-bold">SBC</div>
            <div className="text-xl font-bold">{merged.sbc || '—'}</div>
            <div className="text-[10px] text-slate-500">kN/m²</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900 text-white rounded-lg p-4">
            <div className="text-[10px] uppercase text-slate-400 font-bold mb-1">Foundation</div>
            <div className="font-semibold">{merged.foundation || '—'}</div>
          </div>
          <div className="bg-slate-900 text-white rounded-lg p-4">
            <div className="text-[10px] uppercase text-slate-400 font-bold mb-1">Corrosion Risk</div>
            <div className="font-semibold">{merged.corrosion || '—'}</div>
          </div>
        </div>

        {findings.length > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="text-xs font-bold uppercase text-slate-500 mb-2">Compliance Findings</div>
            <ul className="text-xs space-y-1 list-disc list-inside text-slate-700">
              {findings.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {trustData?.sbc?.warning && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-medium">⚠️ {trustData.sbc.warning}</div>
        )}

        <div className="text-[10px] text-slate-400 font-mono pt-4 border-t">
          Generated: {merged.generatedAt || new Date().toISOString()} · Hash: {merged.hash || '—'}
        </div>
      </div>
    </div>
  );
}
