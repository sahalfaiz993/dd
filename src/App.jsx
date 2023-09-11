import React from 'react';
import Navbar from './Component/Navbar';
import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';




function App() {
 
  return (
<BrowserRouter>
    <>
      <Navbar/>
      <Routes>
      <Route path='/'  element={ <Dashboard/>}/>
      <Route path='Login'  element={  <Login/> }/>
      <Route path='Signup'  element={ <Signup/>}/>
</Routes>
   
 
       

        
    </>
    </BrowserRouter>
    
  )
}

export default App;
