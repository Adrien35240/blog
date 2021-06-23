
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyCqhfVxp3ICVhe7xm9K5PlnMKkJ6vfVpf8",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
const storage = firebase.storage();
export const auth = app.auth();
export { storage, app as default };
