// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYAmv20x-StWrV_uqilEsuZknFJRu6PGQ",
  authDomain: "coffee-shop-53e1b.firebaseapp.com",
  projectId: "coffee-shop-53e1b",
  storageBucket: "coffee-shop-53e1b.appspot.com",
  messagingSenderId: "504465796885",
  appId: "1:504465796885:web:18fac313f523c26e06031c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;