import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  signInWithPhoneNumber, 
  RecaptchaVerifier, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC8vmruhgNag1eJC81V5AancIptzqzXxCE",
  authDomain: "regcat-f0154.firebaseapp.com",
  projectId: "regcat-f0154",
  storageBucket: "regcat-f0154.firebasestorage.app",
  messagingSenderId: "790323948931",
  appId: "1:790323948931:web:50602d21fffe63fb115ab6",
  measurementId: "G-JPZ19YDYGK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Auth Error:", error);
    throw error;
  }
};

let recaptchaVerifier = null;
export const setupRecaptcha = (containerId) => {
  if (!recaptchaVerifier) {
    recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      'size': 'invisible',
      'callback': (response) => {
        console.log('reCAPTCHA solved:', response);
      }
    });
  }
  return recaptchaVerifier;
};

export const sendOTP = async (phoneNumber, recaptchaContainerId) => {
  try {
    setupRecaptcha(recaptchaContainerId);
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
    return confirmationResult;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const verifyOTP = async (confirmationResult, otp) => {
  try {
    const result = await confirmationResult.confirm(otp);
    return result.user;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const saveFormDraft = async (userId, formData) => {
  try {
    await setDoc(doc(db, "formDrafts", userId), {
      ...formData,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error("Error saving draft:", error);
    throw error;
  }
};

export const loadFormDraft = async (userId) => {
  try {
    const docSnap = await getDoc(doc(db, "formDrafts", userId));
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error loading draft:", error);
    throw error;
  }
};

export const uploadDocument = async (file, userId, fieldName) => {
  try {
    const storageRef = ref(storage, `documents/${userId}/${fieldName}_${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading document:", error);
    throw error;
  }
};

export const getCurrentUser = () => auth.currentUser;

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export { auth, db, storage };
export default app;
