import ButtonAppBar from './Components/Navbar';
import IdeasStack from './Components/IdeasStack';
import AlignItemsList from './Components/Chatlist'
import { useState, useEffect } from 'react';
import {db} from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import "./App.css";


function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      { users.map((user) => {
         return (
          <div>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>  
          </div>
        );
         })}
      <ButtonAppBar/>
      <header className="App-header">
        <IdeasStack />
      </header>
    </div>
  );
}

export default App;
