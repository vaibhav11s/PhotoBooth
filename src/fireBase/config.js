import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzoGynC7ZeFHO1M0w52GIaxXBUHvq_mKQ",
  authDomain: "photobooth-gram.firebaseapp.com",
  projectId: "photobooth-gram",
  storageBucket: "photobooth-gram.appspot.com",
  messagingSenderId: "348772991068",
  appId: "1:348772991068:web:44f7ee6b03b9000eabe699"
};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };