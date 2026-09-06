import React, { useState } from 'react';
import { analyzeTNCDBRCompliance } from '../services/groqAi';

export default function ComplianceForm({ onAnalysisComplete, onCancel }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    buildingType: 'Residential',
    plotArea: 180,
    roadWidth: 9.0,
    height: 10.0,
    floors: 2,
    fsi: 1.5,
    plotCoverage: 60,
    frontSetback: 3.0,
    rearSetback: 1.5,
    sideSetback: 1.5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRunAiCheck = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await analyzeTNCDBRCompliance(formData);
      onAnalysisComplete(result);
    } catch (err) {
      setError(err.message || 'AI verification failed. Ensure VITE_GROQ_API_KEY is configured.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
      {/* Form Header */}
      <div className="bg-slate-900 text-white p-6 border-b border-slate-800">
        <h2 className="text-lg font-bold tracking-tight">TNCDBR 2019 Permit Evaluation</h2>
        <p className="text-xs text-slate-400 mt-1">Multi-step rule validation and Groq AI analysis engine</p>

        {/* Progressive Disclosure Step Navigation */}
        <div className="flex items-center gap-2 mt-6">
          <div className={`flex-1 h-1.5 rounded-full ${currentStep >= 1 ? 'bg-blue-500' : 'bg-slate-800'}`} />
          <div className={`flex-1 h-1.5 rounded-full ${currentStep >= 2 ? 'bg-blue-500' : 'bg-slate-800'}`} />
          <div className={`flex-1 h-1.5 rounded-full ${currentStep >= 3 ? 'bg-blue-500' : 'bg-slate-800'}`} />
        </div>
        <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
          <span className={currentStep === 1 ? 'text-white font-bold' : ''}>1. Site Basics</span>
          <span className={currentStep === 2 ? 'text-white font-bold' : ''}>2. Building Specs</span>
          <span className={currentStep === 3 ? 'text-white font-bold' : ''}>3. AI Analysis</span>
        </div>
      </div>

      <div className="p-6">
        {error && (
          <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
            {error}
          </div>
        )}

        {/* STEP 1: Site & Road Parameters */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Step 1: Plot & Location Parameters</h3>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Building Classification</label>
              <select
                name="buildingType"
                value={formData.buildingType}
                onChange={handleChange}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Residential">Residential (Non-High Rise)</option>
                <option value="Commercial">Commercial / Retail</option>
                <option value="Industrial">Industrial / Warehouse</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Plot Area (sq.m)</label>
                <input
                  type="number"
                  name="plotArea"
                  value={formData.plotArea}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Abutting Road Width (m)</label>
                <input
                  type="number"
                  name="roadWidth"
                  value={formData.roadWidth}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition"
              >
                Next: Building Dimensions &rarr;
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Height, FSI & Coverage Specs */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Step 2: Proposed Structure Specs</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Proposed Height (m)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Number of Floors</label>
                <input
                  type="number"
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Proposed FSI</label>
                <input
                  type="number"
                  step="0.05"
                  name="fsi"
                  value={formData.fsi}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Plot Coverage (%)</label>
                <input
                  type="number"
                  name="plotCoverage"
                  value={formData.plotCoverage}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200"
              >
                &larr; Back
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition"
              >
                Next: Setbacks & Verification &rarr;
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Setbacks & AI Verification Trigger */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Step 3: Boundary Setbacks (Meters)</h3>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Front Setback</label>
                <input
                  type="number"
                  step="0.1"
                  name="frontSetback"
                  value={formData.frontSetback}
                  onChange={handleChange}
                  className="w-full p-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Rear Setback</label>
                <input
                  type="number"
                  step="0.1"
                  name="rearSetback"
                  value={formData.rearSetback}
                  onChange={handleChange}
                  className="w-full p-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Side Setback</label>
                <input
                  type="number"
                  step="0.1"
                  name="sideSetback"
                  value={formData.sideSetback}
                  onChange={handleChange}
                  className="w-full p-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200"
              >
                &larr; Back
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleRunAiCheck}
                  disabled={loading}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-md transition disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? 'Evaluating TNCDBR AI...' : 'Run Groq AI Audit ✨'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
