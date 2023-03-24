// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7bXkSqoK5ADbbsLW-K33b-ekOLSpowJM",
  authDomain: "crud-fb-app.firebaseapp.com",
  projectId: "crud-fb-app",
  storageBucket: "crud-fb-app.appspot.com",
  messagingSenderId: "674508994274",
  appId: "1:674508994274:web:aae1ab137b9fa5755f50bb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();