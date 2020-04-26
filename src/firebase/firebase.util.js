import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export const config = {
  apiKey: 'AIzaSyAoVYK_eE6QCKDdB_0CwubGidWf_IEwehk',
  authDomain: 'mussey-661fa.firebaseapp.com',
  databaseURL: 'https://mussey-661fa.firebaseio.com',
  projectId: 'mussey-661fa',
  storageBucket: 'mussey-661fa.appspot.com',
  messagingSenderId: '432824556779',
  appId: '1:432824556779:web:7305526bedbf2f060332ae',
};

// Initialize Firebase
firebase.initializeApp(config);

export const storage = firebase.storage();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//configure google signin
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
