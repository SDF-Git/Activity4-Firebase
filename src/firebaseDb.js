import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

//REPLACE THE CODE BELOW WITH YOUR CONFIG FROM FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAwGQUC9qDKQt5Ig0ceemXznP3iTQrmVqc",
    authDomain: "subscriptions-5038a.firebaseapp.com",
    projectId: "subscriptions-5038a",
    storageBucket: "subscriptions-5038a.firebasestorage.app",
    messagingSenderId: "908247419969",
    appId: "1:908247419969:web:ae101d8f43b8a61f644ac0"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
