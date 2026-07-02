import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0OekPtPd8NJCW3obSUf0gN2Gm2h3Ox9E",
  authDomain: "devcareerhub-2f61e.firebaseapp.com",
  projectId: "devcareerhub-2f61e",
  storageBucket: "devcareerhub-2f61e.firebasestorage.app",
  messagingSenderId: "619856572202",
  appId: "1:619856572202:web:0d5aa5c7da62044bee3853",
  measurementId: "G-9RSSE8BSF1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();