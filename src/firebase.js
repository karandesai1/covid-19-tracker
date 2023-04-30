// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4qi1kOqmoa1bBaeZPrmA5IOkHvW0GcQ",
  authDomain: "covid-19-tracker-c343d.firebaseapp.com",
  projectId: "covid-19-tracker-c343d",
  storageBucket: "covid-19-tracker-c343d.appspot.com",
  messagingSenderId: "989820437387",
  appId: "1:989820437387:web:22d18d7d09f4946055258e",
  measurementId: "G-BNGECJHQFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);