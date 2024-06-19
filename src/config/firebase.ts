// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Mf2L5hkfhX5eWCbut3HdAxA6pJKGmhs",
  authDomain: "quick-pointer-414903.firebaseapp.com",
  projectId: "quick-pointer-414903",
  storageBucket: "quick-pointer-414903.appspot.com",
  messagingSenderId: "632299618118",
  appId: "1:632299618118:web:aa5d056b364cbada296f47",
  measurementId: "G-W0J731VBVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };