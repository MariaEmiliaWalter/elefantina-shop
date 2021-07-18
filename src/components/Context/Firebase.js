import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBodMHkxyucxfm-fJCfeo5sXsq12M8L-ug",
    authDomain: "elefantina-ecommerce.firebaseapp.com",
    projectId: "elefantina-ecommerce",
    storageBucket: "elefantina-ecommerce.appspot.com",
    messagingSenderId: "216908033200",
    appId: "1:216908033200:web:baa46c9ce4fbd3cd661f75",
    measurementId: "G-08HQFS39B6"
  };


// Initialize Firebase
//firebase.analytics();

//Save and export 
const Firebase = firebase.initializeApp(firebaseConfig);

export const db = Firebase.firestore();