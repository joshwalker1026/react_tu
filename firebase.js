require("firebase/firestore");
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "<API Key>",
    authDomain: "myslave-6d7aa.firebaseapp.com",
    databaseURL: "https://myslave-6d7aa.firebaseio.com",
    projectId: "myslave-6d7aa",
    storageBucket: "myslave-6d7aa.appspot.com",
    messagingSenderId: "604683736892",
    appId: "1:604683736892:web:2e6bcf0f673db965427039"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default db;
