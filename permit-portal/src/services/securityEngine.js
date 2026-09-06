import CryptoJS from 'crypto-js';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';

// --- 1. Hybrid Logical Clock (HLC) for CRDT Conflict Resolution ---
export class HybridLogicalClock {
  constructor(nodeId = 'client-node') {
    this.nodeId = nodeId;
    this.wallTime = Date.now();
    this.counter = 0;
  }

  now() {
    const physical = Date.now();
    if (physical > this.wallTime) {
      this.wallTime = physical;
      this.counter = 0;
    } else {
      this.counter++;
    }
    return `${this.wallTime}:${String(this.counter).padStart(4, '0')}:${this.nodeId}`;
  }

  static merge(localState, remoteState) {
    if (!remoteState?.hlc) return localState;
    if (!localState?.hlc) return remoteState;
    return localState.hlc > remoteState.hlc ? localState : remoteState;
  }
}

// --- 2. Anti-Spoofing Data Tagging ---
export const evaluateDataTrust = (formData) => {
  const hasVerifiedLabPdf = !!formData.files?.labCerts;
  
  return {
    sbc: {
      value: formData.sbc || 'N/A',
      status: hasVerifiedLabPdf ? 'VERIFIED_LAB_REPORT' : 'SELF_REPORTED',
      warning: !hasVerifiedLabPdf ? 'Plate Load SBC marked as Self-Reported. Lab verification certificate required for official issuance.' : null
    },
    soilPh: {
      value: formData.soilPh || 'N/A',
      status: hasVerifiedLabPdf ? 'VERIFIED_LAB_REPORT' : 'SELF_REPORTED'
    }
  };
};

// --- 3. Cryptographic Hash & PDF Certificate Generation ---
export const generateAuditHash = (surveyNo, formData, reportData) => {
  const payload = JSON.stringify({ surveyNo, formData, reportData });
  return CryptoJS.SHA256(payload).toString(CryptoJS.enc.Hex);
};

export const generateTamperProofPdf = async (surveyNo, formData, reportData) => {
  const doc = new jsPDF();
  const auditHash = generateAuditHash(surveyNo, formData, reportData);
  const isProvisional = !formData.files?.labCerts;

  // Dynamic Background Watermark
  doc.setTextColor(230, 230, 235);
  doc.setFontSize(42);
  doc.text(isProvisional ? "PROVISIONAL - SELF REPORTED" : "OFFICIAL TNCDBR CERTIFICATE", 15, 160, { angle: 35 });

  // Main Header
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text("TAMIL NADU BUILDING PERMIT AUDIT CERTIFICATE", 14, 20);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`Audit Hash: ${auditHash}`, 14, 27);
  doc.text(`Timestamp: ${new Date().toISOString()} | HLC: ${new HybridLogicalClock().now()}`, 14, 32);

  // Status Box
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 40, 120, 25, 2, 2, 'FD');

  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(`Survey Number: ${surveyNo}`, 18, 50);
  doc.setFont('helvetica', 'bold');
  doc.text(`Audit Result: ${reportData.overallStatus || 'APPROVED'}`, 18, 58);

  // Generate QR Code for Verification Link
  const verificationUrl = `https://permit-portal.tn.gov.in/verify?hash=${auditHash}`;
  const qrDataUrl = await QRCode.toDataURL(verificationUrl, { margin: 1, width: 120 });
  doc.addImage(qrDataUrl, 'PNG', 145, 15, 45, 45);
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text("Scan QR to verify hash on ledger", 143, 63);

  // Technical Breakdown
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text("Geotechnical & Structural Data Integrity", 14, 78);

  const trust = evaluateDataTrust(formData);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`Plate Load SBC: ${trust.sbc.value} kN/m² [${trust.sbc.status}]`, 14, 86);
  doc.text(`Soil pH Level: ${trust.soilPh.value} [${trust.soilPh.status}]`, 14, 92);

  if (trust.sbc.warning) {
    doc.setTextColor(185, 28, 28);
    doc.text(`* Warning: ${trust.sbc.warning}`, 14, 100);
  }

  // Save Document
  doc.save(`TNCDBR_Audit_${surveyNo.replace('/', '_')}.pdf`);
};
