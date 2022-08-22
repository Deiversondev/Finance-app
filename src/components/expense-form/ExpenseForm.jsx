import React from 'react'
import { useFormik } from 'formik'
import { db,createExpense } from '../../firebase/config'
import { useNavigate } from "react-router-dom";
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'

function ExpenseForm() {

  const navigate = useNavigate();

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
      navigate('/all')
      createExpense(values)
    },
  });



  return (
    <div>

<form onSubmit={formik.handleSubmit}>

  <h1>Adicionar nova despesa</h1>
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
    <label htmlFor="dueDate">Vencimento :</label>
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
 
       <button type="submit">Salvar</button>
     </form>

    </div>
  )
}

export default ExpenseForm;