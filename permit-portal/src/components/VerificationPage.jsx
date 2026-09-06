import React, { useEffect, useState } from 'react';

export default function VerificationPage({ hashFromUrl, onReturn }) {
  const [auditRecord, setAuditRecord] = useState(null);
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    // Simulate cryptographic ledger lookup via SHA-256 hash
    setTimeout(() => {
      setAuditRecord({
        hash: hashFromUrl || "8f9b2c3a1d4e5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4",
        surveyNo: "245/3B",
        jurisdiction: "DTCP / Greater Chennai Corporation",
        timestamp: new Date().toISOString(),
        status: "OFFICIAL_VERIFIED",
        zkProofStatus: "ZK-PROOF VALID (TNCDBR 2019 Compliant)",
        buildingType: "Residential Multi-Storey (G+2)",
        sbcTrustLevel: "VERIFIED_LAB_REPORT",
        ledgerAnchor: "IPFS / Block #18923041"
      });
      setVerifying(false);
    }, 800);
  }, [hashFromUrl]);

  if (verifying) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
        <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="font-mono text-sm tracking-wider">Verifying Cryptographic SHA-256 Ledger Hash...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 space-y-6">
        {/* Verification Status Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
              ✓ Immutable Record Authenticated
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white mt-1">
              Public Permit Audit Verification
            </h1>
          </div>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-mono font-bold">
            GENUINE
          </span>
        </div>

        {/* Hash Details */}
        <div className="space-y-4 text-xs font-mono">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
            <span className="text-slate-500 block mb-1">SHA-256 Cryptographic Hash:</span>
            <span className="text-blue-400 break-all">{auditRecord.hash}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-slate-300">
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/60">
              <span className="text-slate-500 block text-[10px] uppercase">Survey Number</span>
              <span className="font-bold text-sm text-white">{auditRecord.surveyNo}</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/60">
              <span className="text-slate-500 block text-[10px] uppercase">Jurisdiction</span>
              <span className="font-bold text-sm text-white">{auditRecord.jurisdiction}</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/60">
              <span className="text-slate-500 block text-[10px] uppercase">Zero-Knowledge Proof</span>
              <span className="font-bold text-emerald-400">{auditRecord.zkProofStatus}</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/60">
              <span className="text-slate-500 block text-[10px] uppercase">Data Trust Level</span>
              <span className="font-bold text-blue-400">{auditRecord.sbcTrustLevel}</span>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60 flex justify-between items-center text-slate-400">
            <span>Ledger Anchor: <strong className="text-slate-200">{auditRecord.ledgerAnchor}</strong></span>
            <span>{new Date(auditRecord.timestamp).toLocaleDateString()}</span>
          </div>
        </div>

        <button
          onClick={onReturn}
          className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition text-xs tracking-wider uppercase"
        >
          Return to Portal Main
        </button>
      </div>
    </div>
  );
}
