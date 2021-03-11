import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDQBaMHuYicr-VPig0DVK_Dsxq8LjJRhZw",
    authDomain: "net-vue-site.firebaseapp.com",
    projectId: "net-vue-site",
    storageBucket: "net-vue-site.appspot.com",
    messagingSenderId: "686667510535",
    appId: "1:686667510535:web:25ce5a1b001b6d45e9cba2"
  };

  firebase.initializeApp(firebaseConfig)
  const projectFireStore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  const projectAuth = firebase.auth()

  export {projectFireStore,timestamp,projectAuth}

