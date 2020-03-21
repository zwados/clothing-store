import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDftFgr6WGiZoiUuWKAvAyMQswS6_45Pms",
        authDomain: "clothing-store-db-798fb.firebaseapp.com",
        databaseURL: "https://clothing-store-db-798fb.firebaseio.com",
        projectId: "clothing-store-db-798fb",
        storageBucket: "clothing-store-db-798fb.appspot.com",
        messagingSenderId: "132906317534",
        appId: "1:132906317534:web:239ce6478ff02f79f9b44f",
        measurementId: "G-432ZD2V52B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;