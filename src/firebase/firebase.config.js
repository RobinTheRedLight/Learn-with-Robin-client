// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCoWJrHLNP8U_YlWRZVSKhoUt5ldfrZ34",
    authDomain: "learnwithrobin-e9bb2.firebaseapp.com",
    projectId: "learnwithrobin-e9bb2",
    storageBucket: "learnwithrobin-e9bb2.appspot.com",
    messagingSenderId: "1086101485887",
    appId: "1:1086101485887:web:cf9c366ca703d337973b8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;