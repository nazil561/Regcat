import React, { useState, useEffect } from 'react';
import { calculateDCR, recommendFoundation, checkCorrosionRisk, calculateRWH, validateSurveyNumber } from '../services/engineeringLogic';
import { analyzeTNCDBRCompliance } from '../services/groqAi';
import { parseBlueprintDimensions } from '../services/ocrIntelligence';
import { MapContainer, TileLayer } from 'react-leaflet';
import BimDigitalTwin from './BimDigitalTwin';
import LandMasterStep from './LandMasterStep';
import 'leaflet/dist/leaflet.css';
import { saveFormDraft, uploadDocument } from '../firebase';

// Always-succeeds fallback report — uses local engineeringLogic, no network
function generateFallbackReport(formData, liveMetrics) {
  const fsiPass = liveMetrics.fsi <= 2.0;
  const covPass = liveMetrics.coverage <= 75;
  return {
    overallStatus: fsiPass && covPass ? 'APPROVED' : 'VARIANCE_REQUIRED',
    source: 'LOCAL_ENGINE',
    surveyNo: formData.surveyNo || '245/3B',
    district: formData.district || '—',
    taluk: formData.taluk || '—',
    village: formData.village || '—',
    pattaNo: formData.pattaNo || '—',
    ownerName: formData.ownerName || '—',
    ownerPhone: formData.ownerPhone || '—',
    ownerAddress: formData.ownerAddress || '—',
    plotArea: Number(formData.plotArea) || 0,
    builtUpArea: Number(formData.builtUpArea) || 0,
    roadWidth: Number(formData.roadWidth) || 0,
    fsi: liveMetrics.fsi,
    coverage: liveMetrics.coverage,
    foundation: liveMetrics.foundation || '—',
    corrosion: liveMetrics.corrosion || '—',
    rwh: liveMetrics.rwh,
    findings: [
      `FSI ${liveMetrics.fsi} vs max 2.0 — ${fsiPass ? 'PASS' : 'FAIL'}`,
      `Coverage ${liveMetrics.coverage}% vs max 75% — ${covPass ? 'PASS' : 'FAIL'}`,
      `Rainwater harvesting: ${liveMetrics.rwh} L required`,
      `Foundation: ${liveMetrics.foundation || 'SBC not provided'}`,
      `Corrosion risk: ${liveMetrics.corrosion || 'pH not provided'}`,
    ],
    generatedAt: new Date().toISOString(),
  };
}

