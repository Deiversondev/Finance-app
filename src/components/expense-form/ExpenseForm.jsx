import React from 'react'
import { useFormik } from 'formik'
import { db,createExpense } from '../../firebase/config'
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'

function ExpenseForm() {


  const expensesCollectionRef = collection(db,'expenses')
  // const createExpense = async (values) => {
  //   await addDoc(expensesCollectionRef,values)
  // }
  const formik = useFormik({
    initialValues: {
      name: '',
      value:0,
      duedate:'',
      paymentMadeIn:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      createExpense(values)
    },
  });



  return (
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
  )
}

export default ExpenseForm;