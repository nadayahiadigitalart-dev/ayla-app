// import React, { PureComponent } from 'react';
import React from 'react';
import { useState } from 'react';

import './Signin.css';

const Signin = () => {

        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNext = () => {
        if (email && password) {
            console.log('Signing in with:', { email, password });
            // Add your authentication logic here
        }
    };


    return ( <>

  
    <div className="container">
     
      <div className="image-header">
        <div className="wave-background"></div>
        <img 
          src="character-url-here.png" 
          alt="Illustration" 
          className="character-img" 
        />
      </div>

      
      <div className="form-content">
        <h1 className="title">Sign In</h1>

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

                    <p className="signup-text">
                        Don't have an account? <span className="link">Sign up</span>
                    </p>

        <button className="btn-next">Next</button>

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
 
export default Signin;