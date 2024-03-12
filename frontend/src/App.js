import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import './App.css';

import {BrowserRouter,Routes,Route} from  "react-router-dom";
import SignUp from './components/signup/SignUp';

const App = () => {
  return (
    <>
    <Navbar/>    

    {/* <BrowserRouter>
      <Routes>

        <Route  path='/' element={<Home/>} />
        <Route  path='/signup' element={<SignUp/>} />


      </Routes>
    
    </BrowserRouter> */}

    <div className="main-screen">
        <div className="container">
            <h1>
                Organize your <br />work and life,finally!!
            </h1>
            <p>Become focused,organised and calm with <br />todo app.The world's #1 Task manager app</p>
            <button className='home-btn'>Make Todo List</button>
        </div>

        {/* add components as signup,home */}
        <div className="right-conatiner">

          <BrowserRouter>
            <Routes>

              <Route  path='/' element={<Home/>} />
              <Route  path='/signup' element={<SignUp/>} />


            </Routes>
      
      </BrowserRouter>

        </div>
    </div>    

    <Footer/>
    
    </>
  )
}

export default App
