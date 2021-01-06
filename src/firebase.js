import firebase from 'firebase';

// TODO : Need to understand all the parameters.
const firebaseConfig = {
    apiKey: "AIzaSyBDdZwe-mtgPtMYEh_0WDpxxWKELt-scGs",
    authDomain: "clone-80655.firebaseapp.com",
    databaseURL: "https://clone-80655.firebaseio.com",
    projectId: "clone-80655",
    storageBucket: "clone-80655.appspot.com",
    messagingSenderId: "47574387079",
    appId: "1:47574387079:web:89292bc925801efd09eb22",
    measurementId: "G-MRKS6ESSJQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { 
    // db, 
    auth };