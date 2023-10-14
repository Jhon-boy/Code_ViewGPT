import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBr9J3Ppofwa9SRkRK9fssCFRGycNiGdtg",
  authDomain: "code-view-c7fc3.firebaseapp.com",
  projectId: "code-view-c7fc3",
  storageBucket: "code-view-c7fc3.appspot.com",
  messagingSenderId: "225905013763",
  appId: "1:225905013763:web:46dc54c4d116c3a0130a36"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
