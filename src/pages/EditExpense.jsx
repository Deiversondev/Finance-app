import {useContext} from 'react';
import { ExpenseContext } from '../context/context';



function EditExpense() {

    const {currentExpense,setCurrentExpense} = useContext(ExpenseContext)

  return (
    <div>EditExpense</div>
  )
}

export default EditExpense