// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZvVcy3TKh8TpXTvBmqqHjF5ELqOx3TVM",
  authDomain: "ema-john-f4745.firebaseapp.com",
  projectId: "ema-john-f4745",
  storageBucket: "ema-john-f4745.appspot.com",
  messagingSenderId: "16575328576",
  appId: "1:16575328576:web:64ab1974a2c527eb1d0aa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;