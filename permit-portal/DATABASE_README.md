# 🗄️ Database Architecture - DTCP Permit Compliance Portal

## Overview
This application uses **Firebase** as its complete backend infrastructure:

### 1. **Authentication Database** (Firebase Auth)
- **Location**: Firebase Cloud Servers
- **Purpose**: User identity management
- **Data Stored**:
  - Phone numbers (verified via OTP)
  - User UIDs (unique identifiers)
  - Authentication tokens
  - Session management

### 2. **NoSQL Document Database** (Cloud Firestore)
- **Location**: Firebase Cloud Servers (Global distribution)
- **Purpose**: Application data storage
- **Structure**:
```
users/
  └── {userId}/
      ├── drafts/
      │   └── compliance_form (auto-saved form data)
      │       ├── jurisdiction: Object
      │       ├── propertyDetails: Object
      │       ├── location: { lat, lng, address }
      │       ├── documents: Array
      │       ├── updatedAt: Timestamp
      │       └── status: "in_progress" | "submitted"
      │
      └── applications/
          └── APP-{timestamp}-{random}/
              ├── applicationId: String
              ├── allFormData: Object
              ├── submittedAt: Timestamp
              ├── status: "pending_review" | "approved" | "rejected"
              └── department: "DTCP_TamilNadu"
```

### 3. **File Storage** (Firebase Cloud Storage)
- **Location**: Google Cloud Storage Buckets
- **Purpose**: Document uploads
- **Structure**:
```
users/
  └── {userId}/
      ├── patta_1234567890_document.pdf
      ├── fmb_sketch_1234567891.jpg
      ├── blueprint_1234567892.pdf
      └── compliance_report_APP-xxx.pdf
```

## How to View Your Data

### Option 1: Firebase Console (Recommended)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **regcat-f0154**
3. Navigate to:
   - **Authentication** → See registered users
   - **Firestore Database** → See collections and documents
   - **Storage** → See uploaded files

### Option 2: Programmatically in the App
The app includes these database functions in `src/services/db.js`:
- `saveFormDraft()` - Auto-saves every 30 seconds
- `loadFormDraft()` - Restores on page reload
- `uploadDocument()` - Uploads files to cloud storage
- `submitApplication()` - Creates permanent application record
- `getApplicationStatus()` - Retrieves application status

## Security Rules (Recommended Setup)

Add these rules in Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Add these rules in Firebase Console → Storage → Rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Data Flow Diagram

```
User Input → React State → Firestore Draft (Auto-save)
                ↓
        Form Submission
                ↓
   Document Upload → Cloud Storage
                ↓
   Application Record → Firestore
                ↓
   PDF Generation → jsPDF (Client-side)
                ↓
   Report Download / Email
```

## Offline Support
- ✅ Firestore has built-in offline persistence
- ✅ LocalStorage fallback for drafts
- ✅ Users can continue working without internet
- ✅ Syncs automatically when connection restored

## Scalability
- Firestore auto-scales to millions of users
- Global replication for low latency
- Pay-as-you-go pricing (free tier generous)
- No server maintenance required
