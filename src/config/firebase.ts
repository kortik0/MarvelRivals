import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAd2b3owDq5i-ln-Hy0hxfp3sMDYovbk7A",
  authDomain: "marvel-rivals-5f471.firebaseapp.com",
  databaseURL: "https://marvel-rivals-5f471-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "marvel-rivals-5f471",
  storageBucket: "marvel-rivals-5f471.firebasestorage.app",
  messagingSenderId: "843645486210",
  appId: "1:843645486210:web:9ebfd97429a7bfb4ea209b",
  measurementId: "G-4QSVMSFMZV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);