export default function ComplianceWizard({ user, onComplete, onCancel }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState('gis');
  const [formData, setFormData] = useState({
    district: '', taluk: '', village: '',
    ownerName: '', ownerPhone: '', ownerAddress: '',
    surveyNo: '', pattaNo: '',
    plotArea: 200, roadWidth: 12, builtUpArea: 120,
    soilMoisture: '', soilPh: '', soilEc: '', soilTemp: '', sbc: '',
    files: {}
  });
  const [liveMetrics, setLiveMetrics] = useState({ fsi: 0, coverage: 0, foundation: '', corrosion: '', rwh: 0 });

  useEffect(() => {
    const dcr = calculateDCR(formData.plotArea, formData.builtUpArea);
    setLiveMetrics({
      fsi: dcr.fsi,
      coverage: dcr.coverage,
      foundation: recommendFoundation(formData.sbc),
      corrosion: checkCorrosionRisk(formData.soilPh),
      rwh: calculateRWH(formData.plotArea)
    });
  }, [formData]);

  // Auto-fill owner details from logged-in user
  useEffect(() => {
    if (user && !formData.ownerAddress) {
      setFormData(prev => ({
        ...prev,
        ownerName: prev.ownerName || (user.displayName || ''),
        ownerPhone: prev.ownerPhone || (user.phoneNumber || ''),
        ownerAddress: prev.ownerAddress || (user.email || ''),
      }));
    }
  }, [user]);

  // Auto-save draft every 3s when form changes
  useEffect(() => {
    if (!user?.uid || !formData.district) return;
    const t = setTimeout(() => {
      saveFormDraft(user.uid, formData).catch(err =>
        console.warn('[Regcat] draft save failed:', err?.message)
      );
    }, 3000);
    return () => clearTimeout(t);
  }, [formData, user]);

  // Save draft immediately on tab close / refresh
  useEffect(() => {
    if (!user?.uid) return;
    const handler = () => {
      if (formData.district && formData.surveyNo) {
        saveFormDraft(user.uid, formData).catch(() => {});
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [formData, user]);


  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileUpload = async (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, files: { ...prev.files, [docType]: file } }));
      if (user?.uid) {
        uploadDocument(file, user.uid, docType).catch(e => console.warn('upload fail', e));
      }
      if (docType === 'architectPlans') {
        const ocrResult = await parseBlueprintDimensions(file);
        console.log("OCR Extracted Blueprint Data:", ocrResult);
      }
    }
  };

  const submitToAi = async () => {
    setLoading(true);
    let result;
    try {
      const aiResult = await analyzeTNCDBRCompliance(formData);
      if (aiResult && typeof aiResult === 'object') {
        result = aiResult;
      } else {
        console.warn('[Regcat] AI returned non-object, using local engine');
        result = generateFallbackReport(formData, liveMetrics);
      }
    } catch (error) {
      console.warn('[Regcat] AI failed, using local engine:', error?.message || error);
      result = generateFallbackReport(formData, liveMetrics);
    }
    try {
      await onComplete({ ...result, formData });
    } catch (e) {
      console.error('[Regcat] onComplete crashed:', e);
      alert('Report pipeline failed — check console.');
    }
    setLoading(false);
  };

  const canProceed = () => {
    if (step === 1) {
      return Boolean(
        formData.district && formData.taluk && formData.village &&
        formData.surveyNo && formData.pattaNo &&
        formData.ownerName && formData.ownerPhone && formData.ownerAddress
      );
    }
    if (step === 2) return formData.plotArea > 0 && formData.builtUpArea > 0;
    return true;
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-sm border border-slate-200 font-sans">
      <div className="flex border-b border-slate-200 bg-slate-50 rounded-t-xl overflow-hidden">
        {[1,2,3,4,5,6].map(num => (
          <div key={num} className={`flex-1 text-center py-3 text-xs font-bold ${step === num ? 'bg-slate-900 text-white' : 'text-slate-500'}`}>
            STEP {num}
          </div>
        ))}
      </div>
      <div className="p-8">

        {step === 1 && (
          <LandMasterStep
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            user={user}
          />
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">2. Dimensions & DCR</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-semibold mb-1">Plot Area (sq.m)</label><input type="number" name="plotArea" value={formData.plotArea} onChange={handleChange} className="w-full p-3 border rounded-lg" /></div>
              <div><label className="block text-xs font-semibold mb-1">Built-up (sq.m)</label><input type="number" name="builtUpArea" value={formData.builtUpArea} onChange={handleChange} className="w-full p-3 border rounded-lg" /></div>
              <div className="col-span-2"><label className="block text-xs font-semibold mb-1">Road Width (m)</label><input type="number" name="roadWidth" value={formData.roadWidth} onChange={handleChange} className="w-full p-3 border rounded-lg" /></div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 grid grid-cols-2 gap-4 text-sm">
              <div><strong>FSI:</strong> {liveMetrics.fsi}</div>
              <div><strong>Coverage:</strong> {liveMetrics.coverage}%</div>
              <div className="col-span-2"><strong>RWH:</strong> {liveMetrics.rwh} L</div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">3. Geotechnical</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-semibold">Moisture (%)</label><input type="number" name="soilMoisture" value={formData.soilMoisture} onChange={handleChange} className="w-full p-2 border rounded" /></div>
              <div><label className="block text-xs font-semibold">pH</label><input type="number" name="soilPh" value={formData.soilPh} onChange={handleChange} className="w-full p-2 border rounded" /></div>
              <div><label className="block text-xs font-semibold">EC (mS/cm)</label><input type="number" name="soilEc" value={formData.soilEc} onChange={handleChange} className="w-full p-2 border rounded" /></div>
              <div><label className="block text-xs font-semibold">Temp (°C)</label><input type="number" name="soilTemp" value={formData.soilTemp} onChange={handleChange} className="w-full p-2 border rounded" /></div>
              <div className="col-span-2"><label className="block text-xs font-semibold">SBC (kN/m²)</label><input type="number" name="sbc" value={formData.sbc} onChange={handleChange} className="w-full p-2 border rounded" /></div>
            </div>
            <div className="bg-slate-900 text-white p-4 rounded-lg text-sm space-y-2">
              <div><strong>Foundation:</strong> {liveMetrics.foundation}</div>
              <div><strong>Material:</strong> {liveMetrics.corrosion}</div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">4. Spatial Visualization</h2>
              <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                <button onClick={() => setViewMode('gis')} className={`px-3 py-1 text-xs font-semibold rounded-md ${viewMode === 'gis' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}>2D GIS</button>
                <button onClick={() => setViewMode('bim')} className={`px-3 py-1 text-xs font-semibold rounded-md ${viewMode === 'bim' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}>3D BIM</button>
              </div>
            </div>
            {viewMode === 'gis' ? (
              <div style={{ height: '400px', width: '100%', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #e2e8f0', position: 'relative', zIndex: 0 }}>
                <MapContainer center={[11.0168, 76.9558]} zoom={16} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
                  <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
              </div>
            ) : (
              <BimDigitalTwin plotArea={parseFloat(formData.plotArea) || 200} builtUpArea={parseFloat(formData.builtUpArea) || 120} />
            )}
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">5. Document Uploads</h2>
            <div className="border-2 border-dashed p-6 rounded-lg text-center">
              <label className="cursor-pointer text-blue-600 font-semibold">Lab Certificates<input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'labCerts')} /></label>
              <p className="text-xs mt-2 text-slate-500">{formData.files.labCerts ? formData.files.labCerts.name : "PDF/JPG (Max 10MB)"}</p>
            </div>
            <div className="border-2 border-dashed p-6 rounded-lg text-center">
              <label className="cursor-pointer text-blue-600 font-semibold">Architect Plans (OCR)<input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'architectPlans')} /></label>
              <p className="text-xs mt-2 text-slate-500">{formData.files.architectPlans ? formData.files.architectPlans.name : "Tesseract OCR parser"}</p>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">6. Review</h2>
            <div className="bg-slate-50 p-6 rounded-lg border text-sm space-y-3">
              <p><strong>Survey:</strong> {formData.surveyNo || '245/3B'}</p>
              <p><strong>FSI:</strong> {liveMetrics.fsi} (Max 2.0)</p>
              <p><strong>Foundation:</strong> {liveMetrics.foundation}</p>
              <p><strong>Material:</strong> {liveMetrics.corrosion}</p>
            </div>
            <button onClick={submitToAi} disabled={loading} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
              {loading ? "Executing..." : "Submit to TNCDBR Engine"}
            </button>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-4 border-t">
          <div className="flex gap-2">
            {onCancel && <button onClick={onCancel} className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-50">Cancel</button>}
            {step > 1 && <button onClick={() => setStep(step - 1)} className="px-4 py-2 border rounded-lg text-xs font-semibold">Back</button>}
          </div>
          {step < 6 && <button onClick={() => setStep(step + 1)} disabled={!canProceed()} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed">Next Phase</button>}
        </div>
      </div>
    </div>
  );
}

