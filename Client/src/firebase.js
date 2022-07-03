import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvlOe1o-uk8hLwiq5uwlZR6oOtIpBvyog",
    authDomain: "onlyexculsives.firebaseapp.com",
    projectId: "onlyexculsives",
    storageBucket: "onlyexculsives.appspot.com",
    messagingSenderId: "266353603366",
    appId: "1:266353603366:web:bc28060138a1390b8847e7"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();