// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4af3d.firebaseapp.com",
  projectId: "reactchat-4af3d",
  storageBucket: "reactchat-4af3d.firebasestorage.app",
  messagingSenderId: "331708003250",
  appId: "1:331708003250:web:3505d242ee87721c32aaab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth= getAuth()
export const db= getFirestore()