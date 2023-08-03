
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB0wJDtPauTHiwQ1BD4LjSlLrSvgAlgsbo",
  authDomain: "eccommerce-jg.firebaseapp.com",
  projectId: "eccommerce-jg",
  storageBucket: "eccommerce-jg.appspot.com",
  messagingSenderId: "734288946864",
  appId: "1:734288946864:web:934b40e696477679fc3d75"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)