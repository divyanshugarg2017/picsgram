import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDN56lAiUenp0rS3dCSTpDrq0G39NNaBjU",
    authDomain: "picsgram-f16e9.firebaseapp.com",
    projectId: "picsgram-f16e9",
    storageBucket: "picsgram-f16e9.appspot.com",
    messagingSenderId: "901779579768",
    appId: "1:901779579768:web:627413560061abfe711e8d"
  };
  firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore ,timestamp};