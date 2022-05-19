import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDudfmX94ibb9xX_Ru7-K6KEC0VFL7vr9Y",
    authDomain: "handidea-d2c12.firebaseapp.com",
    projectId: "handidea-d2c12",
    storageBucket: "handidea-d2c12.appspot.com",
    messagingSenderId: "635234015024",
    appId: "1:635234015024:web:0e1ad59580778853015af5",
    measurementId: "G-47D0GHR30X"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
