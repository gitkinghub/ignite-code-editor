// import the required dependancies from firebase
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// this is the owner's configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
  appId: process.env.REACT_APP_APPID
};

// create the app. if the length is greater than 0, get it, else, initialize it
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// get the auth information
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
