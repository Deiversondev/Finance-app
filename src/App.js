import logo from './logo.svg';
import './App.css';
import { db } from './firebase/config';
import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'

function App() {
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db,'users')

  useEffect(() => {
    const getUsers = async () => {

      const data = await getDocs(usersCollectionRef)
      console.log(data)
    } 

    getUsers()
  },[])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
