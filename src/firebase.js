// import firebase from 'firebase';
import firebase from "firebase/app";
import  'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = require('./firebaseConfig.json');


export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
export const firestoreConnection = firebase.firestore();
//export default firestoreConnection;
export const auth = firebase.firebaseAuth
