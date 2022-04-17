// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWdgzU8cI2wlIhY8a2K_SC7JGUKtlLRDo",
    authDomain: "fcg-academy.firebaseapp.com",
    projectId: "fcg-academy",
    storageBucket: "fcg-academy.appspot.com",
    messagingSenderId: "1051328200737",
    appId: "1:1051328200737:web:935407859fd71d7c84a360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;