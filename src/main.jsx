import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKGJHfSmvLyUMN0Je9WSzxlslAaImT450",
  authDomain: "proyecto-final-velazquez.firebaseapp.com",
  projectId: "proyecto-final-velazquez",
  storageBucket: "proyecto-final-velazquez.appspot.com",
  messagingSenderId: "485967217458",
  appId: "1:485967217458:web:c4536eb32590d09d550d2b",
  measurementId: "G-4YHP8TKJY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
