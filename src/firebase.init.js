// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyDUbsXd8iSWvhG187svWY5h6R077149P-g",
  authDomain: "warehouse-management-1d438.firebaseapp.com",
  projectId: "warehouse-management-1d438",
  storageBucket: "warehouse-management-1d438.appspot.com",
  messagingSenderId: "930795049971",
  appId: "1:930795049971:web:c6f8de0f003637ea5ab886"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
