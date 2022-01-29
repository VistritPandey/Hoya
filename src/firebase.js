import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjxgX24RNaKs9aoaGl4QU32yMk_Bby9h0",
    authDomain: "spacieschat.firebaseapp.com",
    projectId: "spacieschat",
    storageBucket: "spacieschat.appspot.com",
    messagingSenderId: "621788177274",
    appId: "1:621788177274:web:585eb06d8cc338eba32cc3",
    measurementId: "G-Y9ZQ3YFLJ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;
