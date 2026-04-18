// import React, { PureComponent } from 'react';
import React from 'react';
import { useState } from 'react';


import illustration from '../assets/bg-sign.svg';

import './Signin.css';
import { Link } from 'react-router-dom';

const Signup = () => {

        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNext = () => {
        if (email && password) {
            console.log('Signing in with:', { email, password });
           
        }
    };


    return ( <>

  
    <div className="container">
        <img className=''  src={illustration} alt="Illustration"  />
     
    

      
      <div className="form-content2">
        <h1 className="title">Sign Up</h1>

                   <div className="input-group">
                      <label>Email</label>
                      <input 
                            type="email" 
                            placeholder="Example: sara@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                      <div className="input-group">
                        <label>Confirm Password</label>
                        <input 
                            type="password" 
                            placeholder="Congirm Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                   
                  
        <button className="btn-next">Sign up</button>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-buttons">
          <button className="social-btn facebook">
            <img src="fb-icon.svg" alt="" /> Facebook
          </button>
          <button className="social-btn google">
            <img src="google-icon.svg" alt="" /> Google
          </button>
        </div>
      </div>
    </div>
 

    
    </> );
}
 
export default Signup;