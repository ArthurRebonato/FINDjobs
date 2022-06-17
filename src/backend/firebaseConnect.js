import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9L782zzS6YaOmC-1laVeD3xi2-m0wq5c",
  authDomain: "findjobs-cd39d.firebaseapp.com",
  projectId: "findjobs-cd39d",
  storageBucket: "findjobs-cd39d.appspot.com",
  messagingSenderId: "841758483637",
  appId: "1:841758483637:web:5e55348c4c6c808d724afc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db