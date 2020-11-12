import * as firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBZ4J9aWsXO579Vjn8iogWOBiDbcOllJ0Y",
    authDomain: "project3-6ea05.firebaseapp.com",
    databaseURL: "https://project3-6ea05.firebaseio.com",
    projectId: "project3-6ea05",
    storageBucket: "project3-6ea05.appspot.com",
    messagingSenderId: "19010596582",
    appId: "1:19010596582:web:12b3d42feccb31109fd527",
    measurementId: "G-ZZMK4YE2GV"
  };
  // Initialize Firebase
 var fire = firebase.initializeApp(firebaseConfig);
export {
  fire,firebaseConfig
  
} 