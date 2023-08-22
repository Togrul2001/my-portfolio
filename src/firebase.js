
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

const firebaseConfig = {
  apiKey: "AIzaSyDo91NwkQx_2wYZZHxQKn3RDrjfan9d6bo",
  authDomain: "my-portfolio-2555a.firebaseapp.com",
  projectId: "my-portfolio-2555a",
  storageBucket: "my-portfolio-2555a.appspot.com",
  messagingSenderId: "459039667742",
  appId: "1:459039667742:web:4db06c981127ee672c600f",
  measurementId: "G-RBC4ZVZ44V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);