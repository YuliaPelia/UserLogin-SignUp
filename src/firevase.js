// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const analytics = getAnalytics(app);

function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
function logOut() {
  return signOut(auth);
}
function googleSignIn() {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    console.log("Auth", currentuser);
    setUser(currentuser);
  });

  return () => {
    unsubscribe();
  };
}, []);