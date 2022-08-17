import {useEffect, useState, useContext} from 'react'
import { ExpenseContext } from '../context/context';
import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
import {db} from '../firebase/config'
import Expense from '../components/expenses-Component/Expense';


function AllExpenses() {

  const {currentExpense,setCurrentExpense} = useContext(ExpenseContext)

    const expensesCollectionRef = collection(db,'expenses');
    const [expenses,setExpenses] = useState([]);


    const getExpenses = async () =>{
        const data = await getDocs(expensesCollectionRef);
        setExpenses(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        console.log(data)
    }

    useEffect(() => {
      getExpenses()
    }, [])
    
    // getExpenses()
  return (
    <div>
        

        {
            expenses.map((expense) => {
                return ( 
                   <div>
                    <Expense expense={expense}/>
                    <button onClick={() => console.log(currentExpense)}>con</button>
                   </div>
                )
            })
        }
        
        
        </div>
  )
}

export default AllExpenses;