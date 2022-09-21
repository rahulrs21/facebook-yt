// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'firebase/storage';
// REMEMBER TO IMPORT THIS CODE  (Otherwise hot reload will give u error!!)

import {getStorage} from 'firebase/storage'


// const firebaseConfig = {
//     apiKey: "AIzaSyA-p1Y6lg92a-H7q1DqAD_7DTndl1dY_sM",
//     authDomain: "facebook-yt-bf946.firebaseapp.com",
//     projectId: "facebook-yt-bf946",
//     storageBucket: "facebook-yt-bf946.appspot.com",
//     messagingSenderId: "927892771437",
//     appId: "1:927892771437:web:eed490c60e1f85b2be6564"
// };


const firebaseConfig = {
    apiKey: "AIzaSyAcZwsB5E4OhGY913DRnkU7rGcgQFH5_DM",
    authDomain: "facebook-clone-f73de.firebaseapp.com",
    projectId: "facebook-clone-f73de",
    storageBucket: "facebook-clone-f73de.appspot.com",
    messagingSenderId: "841562847275",
    appId: "1:841562847275:web:08243cd0952ca13f74926e"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

// const storage = firebase.storage();
const storage = getStorage(app);


export {db, storage};