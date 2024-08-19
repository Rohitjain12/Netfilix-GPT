// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_PT_x181XSaDFG8Qlb05X8JarGsr1Uko",
  authDomain: "netflix-gpt-64118.firebaseapp.com",
  projectId: "netflix-gpt-64118",
  storageBucket: "netflix-gpt-64118.appspot.com",
  messagingSenderId: "1024239803060",
  appId: "1:1024239803060:web:705470ded93084f1e295e1",
  measurementId: "G-M36ZG4MLSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();