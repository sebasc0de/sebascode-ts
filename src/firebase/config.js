import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuD_3BR_jJtF-yWEFlPSlbYEwBC6k-3U8",
  authDomain: "sebas-code.firebaseapp.com",
  projectId: "sebas-code",
  storageBucket: "sebas-code.appspot.com",
  messagingSenderId: "400658752323",
  appId: "1:400658752323:web:a633050f43ac3f17c785f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
