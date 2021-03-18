import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRhXle57XAiqSn0Fy0CcVvnoj_8vdLqig",
  authDomain: "netflix-clone-42440.firebaseapp.com",
  projectId: "netflix-clone-42440",
  storageBucket: "netflix-clone-42440.appspot.com",
  messagingSenderId: "658691725543",
  appId: "1:658691725543:web:ba85f9c680b6cd843aaa42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
