// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgN-AJlgS8lyMuYYpqylFgC-3E8ZBbI_I",
  authDomain: "warehouse-management-4e2e7.firebaseapp.com",
  projectId: "warehouse-management-4e2e7",
  storageBucket: "warehouse-management-4e2e7.appspot.com",
  messagingSenderId: "189367196359",
  appId: "1:189367196359:web:95fa0e90015ceedf0ffce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
