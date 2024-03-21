import React, { useState } from 'react'
import './SignUp.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"

const SignUp = () => {

    const history=useNavigate()

    const [Inputs,setInputs]=useState({
        "name":"",
        "email":"",
        "password":""
    })

    const change=(e)=>{
        const {name,value}=e.target;
        setInputs({...Inputs,[name]:value});
    }

    const submit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://todo-api-weld.vercel.app/register", Inputs);
            console.log(response);
    
            if (response.status === 200) {
                toast.success("New User Added,Sign up Successful !!");
                console.log("heloooooooooo added user");
                setInputs({ name: "", email: "", password: "" });
                history("/signin")
            } 
            
        } 
        
        catch (error) {
            console.log("Error from frontend:", error);

            if(error.response){
                if(error.response.status===400){           //handling user already exists case
                    console.log("helllloooooo allready a user");
                    toast.error("User Already Exists"); 
                }
                else {
                    toast.error("An error occurred. Please try again.");
                }
            }

            else {
                toast.error("An error occurred. Please try again.");
            }

        }
    };


  return (
    <>

<div className="main-screen">
    <ToastContainer/>
        <div className="container">
            <h1>
                Organize your <br />work and life,finally!!
            </h1>
            <p>Become focused,organised and calm with <br />todo app.The world's #1 Task manager app</p>
            

        </div>
    
        <div className="signup-container">

        <div className="box">
                <div className="inner-box">
                <div className="carousel">

                </div>
                    <div className="form-content">
                        <form action="" className="sign-up" autoComplete='off'>
                            <h2 className="heading">Sign Up</h2>

                            <div className="row">
                                <div className="input-field">
                                <label htmlFor="name">
                                <i class="zmdi zmdi-account"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete='off' placeholder='Your Name' required="required"  onChange={change} value={Inputs.username}/>  
                                 </div>
                            </div>

                            <div class="row">
                                <div class="input-field">
                                    <label for="email">
                                    <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" id="email" name="email" class="validate" required="required" placeholder="Email ID" onChange={change} value={Inputs.email}/>

                                </div>	
						    </div>

                            <div class="row">
                                <div class="input-field">
                                    <label for="pass">
                                    <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" id="password" name="password" class="validate" required="required" placeholder="Password" onChange={change} value={Inputs.password}/>
                                </div>	
						    </div>

                            <div className="form-button">
                                <input type="submit" value="Sign Up" name="signup" id="signup" onClick={submit}/>
                            </div>

                            <p> <a href="/signin">Already have an account? Login</a></p>
                            
                        </form>

                    </div>

                    
                </div>
            </div>

          
       </div> 
    </div>   
            

    </>
  )
}

export default SignUp
