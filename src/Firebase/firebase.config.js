// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsIQ_DruayR_FPQgJR2zP0woFQsw9J5BQ",
  authDomain: "residential-website-76cdb.firebaseapp.com",
  projectId: "residential-website-76cdb",
  storageBucket: "residential-website-76cdb.appspot.com",
  messagingSenderId: "31615375871",
  appId: "1:31615375871:web:07aa4727b520adc36a2fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;