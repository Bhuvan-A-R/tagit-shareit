import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCLU-h0ou4kl1jJ6K3P4YCtLWXzUrG2EVs",
    authDomain: "tag-it-share-it.firebaseapp.com",
    projectId: "tag-it-share-it",
    storageBucket: "tag-it-share-it.firebasestorage.app",
    messagingSenderId: "419050628159",
    appId: "1:419050628159:web:2a8db172f489e39fbf448a",
    measurementId: "G-QLSHQCBNZM"
  };
  

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export const auth = getAuth(app);

export { storage, db};
