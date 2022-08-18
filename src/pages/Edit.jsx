import {useState,useContext} from 'react';
import { ExpenseContext } from '../context/context';
import {useFormik} from 'formik'
import { updateExpense } from '../firebase/config';

function Edit() {

    const {currentExpense} = useContext(ExpenseContext);

    // const {id} = currentExpense

    const formik = useFormik({
        initialValues: {
          name: currentExpense.name,
          value:currentExpense.value,
          duedate:currentExpense.duedate,
          paymentMadeIn:currentExpense.paymentMadeIn,
        },
        onSubmit: values => { 
          updateExpense(values)  
        //   setactive(!active)       
        },
        
      });


  return (
    <div>

<div>
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
        </div> 
        
       
     
    </div>

    
  )
}

export default Edit;