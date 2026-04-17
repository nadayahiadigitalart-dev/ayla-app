import React, { useState } from 'react';
import './Onboarding.css';

import on_bg from '../assets/onboardingbg.svg';

const Onboarding = () => {
  const [name, setName] = useState('');
  const [selectedAge, setSelectedAge] = useState(null);

  const ageRanges = ['1-3 years', '3-6 years', '6-9 years', '9-12 years'];
  
// console.log("Name:", name, "| Age:", selectedAge, "| Disabled:", !name || !selectedAge);

const handleContinue = () => {
  if (!name || !selectedAge) {
    alert("Please fill in all fields");
    return;
  }
 
  console.log("Moving to next screen...");
};

  return (
    <div className="onboarding-page">
            <img className='bg' src={on_bg} alt='onboarding_bg'/>
        {/* <div className='bg'> */}
        {/* </div> */}
      <div className="content-wrapper">
            <br></br>
        <h1 className="onboarding-title">
          Add your children name &<br /> Choose their age
        </h1>

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

        <button 
  className="submit-btn" 
  onClick={handleContinue}
>
  Continue
</button>
      </div>
    </div>
  );
};

export default Onboarding;