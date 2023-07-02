import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig:FirebaseOptions = {
    apiKey: "AIzaSyCa1UzcWZkc7Zjgy41hxvhMnRGYTabZMOw",
    authDomain: "dvidlis.firebaseapp.com",
    projectId: "dvidlis",
    storageBucket: "dvidlis.appspot.com",
    messagingSenderId: "374695246050",
    appId: "1:374695246050:web:5c2407f0e99061188b46bb",
    measurementId: "G-F9N4HJ3BC4"
  };

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const fbFunctions = getFunctions(firebaseApp, "europe-west3");