import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA_IitIce3fEX8fposMFGJe5Pr8BmQU-a8",
  authDomain: "tadafluxx.firebaseapp.com",
  projectId: "tadafluxx",
  storageBucket: "tadafluxx.appspot.com",
  messagingSenderId: "449555458356",
  appId: "1:449555458356:web:80bcf1d1b5d7f1aef9dd61"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();