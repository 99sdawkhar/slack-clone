import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB1_pCzTJDIZwnas6Lr8XxXkRXhh1272tk",
  authDomain: "slack-clone-cef37.firebaseapp.com",
  projectId: "slack-clone-cef37",
  storageBucket: "slack-clone-cef37.appspot.com",
  messagingSenderId: "874499320386",
  appId: "1:874499320386:web:95966c3453824d51665bdb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;