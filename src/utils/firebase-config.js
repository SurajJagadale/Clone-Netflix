// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0CdkkH5zQ5_Cs21yM0Qh7IlMZdmHnFzo",
  authDomain: "react-netflix-clone-3dfd4.firebaseapp.com",
  projectId: "react-netflix-clone-3dfd4",
  storageBucket: "react-netflix-clone-3dfd4.appspot.com",
  messagingSenderId: "199831226531",
  appId: "1:199831226531:web:659ca0ce4ebce428521716",
  measurementId: "G-5JR3FDXR83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);