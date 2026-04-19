import React, { useState } from 'react';
import './Onboarding.css';

import on_bg from '../assets/onboardingbg.svg';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  const [name, setName] = useState('');
  const [selectedAge, setSelectedAge] = useState(null);

  const ageRanges = ['1-3 years', '3-6 years', '6-9 years', '9-12 years'];



  return (
    <div className="onboarding_page">
            <img className='bg' src={on_bg} alt='onboarding_bg'/>
        
      <div className="content_container">
            <br></br>
        <p className="onboarding-title">
          Add your children name &<br /> Choose their age
        </p>

        <div className="input-container">
          <input
            type="text"
            placeholder="Example: Sara"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-field"
          />
        </div>

        <div className="age-selection-group">
          {ageRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedAge(range)}
              className={`age-option-btn ${selectedAge === range ? 'selected' : ''}`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* <button 
  className="submit-btn" 
  onClick={handleContinue}
>
  Continue
</button> */}
<Link to='/onboarding2' style={{ textDecoration: 'none' }} >

<button 
  className="submit-btn" 
  disabled={!name.trim() || !selectedAge}
  onClick={() => console.log("Form Submitted:", { name, selectedAge })}
>
  Continue
</button>
</Link>
      </div>
    </div>
  );
};

export default Onboarding;