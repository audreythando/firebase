import { initializeApp } from "firebase/app";
import{getDataBase} from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCio2QtMMKWOEO1dog4zCel1sy2Z6IlZ4Q",
  authDomain: "fir-eef7a.firebaseapp.com",
  projectId: "fir-eef7a",
  storageBucket: "fir-eef7a.appspot.com",
  messagingSenderId: "90173679095",
  appId: "1:90173679095:web:caaf3bc538be1892767af2"
};

const app = initializeApp(firebaseConfig);
export const db = getDataBase(app)