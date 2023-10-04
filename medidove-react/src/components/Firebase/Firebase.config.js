import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDj7IHNgEflYB4Cfi6QOrBY68limEfOqIA",
    authDomain: "fire-crud-b4b7d.firebaseapp.com",
    projectId: "fire-crud-b4b7d",
    storageBucket: "fire-crud-b4b7d.appspot.com",
    messagingSenderId: "1006424836130",
    appId: "1:1006424836130:web:d5e0fbe3371b148f79227b",
    measurementId: "G-G7BQ3VWRFW"
  };
  // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    
    export const db = getFirestore(app);
    export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};