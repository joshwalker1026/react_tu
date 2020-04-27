require("firebase/firestore");
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "<API Key>",
  authDomain: "reactpost-ddd3e.firebaseapp.com",
  databaseURL: "https://reactpost-ddd3e.firebaseio.com",
  projectId: "reactpost-ddd3e",
  storageBucket: "reactpost-ddd3e.appspot.com",
  messagingSenderId: "780678615566",
  appId: "<appId>"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();

export const auth = firebase.auth()
export const firestore = firebase.firestore
export default db;
