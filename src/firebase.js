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

const createUserProfile = async (authUser, data) => {
  if (!authUser) return;

  const userRef = db.doc(`users/${authUser.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const dateCreated = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        dateCreated,
        ...data,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export { db, auth, provider, createUserProfile };

export default firebase;
