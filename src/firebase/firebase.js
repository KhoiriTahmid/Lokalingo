// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkeHGw9_e_sBMfnEkuSt8NLkMZlUduuZY",
  authDomain: "kokkasd-ecc0c.firebaseapp.com",
  projectId: "kokkasd-ecc0c",
  storageBucket: "kokkasd-ecc0c.appspot.com",
  messagingSenderId: "204251058228",
  appId: "1:204251058228:web:21bef2f58e9782b1903a61",
  measurementId: "G-BKST0CSTCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);