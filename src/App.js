import './App.css';
import { db } from './firebase/config';
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useFormik } from 'formik';
import ExpenseForm from './components/expense-form/ExpenseForm';
import Expense from './components/expenses-Component/Expense';
import AllExpenses from './pages/AllExpenses';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Edit from './pages/Edit';


function App() {  
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db,'expenses')
  const createUser = async (values) => {
    await addDoc(usersCollectionRef,values)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      age:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      createUser(values)
    },
  });


    
    // new fields will contain the disered updat, matching whatever values the object has and needs update IMPORTANT
    
 
 const getExpenses = async () => {

    const data = await getDocs(usersCollectionRef)
    setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    // console.log(data)
  } 


const deleteUser = async (id) => {
  const userDoc = doc(db,'expenses',id)
  deleteDoc(userDoc);
  getExpenses()

}

  useEffect(() => {
    
    getExpenses()
  },[])

  return (
    <div className="App">


{/* <form onSubmit={formik.handleSubmit}>
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
     </form> */}



<Routes>
    <Route path='/' element={<Navbar/>} >
    <Route path='edit' element={<Edit/>} />
    <Route path='all' index element={<AllExpenses/>} />
    <Route path='new' index element={<ExpenseForm/>} />
</Route>
    
</Routes>
    </div>
  );
}

export default App;
 //edit route , don't forget