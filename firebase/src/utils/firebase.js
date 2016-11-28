import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDyfkIx7m9ydO_LpDWrfLb2eJ2yzcfBemI",
  authDomain: "todo-list-5ff95.firebaseapp.com",
  databaseURL: "https://todo-list-5ff95.firebaseio.com",
  storageBucket: "todo-list-5ff95.appspot.com",
  messagingSenderId: "534660107758"
};

export default firebase.initializeApp(config);
