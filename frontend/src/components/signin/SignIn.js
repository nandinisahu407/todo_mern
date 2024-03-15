import React, { useState } from 'react'
import './SignIn.css'
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const SignIn = () => {

    const history=useNavigate();

    const [Inputs,setInputs]=useState({
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
            const response = await axios.post("http://localhost:1000/login", Inputs);
            console.log(response);
    
            if (response.status === 200) {
                toast.success("successfully logged in !!");

                setTimeout(() => {                     //wait fro 3sec then redirect to next page
                    setInputs({email: "", password: "" });
                    history("/")
                }, 1300);
  
            } 
            
        } 
        
        catch (error) {
            console.log("Error from frontend login:", error);

            if(error.response){
                if(error.response.status===400){           //handling user dne+ password incorrect
                    toast.error(error.response.data.message); 
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
                        <form action="" className="sign-in" autoComplete='off'>
                            <h2 className="heading">Login</h2>

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
                                    <input type="password" id="pass" name="password" class="validate" required="required" placeholder="Password" onChange={change} value={Inputs.password} />
                                </div>	
                            </div>

                            <div className="form-button">
                                <input type="submit" value="Login" name="login" id="login" onClick={submit}/>
                            </div>

                            <p> <a href="/signup">Create new account? Sign Up</a></p>
                            
                        </form>

                    </div>

                    
                </div>
                </div>

            
            </div> 

</div>
    
    </>
  )
}

export default SignIn
