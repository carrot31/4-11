// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDSxQ0vsUYW2ny7rcTXrow1EWg2rH-Mg",
  authDomain: "sparta-react-basic-400bc.firebaseapp.com",
  projectId: "sparta-react-basic-400bc",
  storageBucket: "sparta-react-basic-400bc.appspot.com",
  messagingSenderId: "1058550918773",
  appId: "1:1058550918773:web:71030e6a835e520961923c",
  measurementId: "G-FG718GY2GR"
};

initializeApp(firebaseConfig); //변수 없이 해주는 이유; 파일을 호출하는 순간 기초설정 해줘라
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();

