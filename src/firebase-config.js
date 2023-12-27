import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // TO BE ADDED
  apiKey: "AIzaSyBVMh6DJ0NZOBAQxNcCoxNsXCIenbTXhjs",
  authDomain: "reading-44791.firebaseapp.com",
  projectId: "reading-44791",
  storageBucket: "reading-44791.appspot.com",
  messagingSenderId: "154012655933",
  appId: "1:154012655933:web:a78a5855d73010a9b92554",
  measurementId: "G-P9LR3CRHLC"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth,db };
