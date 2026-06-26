import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyBU8beGT42jmQ-skIUGi5g1CDtan5H0zRM",
  authDomain: "kajaki-48773.firebaseapp.com",
  projectId: "kajaki-48773",
  storageBucket: "kajaki-48773.appspot.com",
  messagingSenderId: "576616273767",
  appId: "1:576616273767:web:c065bf81a0a251082401c2",
  measurementId: "G-CR0TWM2KRV"


  }
);
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()



export {db, auth, storage}

export default firebaseApp;