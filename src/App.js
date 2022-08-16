import './App.css';
import { db } from './firebase/config';
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useFormik } from 'formik';
import { async } from '@firebase/util';

function App() {  
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db,'users')
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
    const userDoc = doc(db,'users',id)
    const newFields = {name: 'test' ,age : age + 1};
    
    // new fields will contain the disered updat, matching whatever values the object has and needs update

     await updateDoc(userDoc,newFields);
  }

const deleteUser = async (id) => {
  const userDoc = doc(db,'users',id)
  deleteDoc(userDoc);

}

  useEffect(() => {
    const getUsers = async () => {

      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      console.log(data)
    } 

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
      users.map((user) => {
        return (
          <div>
            <h2>{user.name}</h2>
            <h3>{user.age}</h3>
            <button onClick={() => updateUser(user.id, user.age)}>update</button>
            <button onClick={() => deleteUser(user.id)}>delete</button>
          </div>
        )
      })
     }
    </div>
  );
}

export default App;
