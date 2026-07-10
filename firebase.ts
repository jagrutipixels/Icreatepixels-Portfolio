import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const getFirebaseConfig = () => ({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
});

export const getFirebaseApp = () => {
  if (!getApps().length) {
    const config = getFirebaseConfig();
    if (!config.apiKey) {
      console.warn("Firebase configuration is missing! Please add VITE_FIREBASE_API_KEY to your environment variables.");
      // Return a dummy object or let it initialize with empty to avoid immediate crash,
      // but it will fail when used. It's better to return null or handle it.
      // We will just try to initialize and if it fails, catch it.
    }
    return initializeApp(config);
  }
  return getApp();
};

export let app: any;
export let db: any;
export let auth: any;

try {
  app = getFirebaseApp();
  db = getFirestore(app, import.meta.env.VITE_FIREBASE_DATABASE_ID || undefined);
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase initialization failed:", error);
}
