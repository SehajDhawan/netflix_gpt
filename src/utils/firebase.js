// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW0j_UpVnZJtO3ZG1nr12X-96PiBV8Y_I",
  authDomain: "netflixgpt-bcda9.firebaseapp.com",
  projectId: "netflixgpt-bcda9",
  storageBucket: "netflixgpt-bcda9.appspot.com",
  messagingSenderId: "152726949997",
  appId: "1:152726949997:web:11ebfb8deb31e126a2ef64",
  measurementId: "G-FW0YBJ1YTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

