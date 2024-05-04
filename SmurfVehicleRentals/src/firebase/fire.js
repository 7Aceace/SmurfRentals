import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyBDZfp7lTqBFYmExQ7xoiH_3W99AedHaWc",
    authDomain: "smurf-vehicle-rentals.firebaseapp.com",
    projectId: "smurf-vehicle-rentals",
    storageBucket: "smurf-vehicle-rentals.appspot.com",
    messagingSenderId: "1064967720727",
    appId: "1:1064967720727:web:36992987fc52c5369c3152",
    measurementId: "G-Q7WG2RHQHF"
  

}


initializeApp (firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();