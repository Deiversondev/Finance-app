import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {useNavigate} from 'react-router-dom'
// import {deleteDoc,doc,addDoc,collection,updateDoc} from 'firebase/firestore';
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'



// const history = useHistory()
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

export const deleteExpense = async (id) => {
  const expenseDocRef = doc(db, 'expenses' , id)
  deleteDoc(expenseDocRef);

}



const expensesCollectionRef = collection(db,'expenses')

export const createExpense = async (values) =>{
  await addDoc(expensesCollectionRef,values)
}


export const updateExpense = async (id,newValues) => {
  const userDoc = doc(db,'expenses', id)
  await updateDoc(userDoc,newValues)
}

// export const deleteUser = async (id) => {
//   const userDoc = doc(db,'expenses', id)
//   deleteDoc(userDoc);
// }