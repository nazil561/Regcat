import React from 'react';
import { DISTRICT_LIST, getTaluks } from '../data/tnDistricts';
import { validateSurveyNumber } from '../services/engineeringLogic';

export default function LandMasterStep({ formData, handleChange, setFormData }) {
  const taluks = getTaluks(formData.district);

  const onDistrictChange = (e) => {
    setFormData(prev => ({ ...prev, district: e.target.value, taluk: '', village: '' }));
  };
  const onTalukChange = (e) => {
    setFormData(prev => ({ ...prev, taluk: e.target.value, village: '' }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">1. Land Master & Ownership</h2>
        <p className="text-xs text-slate-500 mt-1">
          Select the land parcel from official TN revenue records, then enter owner details.
        </p>
      </div>

      {/* --- Land parcel selection --- */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-semibold text-slate-700">📍 Land Parcel (TN Revenue Master)</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1">District *</label>
            <select
              name="district" value={formData.district || ''} onChange={onDistrictChange}
              className="w-full p-3 border rounded-lg bg-white"
            >
              <option value="">-- Select District --</option>
              {DISTRICT_LIST.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Taluk *</label>
            <select
              name="taluk" value={formData.taluk || ''} onChange={onTalukChange}
              disabled={!formData.district}
              className="w-full p-3 border rounded-lg bg-white disabled:bg-slate-100 disabled:text-slate-400"
            >
              <option value="">-- Select Taluk --</option>
              {taluks.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Village / FMB Village *</label>
            <input
              type="text" name="village" value={formData.village || ''} onChange={handleChange}
              disabled={!formData.taluk}
              placeholder={formData.taluk ? "e.g. Annur" : "Select taluk first"}
              className="w-full p-3 border rounded-lg disabled:bg-slate-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">TN Survey Number * (e.g. 245/3B)</label>
            <input
              type="text" name="surveyNo" value={formData.surveyNo || ''} onChange={handleChange}
              placeholder="245/3B" className="w-full p-3 border rounded-lg"
            />
            {formData.surveyNo && !validateSurveyNumber(formData.surveyNo) && (
              <span className="text-red-500 text-xs">Invalid format. Expected e.g. 245/3B</span>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold mb-1">Patta Number *</label>
            <input
              type="text" name="pattaNo" value={formData.pattaNo || ''} onChange={handleChange}
              placeholder="Enter Patta No." className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* --- Landowner details --- */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-semibold text-slate-700">👤 Landowner / Applicant Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1">Full Name *</label>
            <input
              type="text" name="ownerName" value={formData.ownerName || ''} onChange={handleChange}
              placeholder="As per Patta" className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Mobile Number *</label>
            <input
              type="tel" name="ownerPhone" value={formData.ownerPhone || ''} onChange={handleChange}
              placeholder="10-digit mobile" maxLength={10} className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold mb-1">Communication Address *</label>
            <textarea
              name="ownerAddress" value={formData.ownerAddress || ''} onChange={handleChange}
              rows={2} placeholder="Door No, Street, Village, Taluk, District, PIN"
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
