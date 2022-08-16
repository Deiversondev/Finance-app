import './App.css';
import { db } from './firebase/config';
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useFormik } from 'formik';
import { async } from '@firebase/util'; 
import ExpenseForm from './components/expense-form/ExpenseForm';

function App() {  
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db,'expenses')
  const createUser = async (values) => {
    await addDoc(usersCollectionRef,values)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      age:0,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      createUser(values)
    },
  });

 
  const updateUser = async (id,age) => {
    const userDoc = doc(db,'expenses',id)
    const newFields = {name: 'test'};
    
    // new fields will contain the disered updat, matching whatever values the object has and needs update IMPORTANT

     await updateDoc(userDoc,newFields);
  }
  const getUsers = async () => {

    const data = await getDocs(usersCollectionRef)
    setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    console.log(data)
  } 


const deleteUser = async (id) => {
  const userDoc = doc(db,'expenses',id)
  deleteDoc(userDoc);
  getUsers()

}

  useEffect(() => {
    
    getUsers()
  },[])

  return (
    <div className="App">


<form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">First Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
 
 
       <label htmlFor="age">Email Address</label>
       <input
         id="age"
         name="age"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.age}
       />
 
       <button type="submit">Submit</button>
     </form>



     {
      users.map((expense) => {
        return (
          <div>
            <h2>Divida: {expense.name}</h2>
            <h3>Vencimento: {expense.duedate}</h3>
            <h3>Valor:{expense.value}</h3>
            <h3>Pago em: {expense.paymentMadeIn}</h3>
            <button onClick={() => updateUser(expense.id)}>update</button>
            <button onClick={() => deleteUser(expense.id)}>delete</button>

            
          </div>
        )
      })
     }

<ExpenseForm/>
    </div>
  );
}

export default App;
