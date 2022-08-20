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
  const  HelperFunction = (id) =>{
    // navigate('/all')
    deleteExpense(id)
    window.location.reload()
  }

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
                
        },
        
      });

const [active,setactive] = useState(false);
  return (
    
        <div className='mainContainer'>
        <h2>Despesa: {expense.name}</h2>
        <h3>Data de Vencimento: {expense.duedate}</h3>
        <h3>Valor:{expense.value}</h3>
        <h3>Paga em {expense.paymentMadeIn}</h3>
        <button onClick={() => HelperFunction(expense.id)}>Apagar despesa</button>
       
        <button onClick={() => EditExpense(expense)}>Editar despesa</button>
      <table>
       <tbody>
       <thead>
          <th>Nome</th>
          <th>Valor</th>
          <th>Vencimento</th>
          <th>Paga em</th>
        </thead>
        <tr>
         <td>{expense.name}</td>
          <td>{expense.value}</td>
          <td> {expense.duedate}</td>
         <td> {expense.paymentMadeIn}
         </td>
        </tr>
       </tbody>
      </table>

       {/* <button onClick={() => EditExpense(currentExpense)}>EDDDDITAR</button>  */}
     
    </div>
    
  )
}

export default Expense;