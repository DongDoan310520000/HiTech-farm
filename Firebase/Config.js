import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

import { getFirestore } from 'firebase/firestore'; 

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDtbcO12lf9Cli8nnmIuV59xnphR1w4BLM",
    authDomain: "nature-sound-5adc2.firebaseapp.com",
    projectId: "nature-sound-5adc2",
    storageBucket: "nature-sound-5adc2.appspot.com",
    messagingSenderId: "102285824551",
    appId: "1:102285824551:web:cc201de54035a08d6bf402",
    measurementId: "G-EVVHV1QXHE"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);
  const Firestore = getFirestore(app);
  
  export { auth, database, Firestore };
  