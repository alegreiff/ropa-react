import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPO4YP41n2_AWWxmT9DlsSC9e7ceEkKT0",
    authDomain: "ropa-react.firebaseapp.com",
    databaseURL: "https://ropa-react.firebaseio.com",
    projectId: "ropa-react",
    storageBucket: "ropa-react.appspot.com",
    messagingSenderId: "837051348341",
    appId: "1:837051348341:web:f6eac63882db1b68cf8f3c"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;