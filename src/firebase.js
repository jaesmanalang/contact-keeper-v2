import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC9fsRaLlzJ13cKMVoHjTmF0rac0gEm3Io',
  authDomain: 'contact-keeper-2def8.firebaseapp.com',
  databaseURL: 'https://contact-keeper-2def8.firebaseio.com',
  projectId: 'contact-keeper-2def8',
  storageBucket: 'contact-keeper-2def8.appspot.com',
  messagingSenderId: '782981772517',
  appId: '1:782981772517:web:cd37db24cdea58b766d00c',
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

export default firebase;
