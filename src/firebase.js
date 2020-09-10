import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9xYMX7AbfJlVw-ulYrqQXE6HVg5YSTjI",
  authDomain: "clone-3d53a.firebaseapp.com",
  databaseURL: "https://clone-3d53a.firebaseio.com",
  projectId: "clone-3d53a",
  storageBucket: "clone-3d53a.appspot.com",
  messagingSenderId: "415601161757",
  appId: "1:415601161757:web:400188c405009c301eb8f4",
  measurementId: "G-TD79X9P9VK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


/*
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
*/
