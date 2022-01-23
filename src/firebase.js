// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVbzHzdKKAwpXBRqhTTsOrRglYECBD7q8",
  authDomain: "slack-clone-dae42.firebaseapp.com",
  projectId: "slack-clone-dae42",
  storageBucket: "slack-clone-dae42.appspot.com",
  messagingSenderId: "572899875742",
  appId: "1:572899875742:web:9545c8544d16949f83148f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { provider };

export default db;