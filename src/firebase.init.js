// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD-0PREuph7kNxmsG4TJjIU-s-tKF8yr9k",
//   authDomain: "doctors-portal-barsha.firebaseapp.com",
//   projectId: "doctors-portal-barsha",
//   storageBucket: "doctors-portal-barsha.appspot.com",
//   messagingSenderId: "289137843418",
//   appId: "1:289137843418:web:debd8a88dcb05c1dee59e3"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;