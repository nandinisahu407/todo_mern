import React from 'react'
import './SignUp.css';

const SignUp = () => {
  return (
    <>
        <div className="signup">

        <div className="container">
            <h1>
                Organize your <br />work and life,finally!!
            </h1>
            <p>Become focused,organised and calm with <br />todo app.The world's #1 Task manager app</p>
            <button className='home-btn'>Make Todo List</button>
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
                                <input type="text" name="name" id="name" autoComplete='off' placeholder='Your Name' required="required" />  
                                 </div>
                            </div>

                            <div class="row">
                                <div class="input-field">
                                    <label for="email">
                                    <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" id="email" name="email" class="validate" required="required" placeholder="Email ID"/>

                                </div>	
						    </div>

                            <div class="row">
                                <div class="input-field">
                                    <label for="pass">
                                    <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" id="pass" name="password" class="validate" required="required" placeholder="Password"/>
                                </div>	
						    </div>

                            <div className="form-button">
                                <input type="submit" value="Sign Up" name="signup" id="signup" />
                            </div>
                            
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
