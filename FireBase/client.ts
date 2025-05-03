// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcwpynL-uGhFT8ORRNTA6XhSaKF0dTDh4",
    authDomain: "preptalk-ai-d139d.firebaseapp.com",
    projectId: "preptalk-ai-d139d",
    storageBucket: "preptalk-ai-d139d.firebasestorage.app",
    messagingSenderId: "321760975939",
    appId: "1:321760975939:web:d261c9bfa7e86c008448f6",
    measurementId: "G-CXWNBJPN19"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
