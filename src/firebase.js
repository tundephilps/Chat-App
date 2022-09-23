import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDnMFGHAs50weJmeCiyhz13Tdv9eralNU",
  authDomain: "chat-app-f02d0.firebaseapp.com",
  projectId: "chat-app-f02d0",
  storageBucket: "chat-app-f02d0.appspot.com",
  messagingSenderId: "909047589197",
  appId: "1:909047589197:web:90209e3c1fd97b6962af04",
  measurementId: "G-2QMH9VM3M8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
