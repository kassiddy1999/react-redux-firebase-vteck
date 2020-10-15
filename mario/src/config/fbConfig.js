import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAV2Otp0wT2EMwgEEAruStiViBvqDQKoOA",
    authDomain: "vtech-corporations-project.firebaseapp.com",
    databaseURL: "https://vtech-corporations-project.firebaseio.com",
    projectId: "vtech-corporations-project",
    storageBucket: "vtech-corporations-project.appspot.com",
    messagingSenderId: "372950309922",
    appId: "1:372950309922:web:20d7608458e9ae4d1e7e7b"
  };

  firebase.initializeApp(firebaseConfig)
  // initialize firestore
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase