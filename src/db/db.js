// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_keg7nIAfloRlyOx0bwiyGS3HAMHtIuk",
  authDomain: "huellitas-petshop.firebaseapp.com",
  projectId: "huellitas-petshop",
  storageBucket: "huellitas-petshop.appspot.com",
  messagingSenderId: "171872107915",
  appId: "1:171872107915:web:41a67dea57324920e3838e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//Esta variable llamada db vamos a tener que usarla cada vez que queramos acceder a nuestra base de datos
const db = getFirestore()

export default db
