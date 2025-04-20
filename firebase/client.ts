import { initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8o_KWMgcpbgL4dsy9j5v3_Eab-v7xAkE",
  authDomain: "interviewprep-fe039.firebaseapp.com",
  projectId: "interviewprep-fe039",
  storageBucket: "interviewprep-fe039.firebasestorage.app",
  messagingSenderId: "369857279356",
  appId: "1:369857279356:web:d6c7ae2a0ce20cb0cee0f9",
  measurementId: "G-G55MDE2CRM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);