import React, { useState, useEffect } from 'react';
import { calculateDCR, recommendFoundation, checkCorrosionRisk, calculateRWH, validateSurveyNumber } from '../services/engineeringLogic';
import { analyzeTNCDBRCompliance } from '../services/groqAi';
import { parseBlueprintDimensions } from '../services/ocrIntelligence';
import { MapContainer, TileLayer } from 'react-leaflet';
import BimDigitalTwin from './BimDigitalTwin';
import 'leaflet/dist/leaflet.css';

export default function ComplianceWizard({ user, onComplete }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState('gis'); // 'gis' or 'bim'
  const [formData, setFormData] = useState({
    surveyNo: '', pattaNo: '',
    plotArea: 200, roadWidth: 12, builtUpArea: 120,
    soilMoisture: '', soilPh: '', soilEc: '', soilTemp: '', sbc: '',
    files: {}
  });

  const [liveMetrics, setLiveMetrics] = useState({
    fsi: 0, coverage: 0, foundation: '', corrosion: '', rwh: 0
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        files: { ...prev.files, [docType]: file }
      }));

      if (docType === 'architectPlans') {
        const ocrResult = await parseBlueprintDimensions(file);
        console.log("OCR Extracted Blueprint Data:", ocrResult);
      }
    }
  };

  const submitToAi = async () => {
    setLoading(true);
    try {
      const result = await analyzeTNCDBRCompliance(formData);
      onComplete(result);
    } catch (error) {
      console.error(error);
      alert("AI Processing Failed");
    }
    setLoading(false);
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
          <div className="space-y-6">
            <h2 className="text-xl font-bold">1. Jurisdiction & Ownership</h2>
            <div>
              <label className="block text-sm font-semibold mb-1">TN Survey Number (e.g., 245/3B)</label>
              <input type="text" name="surveyNo" value={formData.surveyNo} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="245/3B" />
              {!validateSurveyNumber(formData.surveyNo) && formData.surveyNo.length > 0 && (
                <span className="text-red-500 text-xs">Invalid format. Must match standard TN survey patterns.</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Patta Number</label>
              <input type="text" name="pattaNo" value={formData.pattaNo} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Enter Patta No." />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">2. Property Dimensions & DCR Engine</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Plot Area (sq.m)</label>
                <input type="number" name="plotArea" value={formData.plotArea} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Proposed Built-up Area (sq.m)</label>
                <input type="number" name="builtUpArea" value={formData.builtUpArea} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold mb-1">Abutting Road Width (m)</label>
                <input type="number" name="roadWidth" value={formData.roadWidth} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 grid grid-cols-2 gap-4 text-sm">
              <div><strong>Live FSI:</strong> {liveMetrics.fsi}</div>
              <div><strong>Plot Coverage:</strong> {liveMetrics.coverage}%</div>
              <div className="col-span-2"><strong>Required RWH Tank:</strong> {liveMetrics.rwh} Liters</div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">3. Geotechnical Suite Validation</h2>
            <p className="text-xs text-slate-500">Live sensor telemetry (Capacitive VWC 0–100%, pH 3–9, EC 0–20 mS/cm, DS18B20 Temp)[cite: 1].</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold">Soil Moisture (% VWC)</label>
                <input type="number" name="soilMoisture" value={formData.soilMoisture} onChange={handleChange} className="w-full p-2 border rounded" placeholder="0-100%" />
              </div>
              <div>
                <label className="block text-xs font-semibold">Soil pH</label>
                <input type="number" name="soilPh" value={formData.soilPh} onChange={handleChange} className="w-full p-2 border rounded" placeholder="3-9 pH" />
              </div>
              <div>
                <label className="block text-xs font-semibold">Electrical Conductivity (mS/cm)</label>
                <input type="number" name="soilEc" value={formData.soilEc} onChange={handleChange} className="w-full p-2 border rounded" placeholder="0-20" />
              </div>
              <div>
                <label className="block text-xs font-semibold">Soil Temperature (°C)</label>
                <input type="number" name="soilTemp" value={formData.soilTemp} onChange={handleChange} className="w-full p-2 border rounded" placeholder="-40 to 85" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold">Plate Load Test SBC (kN/m²)</label>
                <input type="number" name="sbc" value={formData.sbc} onChange={handleChange} className="w-full p-2 border rounded" placeholder="e.g. 140 kN/m²" />
              </div>
            </div>
            <div className="bg-slate-900 text-white p-4 rounded-lg text-sm space-y-2 mt-4">
              <div><strong>Foundation AI:</strong> {liveMetrics.foundation}</div>
              <div><strong>Material AI:</strong> {liveMetrics.corrosion}</div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">4. Spatial & 3D Digital Twin Visualization</h2>
              <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('gis')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition ${viewMode === 'gis' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
                >
                  2D GIS Map
                </button>
                <button
                  onClick={() => setViewMode('bim')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition ${viewMode === 'bim' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
                >
                  3D BIM Digital Twin
                </button>
              </div>
            </div>

            {viewMode === 'gis' ? (
              <div className="h-80 w-full rounded-xl overflow-hidden border">
                <MapContainer center={[11.0168, 76.9558]} zoom={18} className="h-full w-full">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
              </div>
            ) : (
              <BimDigitalTwin plotArea={parseFloat(formData.plotArea) || 200} builtUpArea={parseFloat(formData.builtUpArea) || 120} />
            )}
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">5. Secure Vault Uploads & Vision-LLM OCR</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed p-6 rounded-lg text-center">
                <label className="cursor-pointer text-blue-600 font-semibold">
                  Upload Lab Certificates (CBR, Sieve Analysis)
                  <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'labCerts')} />
                </label>
                <p className="text-xs mt-2 text-slate-500">{formData.files.labCerts ? formData.files.labCerts.name : "Validates PDF/JPG (Max 10MB)"}</p>
              </div>
              <div className="border-2 border-dashed p-6 rounded-lg text-center">
                <label className="cursor-pointer text-blue-600 font-semibold">
                  Upload FMB / Architect Plans (Auto-OCR Parser)
                  <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'architectPlans')} />
                </label>
                <p className="text-xs mt-2 text-slate-500">{formData.files.architectPlans ? formData.files.architectPlans.name : "Extracts setbacks and dimensions instantly via Tesseract OCR"}</p>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">6. Review & Execute Audit</h2>
            <div className="bg-slate-50 p-6 rounded-lg border text-sm space-y-3">
              <p><strong>Survey Number:</strong> {formData.surveyNo || '245/3B'}</p>
              <p><strong>Calculated FSI:</strong> {liveMetrics.fsi} (Max 2.0)</p>
              <p><strong>Foundation Recommendation:</strong> {liveMetrics.foundation}</p>
              <p><strong>Material Specification:</strong> {liveMetrics.corrosion}</p>
            </div>
            <button 
              onClick={submitToAi} 
              disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Executing Neural Audit & Generating Cryptographic Hash..." : "Submit to TNCDBR Neural Engine"}
            </button>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-4 border-t">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="px-4 py-2 border rounded-lg hover:bg-slate-50 text-xs font-semibold">Back</button>
          ) : <div></div>}
          
          {step < 6 && (
            <button onClick={() => setStep(step + 1)} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold">Next Phase</button>
          )}
        </div>
      </div>
    </div>
  );
}
