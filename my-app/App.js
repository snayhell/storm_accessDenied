import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from './StackNavigator';
import { createContext,useContext, useState,useEffect } from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDj7IHNgEflYB4Cfi6QOrBY68limEfOqIA",
    authDomain: "fire-crud-b4b7d.firebaseapp.com",
    projectId: "fire-crud-b4b7d",
    storageBucket: "fire-crud-b4b7d.appspot.com",
    messagingSenderId: "1006424836130",
    appId: "1:1006424836130:web:d5e0fbe3371b148f79227b",
    measurementId: "G-G7BQ3VWRFW"
  };
    export const app = initializeApp(firebaseConfig);
    
    export const db = getFirestore(app);

export const UserContext = createContext(null);

export default function App() {
  useEffect(() => {
    const db = getFirestore();
    const userDocRef = doc(db, "health-record", "wXTMtAspmNNz8dfqiMle");
    
    try {
      const getUserData = async () => {
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setUser(userDocSnapshot.data());
          console.log(userDocSnapshot.data());
        } else {
          console.error("User data not found in Firestore");
        }
      };
  
      getUserData();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);
  const[user,setUser] = useState();
  return (
    <UserContext.Provider value={{user,setUser}}>
    <StackNavigator></StackNavigator>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
