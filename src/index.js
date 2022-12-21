import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6rWly6OIa-3ZiucR2IgXzgmQLmbz6YHs",
  authDomain: "coderhouse-43625.firebaseapp.com",
  projectId: "coderhouse-43625",
  storageBucket: "coderhouse-43625.appspot.com",
  messagingSenderId: "729864038470",
  appId: "1:729864038470:web:ef259137f57f2e428f0247"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);