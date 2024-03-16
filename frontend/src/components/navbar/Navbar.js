import React from 'react'
import './Navbar.css'
import { SiTodoist } from "react-icons/si";
import { useSelector } from 'react-redux';

import { authActions } from '../../store';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch=useDispatch();
  const logout=()=>{
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }

  const isLoggedIn=useSelector(state=> state.isLoggedIn);
  console.log("isloggedin->",isLoggedIn);

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/"><b><SiTodoist />&nbsp;todo</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>    

        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="/todo">To Do</a>
        </li>

        {!isLoggedIn && <>

          <li className="nav-item mx-3">
          <a className="nav-link active  btn-nav" aria-current="page" href="/signup">Sign Up</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active btn-nav" aria-current="page" href="/signin">Sign In</a>
        </li>
        
        
        </>}

        {/* if user is logged in */}
        {isLoggedIn && <>

          <li className="nav-item mx-3">
          <a className="nav-link active btn-nav" aria-current="page" href="/" onClick={logout}>Log Out</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <img className='user-png' src="./images/user-pic.png" alt="user img" />
            </a>
        </li>
        
        
        
        </>}
        




      </ul> 
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
