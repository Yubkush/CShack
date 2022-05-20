import ButtonAppBar from './Components/Navbar';
import IdeaForm from './Components/IdeaForm';
import IdeasStack from './Components/IdeasStack';
import AlignItemsList from './Components/Chatlist'
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Login from "./Components/Login/Login"
import Categories from "./Components/Categories/Categories"
import { Route, Redirect, Routes } from 'react-router-dom';
import { Switch } from 'react-router';
import RoutesX from './Components/Routes';


function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">


    <ButtonAppBar/>

      <header className="App-header">
      <Box
        component="img"
        sx={{
          // height: 233,
          width: "50%",
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="banner image."
        src="https://i.ibb.co/V2MzZXG/Untitled-1.jpg"
      />
  
      { <div className="AddIdea" style={{marginTop : 20,marginBottom : 20}}>
      <center>
      <IdeaForm />
      </center>
      </div>}
        <IdeasStack />
      </header>
    </div>
  );
}

export default App;