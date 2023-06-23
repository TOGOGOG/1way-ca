import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBic4ELbZGIaTHyktglF2HtmYHcEpeHtco",
  authDomain: "wayca-67487.firebaseapp.com",
  databaseURL: "https://wayca-67487-default-rtdb.firebaseio.com",
  projectId: "wayca-67487",
  storageBucket: "wayca-67487.appspot.com",
  messagingSenderId: "1051756802763",
  appId: "1:1051756802763:web:054e94e8da805d2d2c214e",
  measurementId: "G-T11R0YFYMB"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
