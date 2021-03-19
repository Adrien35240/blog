import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
const app = firebase.initializeApp({
  //apiKey: process.env.REACT_APP_API_KEY,
  apiKey: "AIzaSyA5L77NEcwnqKrAvxbEzQmQOK8gE_T1iJM",
  authDomain: "mon-blog-e0a33.firebaseapp.com",
  projectId: "mon-blog-e0a33",
  storageBucket: "mon-blog-e0a33.appspot.com",
  messagingSenderId: "936753106550",
  appId: "1:936753106550:web:dde06226b58f33278dd957",
});
// export const storage = firebase.storage();
const storage = firebase.storage();
export const auth = app.auth()
// export default app
export { storage,app as default };