import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_9QqINv2mW0nR5P3RDy0CupE6BQ3M0Qs",
    authDomain: "library-a71ca.firebaseapp.com",
    projectId: "library-a71ca",
    storageBucket: "library-a71ca.appspot.com",
    messagingSenderId: "590812033015",
    appId: "1:590812033015:web:9c8eba6598fa16c28288f2"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };