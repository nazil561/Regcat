import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  serverTimestamp 
} from "firebase/firestore";
import { 
  getStorage, 
  ref as storageRef, 
  uploadBytes, 
  getDownloadURL 
} from "firebase/storage";
import { app } from "../firebase";

// Initialize Firebase Services
const db = getFirestore(app);
const storage = getStorage(app);

/**
 * SERVICE: Save Form Draft to Firestore
 * Automatically saves user progress so they don't lose data on refresh
 */
export const saveFormDraft = async (userId, formData) => {
  try {
    const draftRef = doc(db, "users", userId, "drafts", "compliance_form");
    await setDoc(draftRef, {
      ...formData,
      updatedAt: serverTimestamp(),
      status: "in_progress"
    }, { merge: true });
    console.log("✅ Draft saved to Cloud Firestore");
    return true;
  } catch (error) {
    console.error("❌ Error saving draft:", error);
    // Fallback to local storage if cloud fails
    localStorage.setItem(`draft_${userId}`, JSON.stringify(formData));
    return false;
  }
};

/**
 * SERVICE: Load Form Draft from Firestore
 */
export const loadFormDraft = async (userId) => {
  try {
    const draftRef = doc(db, "users", userId, "drafts", "compliance_form");
    const docSnap = await getDoc(draftRef);
    
    if (docSnap.exists()) {
      console.log("✅ Draft loaded from Cloud Firestore");
      return docSnap.data();
    } else {
      // Fallback to local storage
      const localData = localStorage.getItem(`draft_${userId}`);
      return localData ? JSON.parse(localData) : null;
    }
  } catch (error) {
    console.error("❌ Error loading draft:", error);
    return JSON.parse(localStorage.getItem(`draft_${userId}`) || "null");
  }
};

/**
 * SERVICE: Upload Document to Firebase Storage
 * Handles Patta, FMB Sketch, and Blueprint uploads
 */
export const uploadDocument = async (userId, file, category) => {
  if (!file) return null;
  
  try {
    const fileRef = storageRef(
      storage, 
      `users/${userId}/${category}_${Date.now()}_${file.name}`
    );
    
    const snapshot = await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log(`✅ File uploaded: ${category}`, downloadURL);
    return {
      url: downloadURL,
      name: file.name,
      size: file.size,
      category: category,
      uploadedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error("❌ Upload failed:", error);
    alert("File upload failed. Check console for details.");
    return null;
  }
};

/**
 * SERVICE: Submit Final Application
 * Moves data from 'drafts' to 'applications' collection
 */
export const submitApplication = async (userId, finalData) => {
  try {
    const appId = `APP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const appRef = doc(db, "users", userId, "applications", appId);
    
    await setDoc(appRef, {
      ...finalData,
      applicationId: appId,
      submittedAt: serverTimestamp(),
      status: "pending_review",
      department: "DTCP_TamilNadu"
    });

    // Clear draft after successful submission
    const draftRef = doc(db, "users", userId, "drafts", "compliance_form");
    await updateDoc(draftRef, { status: "submitted" });

    return appId;
  } catch (error) {
    console.error("❌ Submission failed:", error);
    throw error;
  }
};

/**
 * SERVICE: Get Application Status
 */
export const getApplicationStatus = async (userId, appId) => {
  try {
    const appRef = doc(db, "users", userId, "applications", appId);
    const docSnap = await getDoc(appRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("❌ Error fetching status:", error);
    return null;
  }
};

export { db, storage };
