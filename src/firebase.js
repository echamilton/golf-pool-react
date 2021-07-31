import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

export const config = {
  apiKey: "AIzaSyABOO_Xt0f-Y52mib9D79Kog95osDxuY50",
  authDomain: "legbreaker-app.firebaseapp.com",
  databaseURL: "https://legbreaker-app.firebaseio.com",
  projectId: "legbreaker-app",
  storageBucket: "legbreaker-app.appspot.com",
  messagingSenderId: "727660903518",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const fireDB = firebase.database();
