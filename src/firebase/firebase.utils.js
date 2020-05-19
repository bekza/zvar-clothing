import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCopRBE6PaYm5ncXwFWJvMlW-WAvUMhd8A",
    authDomain: "zvar-clothing-db.firebaseapp.com",
    databaseURL: "https://zvar-clothing-db.firebaseio.com",
    projectId: "zvar-clothing-db",
    storageBucket: "zvar-clothing-db.appspot.com",
    messagingSenderId: "154825367254",
    appId: "1:154825367254:web:81dc07428c439a8d8eb377",
    measurementId: "G-4GEK08MRDN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;