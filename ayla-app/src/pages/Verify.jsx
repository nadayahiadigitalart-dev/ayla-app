import React, { useState, useRef, useEffect } from 'react';
import { Supabase as supabase } from '../Supabase';

import illustration from '../assets/bg-sign.svg';


import './Verify.css';
import { Link } from 'react-router-dom';

const Verify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [email, setEmail] = useState('Loading...'); 
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const fetchUserEmail = async () => {
      
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email);
      } else {
   
        const { data, error } = await supabase
          .from('signins')
          .select('email')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (data) setEmail(data.email);
        if (error) setEmail("User not found");
      }
    };

    fetchUserEmail();
  }, []);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < 3) inputRefs[index + 1].current.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="verify-container">
              <img className=''  src={illustration} alt="Illustration"  />
      
      <div className="verify-content">
        <h1 className="verify-title">Verify</h1>

        <div className="otp-input-group">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-box"
            />
          ))}
        </div>

        <div className="info-text">
          <p>We sent verification code to your email</p>
          <span className="email-highlight">{email}</span>
        </div>

        <div className="resend-section">
          <p>Didn't receive code? <button className="resend-link">Resend it</button></p>
        </div>
                   <Link to='/ready' style={{ textDecoration: 'none' }}>

        <button className="verify-btn" disabled={!isComplete}>
          Verify
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Verify;