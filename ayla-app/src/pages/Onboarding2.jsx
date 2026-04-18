import React, { useState } from 'react';
import './Onboarding.css';

import on_bg from '../assets/onboardingbg.svg';
import { Link } from 'react-router-dom';

const Onboarding2 = () => {
  // const [name, setName] = useState('');
  const [selectedAge, setSelectedAge] = useState(null);

  const ageRanges = ["Understand my child's behaviour", "Learn smart activities", "Find nearby places", "Communicate with my child"];



  return (
    <div className="onboarding_page">
            <img className='bg' src={on_bg} alt='onboarding_bg'/>
        
      <div className="content_container">
            <br></br>
             <div className="content_container">
            <br></br>
        <p className="onboarding-title">
          What would you like help<br></br> with most?
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
<Link to='/onboarding3'>
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

export default Onboarding2;