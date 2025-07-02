// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCPLd_r-Wjanq_L17CSclXgzKvti0bPCg",
  authDomain: "ecommerce-demo-fedb7.firebaseapp.com",
  projectId: "ecommerce-demo-fedb7",
  storageBucket: "ecommerce-demo-fedb7.firebasestorage.app",
  messagingSenderId: "834758241405",
  appId: "1:834758241405:web:3c67f17b0ad6df9f7ad514",
  measurementId: "G-JMM62ZSEMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);