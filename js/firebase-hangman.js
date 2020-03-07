  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyAwM5plLa26tHLdsWzA_HFZUuVzZPgDHPI",
    authDomain: "hangmanvicly.firebaseapp.com",
    databaseURL: "https://hangmanvicly.firebaseio.com",
    projectId: "hangmanvicly",
    storageBucket: "hangmanvicly.appspot.com",
    messagingSenderId: "373090147720",
    appId: "1:373090147720:web:fd4504a9fcdedd4efb6e3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();