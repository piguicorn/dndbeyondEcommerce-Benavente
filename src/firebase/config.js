import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA5LooDZ53_5Dk--CKKtR7D3m-T9vR4J9Y",
  authDomain: "dnd-beyond-marketplace-clone.firebaseapp.com",
  projectId: "dnd-beyond-marketplace-clone",
  storageBucket: "dnd-beyond-marketplace-clone.appspot.com",
  messagingSenderId: "839715208422",
  appId: "1:839715208422:web:56930ab8e4e1db378acf27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// function to export the app
export default function iniFirebase() {
    return app;
}