// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBucS6jgHR9LkMLRvgp78HM7GOyPKgWbk",
  authDomain: "downdal.firebaseapp.com",
  projectId: "downdal",
  storageBucket: "downdal.appspot.com",
  messagingSenderId: "934141400683",
  appId: "1:934141400683:web:8de9d1ffe07c7930b5032e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;