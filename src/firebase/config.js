import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {deleteDoc,doc,addDoc,collection,updateDoc} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCvagbTjzNLdSNl6RoKuhwde86Xil_mKCM",
  authDomain: "finance-app-53a3d.firebaseapp.com",
  projectId: "finance-app-53a3d",
  storageBucket: "finance-app-53a3d.appspot.com",
  messagingSenderId: "493668838231",
  appId: "1:493668838231:web:7bfb233451561b87fb2c12"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const deleteUser = async (id) => {
  const expenseDocRef = doc(db, 'users' , id)
  deleteDoc(expenseDocRef);
}

const usersCollectionRef = collection(db, 'users')

export const createUser = async (values) =>{
  await addDoc(usersCollectionRef,values)
}

export const updateUser = async (id,newValues) => {
  const userDoc = doc(db,'users', id)
  
  await updateDoc(userDoc,newValues)
}