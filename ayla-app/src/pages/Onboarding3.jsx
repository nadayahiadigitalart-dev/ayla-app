import React, { useState } from 'react';
import './Onboarding.css';

import on_bg from '../assets/onboardingbg.svg';
import { Link } from 'react-router-dom';

const Onboarding3 = () => {

  const [selectedAge, setSelectedAge] = useState(null);

  const ageRanges = ["5 min/day", "10 min/day", "30 min/day", "1 hour/day"];



  return (
    <div className="onboarding_page">
            <img className='bg' src={on_bg} alt='onboarding_bg'/>
        
      <div className="content_container">
            <br></br>
             <div className="content_container">
            <br></br>
        <p className="onboarding-title">
          Whats you daily learning goal?
        </p>
      

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
<Link to='/signin'>
<button 
  className="submit-btn" 
  disabled={!selectedAge}
  onClick={() => console.log("Form Submitted:", { selectedAge })}
>
  Continue
</button>
</Link>
</div>

      </div>
    </div>
  );
};

export default Onboarding3;