# DTCP Permit Compliance Portal

## Enterprise-Grade Building Permit System for Tamil Nadu

A professional, high-performance web application for building permit compliance checking with advanced geotechnical validation, GIS integration, and AI-powered assistance.

## 🏗️ Architecture

### Frontend
- **React 18** with Vite for blazing fast builds
- **Tailwind CSS** for modern, responsive UI
- **Framer Motion** for smooth animations
- **React Router (HashRouter)** for GitHub Pages compatibility
- **Leaflet.js** for interactive GIS mapping

### Backend
- **FastAPI** (Python) for high-performance REST API
- **MongoDB** with Motor for async database operations
- **CRDT Event Sourcing** for offline-first conflict resolution
- **Geospatial Queries** for buffer zone validation

## 🚀 Features

### Core Capabilities
- ✅ Dual Authentication (Phone OTP + Email/Password)
- ✅ Multi-step Application Wizard
- ✅ Real-time FSI & Setback Calculations
- ✅ Geotechnical Soil Analysis (15 parameters)
- ✅ GIS-based Plot Verification
- ✅ Automated Foundation Recommendations
- ✅ Cryptographic PDF Reports with QR Verification

### Advanced Engineering Logic
- **Hybrid Logical Clocks (HLC)** for offline sync without timestamp drift
- **Anti-Spoofing Validation** requiring DSC for soil data
- **Regulatory Buffer Checks** (Railway, ASI, Water Bodies)
- **FMB/Patta Discrepancy Detection**
- **Master Plan Change Sync**

## 📁 Project Structure

```
/workspace
├── backend/
│   ├── main.py              # FastAPI server with CRDT logic
│   └── requirements.txt     # Python dependencies
├── permit-portal/
│   ├── src/
│   │   ├── App.jsx          # Main router
│   │   ├── main.jsx         # Entry point (HashRouter)
│   │   ├── index.css        # Tailwind + custom styles
│   │   ├── pages/           # Landing, Auth, Dashboard
│   │   └── components/      # Forms, Reports, Maps
│   ├── vite.config.js       # Vite config with base path
│   └── tailwind.config.js   # Tailwind customization
└── README.md
```

## 🛠️ Setup Instructions

### 1. Install Backend Dependencies
```bash
cd /workspace/backend
pip install -r requirements.txt
```

### 2. Install Frontend Dependencies
```bash
cd /workspace/permit-portal
npm install
```

### 3. Configure Environment Variables
Create `.env` in `/workspace/backend`:
```env
MONGODB_URI=mongodb://localhost:27017
CORS_ORIGINS=["http://localhost:5173", "https://nazil561.github.io"]
```

### 4. Start Backend Server
```bash
cd /workspace/backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 5. Start Frontend Dev Server
```bash
cd /workspace/permit-portal
npm run dev -- --host 0.0.0.0
```

## 🌐 Deployment to GitHub Pages

### Build for Production
```bash
cd /workspace/permit-portal
npm run build
```

### Deploy Command
```bash
npm run deploy
```

The `vite.config.js` is pre-configured with `base: '/Regcat/'` for GitHub Pages.

## 🔒 Security Features

- **Server-Side Validation**: All critical calculations verified on backend
- **CRDT Conflict Resolution**: Prevents data loss during offline editing
- **DSC Integration**: Digital Signature Certificates required for final approval
- **CORS Protection**: Configured for specific origins only
- **Input Sanitization**: All user inputs validated against strict schemas

## 📊 Regulatory Compliance

Implements Tamil Nadu Combined Development and Building Rules (TNCDBR) 2019:
- Rule 35: FSI & Height Regulations
- Rule 39: High Rise Building Provisions
- Rule 41: Buffer Zone Requirements
- Geotechnical Safety Standards

## 🤝 Support

For technical support: dtcp-support@tn.gov.in  
Helpline: 1800-425-1234

---

© 2024 Directorate of Town and Country Planning, Tamil Nadu
