import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQj5wNkecdlxxmccqX7MqbEQ0r3CntjZ4",
    authDomain: "whatsapp-clone-d04f2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d04f2.firebaseio.com",
    projectId: "whatsapp-clone-d04f2",
    storageBucket: "whatsapp-clone-d04f2.appspot.com",
    messagingSenderId: "468833726640",
    appId: "1:468833726640:web:ec8d36693391e49d6d8b75",
    measurementId: "G-2YKQQM76ZG"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db;