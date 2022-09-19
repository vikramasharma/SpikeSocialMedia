import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID
} from 'react-native-dotenv';

//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

export const firebaseConfig = {
  apiKey: 'AIzaSyDqEbShfUBDrmufK_xhcK4TKEATwFKFbOY',
  authDomain: 'spike-f246f.firebaseapp.com',
  databaseURL: 'https://spike-f246f-default-rtdb.firebaseio.com',
  projectId: 'spike-f246f',
  storageBucket: 'spike-f246f.appspot.com',
  messagingSenderId: '771873095205',
  appId: '1:771873095205:web:3d317dfb79c7a9f2f589cc',
  measurementId: 'G-2NCS6T2QD6',
};

export const initFirebase = initializeApp(firebaseConfig);
