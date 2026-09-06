import React from 'react';
import { generateTamperProofPdf, evaluateDataTrust } from '../services/securityEngine';

export default function ComplianceReport({ reportData, formData = {}, onBack }) {
  if (!reportData) return null;

  const trustData = evaluateDataTrust(formData);
  const isApproved = reportData.overallStatus === 'APPROVED';

  const handleDownloadCryptoPdf = async () => {
    await generateTamperProofPdf(formData.surveyNo || '245/3B', formData, reportData);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden font-sans">
      <div className="bg-slate-900 text-white p-6 border-b border-slate-800 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono text-slate-400">TNCDBR 2019 / CRYPTOGRAPHIC AUDIT DISPATCH</div>
          <h1 className="text-xl font-bold tracking-tight mt-1">Regulatory Compliance Certificate</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDownloadCryptoPdf}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-md transition flex items-center gap-1.5"
          >
            📜 Export Tamper-Proof PDF & QR
          </button>
          <button
            onClick={onBack}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-md transition"
          >
            Dashboard
          </button>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className={`p-6 rounded-xl border flex items-center justify-between ${
          isApproved ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-red-50 border-red-200 text-red-950'
        }`}>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Audit Status</div>
            <div className="text-2xl font-extrabold mt-1">{reportData.overallStatus || 'APPROVED'}</div>
          </div>
          <div className="text-right">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
              trustData.sbc.status === 'VERIFIED_LAB_REPORT' ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-900'
            }`}>
              {trustData.sbc.status}
            </span>
          </div>
        </div>

        {trustData.sbc.warning && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-medium">
            ⚠️ {trustData.sbc.warning}
          </div>
        )}

        <div className="bg-slate-50 border p-5 rounded-xl text-xs space-y-2 font-mono">
          <div><strong>Survey Number:</strong> {formData.surveyNo || '245/3B'}</div>
          <div><strong>Safe Bearing Capacity (SBC):</strong> {formData.sbc || 120} kN/m²</div>
          <div><strong>Soil pH Level:</strong> {formData.soilPh || 7.2}</div>
        </div>
      </div>
    </div>
  );
}
