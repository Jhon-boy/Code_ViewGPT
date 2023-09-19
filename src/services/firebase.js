import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

//Inicializamos la App 
const firebaseConfig = {
    apiKey: "AIzaSyAhVuiCuEs2D_H0liaponv5oYsSOi_r1ns",
    authDomain: "code-view-873ec.firebaseapp.com",
    projectId: "code-view-873ec",
    storageBucket: "code-view-873ec.appspot.com",
    messagingSenderId: "506026330149",
    appId: "1:506026330149:web:b509af70aaa1f63dc757cc",
    measurementId: "G-PZKXT862Z6"
  };

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export default app;
