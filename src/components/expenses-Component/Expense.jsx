import {useState,useContext} from 'react';
import { ExpenseContext } from '../../context/context';
import { deleteExpense, updateExpense } from '../../firebase/config';
import {useFormik} from 'formik'
import './Expense.css'
import { useNavigate } from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';

// import { deleteUser } from '../../firebase/config';

function Expense({expense}) {

  const {currentExpense,setCurrentExpense} = useContext(ExpenseContext)
  const navigate = useNavigate()

  const {id} = expense
  console.log(currentExpense);

const  EditExpense = (expense) =>  {
  setCurrentExpense(expense)
  navigate('/edit')
}

    const formik = useFormik({
        initialValues: {
          name: expense.name,
          value:expense.value,
          duedate:expense.duedate,
          paymentMadeIn:expense.paymentMadeIn,
        },
        onSubmit: values => { 
          updateExpense(id , values)  
          setactive(!active)       
        },
        
      });

const [active,setactive] = useState(false);
  return (
    
        <div>
        <h2>Divida: {expense.name}</h2>
        <h3>Vencimento: {expense.duedate}</h3>
        <h3>Valor:{expense.value}</h3>
        <h3>Pago em: {expense.paymentMadeIn}</h3>
        <button onClick={() => deleteExpense(expense.id)}>Apagar</button>
       
        <button onClick={() => EditExpense(expense)}>Editar</button>


       {/* <button onClick={() => EditExpense(currentExpense)}>EDDDDITAR</button>  */}
     
    </div>
    
  )
}

export default Expense;