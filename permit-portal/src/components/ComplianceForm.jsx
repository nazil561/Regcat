import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, FileText, Upload, CheckCircle, ChevronRight, Home } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapClickHandler = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng)
    },
  })
  return null
}

const ComplianceForm = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    district: '', taluk: '', village: '', localBody: '',
    surveyNumber: '', pattaNumber: '', extent: '',
    plotSize: '', buildingArea: '', floors: '',
    coordinates: null, documents: []
  })
  const [mapCenter, setMapCenter] = useState([13.0827, 80.2707])
  const [markerPosition, setMarkerPosition] = useState(null)

  const handleLocationSelect = (latlng) => {
    setMarkerPosition([latlng.lat, latlng.lng])
    setFormData({ ...formData, coordinates: latlng })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    sessionStorage.setItem('complianceData', JSON.stringify(formData))
    navigate('/report')
  }

  const steps = [
    { number: 1, title: 'Jurisdiction', icon: <Home size={18} /> },
    { number: 2, title: 'Property Details', icon: <FileText size={18} /> },
    { number: 3, title: 'GIS Verification', icon: <MapPin size={18} /> },
    { number: 4, title: 'Documents', icon: <Upload size={18} /> }
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)', padding: '40px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px', margin: '0 auto' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: step >= s.number ? 'var(--gradient-primary)' : 'var(--paper)',
                    color: step >= s.number ? 'var(--white)' : 'var(--text-secondary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    {step > s.number ? <CheckCircle size={24} /> : s.icon}
                  </div>
                  <span style={{ fontWeight: '600', color: step >= s.number ? 'var(--primary-dark)' : 'var(--text-secondary)' }}>
                    {s.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: '60px', height: '2px', background: step > s.number ? 'var(--primary-blue)' : 'var(--paper)', marginLeft: '12px' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '32px' }}>
            {steps[step - 1].title}
          </h2>

          {step === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>District</label>
                <select name="district" value={formData.district} onChange={handleChange} className="input-field">
                  <option>Select District</option>
                  <option>Chennai</option><option>Coimbatore</option><option>Madurai</option><option>Tiruchirappalli</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Taluk</label>
                <select name="taluk" value={formData.taluk} onChange={handleChange} className="input-field">
                  <option>Select Taluk</option><option>Egmore</option><option>Mylapore</option><option>Ambattur</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Village</label>
                <input type="text" name="village" value={formData.village} onChange={handleChange} className="input-field" placeholder="Enter village name" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Local Body Type</label>
                <select name="localBody" value={formData.localBody} onChange={handleChange} className="input-field">
                  <option>Select Type</option><option>Corporation</option><option>Municipality</option><option>Town Panchayat</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Survey Number</label>
                <input type="text" name="surveyNumber" value={formData.surveyNumber} onChange={handleChange} className="input-field" placeholder="e.g. 245/3B" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Patta Number</label>
                <input type="text" name="pattaNumber" value={formData.pattaNumber} onChange={handleChange} className="input-field" placeholder="e.g. 1123" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Plot Size (sq.ft)</label>
                <input type="number" name="plotSize" value={formData.plotSize} onChange={handleChange} className="input-field" placeholder="1200" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Building Area (sq.ft)</label>
                <input type="number" name="buildingArea" value={formData.buildingArea} onChange={handleChange} className="input-field" placeholder="950" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Number of Floors</label>
                <input type="number" name="floors" value={formData.floors} onChange={handleChange} className="input-field" placeholder="2" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Click on the map to mark your property location</p>
              <div style={{ height: '400px', borderRadius: '12px', overflow: 'hidden', border: '2px solid var(--border-color)' }}>
                <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <MapClickHandler onLocationSelect={handleLocationSelect} />
                  {markerPosition && <Marker position={markerPosition}><Popup>Selected Location</Popup></Marker>}
                </MapContainer>
              </div>
              {formData.coordinates && (
                <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(31, 122, 92, 0.1)', borderRadius: '8px', color: 'var(--success)' }}>
                  Location marked: {formData.coordinates.lat.toFixed(4)}, {formData.coordinates.lng.toFixed(4)}
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div>
              <div style={{ border: '2px dashed var(--border-color)', borderRadius: '12px', padding: '48px', textAlign: 'center', marginBottom: '24px' }}>
                <Upload size={48} color="var(--text-secondary)" style={{ marginBottom: '16px' }} />
                <p style={{ fontWeight: '600', marginBottom: '8px' }}>Drag and drop files or click to upload</p>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Sale Deed, Patta, FMB Sketch, Building Plan (PDF, max 10MB)</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['Sale Deed', 'Patta Document', 'FMB Sketch', 'Building Plan'].map((doc) => (
                  <div key={doc} style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FileText size={20} color="var(--primary-blue)" />
                    <span style={{ fontSize: '14px' }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
            {step > 1 ? (
              <button className="btn btn-outline" onClick={() => setStep(step - 1)}>Previous</button>
            ) : <div></div>}
            {step < 4 ? (
              <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            ) : (
              <button className="btn btn-accent" onClick={handleSubmit}>Submit for Compliance Check</button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ComplianceForm
