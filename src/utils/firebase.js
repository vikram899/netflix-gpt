// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb9ekjsV-s88RTFE4GIR0l-o5B5FEr6BA",
  authDomain: "netflix-gpt-80979.firebaseapp.com",
  projectId: "netflix-gpt-80979",
  storageBucket: "netflix-gpt-80979.appspot.com",
  messagingSenderId: "246315952649",
  appId: "1:246315952649:web:1d913f40047bcefa50a6d8",
  measurementId: "G-4JHYD89HZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
