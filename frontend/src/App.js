import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import './App.css';

import {BrowserRouter,Routes,Route} from  "react-router-dom";
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Todo from './components/todo/Todo';

import { authActions } from './store';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    const id=sessionStorage.getItem("id");

    if(id){
      dispatch(authActions.login());
    } 
  })

  return (
    <>
    <Navbar/>    

          <BrowserRouter>
            <Routes>

              <Route  path='/' element={<Home/>} />
              <Route  path='/signup' element={<SignUp/>} />
              <Route  path='/signin' element={<SignIn/>} />
              <Route  path='/todo' element={<Todo/>} />



            </Routes>
      
      </BrowserRouter>

    <Footer/>
    
    </>
  )
}

export default App
