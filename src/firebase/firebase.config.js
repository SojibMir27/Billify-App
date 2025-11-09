import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  // apiKey: "AIzaSyB2VP0IcJ2BlnIuIAJIypVyH0gxvWj4NnE",
  // authDomain: "billify-a52d3.firebaseapp.com",
  // projectId: "billify-a52d3",
  // storageBucket: "billify-a52d3.firebasestorage.app",
  // messagingSenderId: "845844970873",
  // appId: "1:845844970873:web:0b672f9b125efdc64703a8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
