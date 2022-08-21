import {useEffect, useState, useContext} from 'react'
import { ExpenseContext } from '../context/context';
import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
import {db} from '../firebase/config'
import Expense from '../components/expenses-Component/Expense';
import'./AllExpenses.css'


function AllExpenses() {

  const {currentExpense,setCurrentExpense} = useContext(ExpenseContext)

    const expensesCollectionRef = collection(db,'expenses');
    const [expenses,setExpenses] = useState([]);


    const getExpenses = async () =>{
        const data = await getDocs(expensesCollectionRef);
        setExpenses(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    useEffect(() => {
      getExpenses()
    }, [])
  return (
    <div className='mainContainer'>
        
        {
            expenses.map((expense) => {
                return ( 
                    <Expense key={expense.id} expense={expense}/>
                )
            })
        }
        
        </div>
  )
}

export default AllExpenses;