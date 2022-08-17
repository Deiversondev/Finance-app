import {useState} from 'react';
import { deleteExpense, updateExpense } from '../../firebase/config';
import {useFormik} from 'formik'
import './Expense.css'
// import { deleteUser } from '../../firebase/config';

function Expense({expense}) {

  const {id} = expense

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

const [active,setactive] = useState(true);
  return (
    <div className='maincontainer'>
        <div>
        <h2>Divida: {expense.name}</h2>
        <h3>Vencimento: {expense.duedate}</h3>
        <h3>Valor:{expense.value}</h3>
        <h3>Pago em: {expense.paymentMadeIn}</h3>
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        <button onClick={() => setactive(!active)}>Edit</button>
        </div>

       { active &&  <div>
       <form onSubmit={formik.handleSubmit}>
      <div>
         <label htmlFor="name">Nome</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
      </div>
 
    <div>
    <label htmlFor="value">Valor</label>
          <input
            id="value"
            name="value"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.value}
          />
    </div>

    <div>
    <label htmlFor="dueDate">Vencimento</label>
          <input
            id="duedate"
            name="duedate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.duedate}
          />
    </div>

<div>
<label htmlFor="paymentMadeIn">Pagamento feito em : (PG)</label>
       <input
         id="paymentMadeIn"
         name="paymentMadeIn"
         type="date"
         onChange={formik.handleChange}
         value={formik.values.paymentMadeIn}
       />
</div>
 
       <button type="submit">Submit</button>
     </form>
        </div> }
        
       
     
    </div>
    
  )
}

export default Expense;