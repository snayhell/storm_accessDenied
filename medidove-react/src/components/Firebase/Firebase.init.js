import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;