import React, { useState } from 'react';
import './Onboarding.css';

import on_bg from '../assets/onboardingbg.svg';
import { Link } from 'react-router-dom';

const Onboarding3 = () => {

  const [selectedAge, setSelectedAge] = useState(null);

  // Check language preference
  const currentLang = localStorage.getItem('appLanguage') || 'en';

  const ageRanges = ["5 min/day", "10 min/day", "30 min/day", "1 hour/day"];
  
  // Arabic mapping for daily goals
  const ageRangesAr = ["٥ دقائق/يومياً", "١٠ دقائق/يومياً", "٣٠ دقيقة/يومياً", "ساعة/يومياً"];

  return (
    <div className="onboarding_page">
      <img className='bg' src={on_bg} alt='onboarding_bg'/>
        
      <div className="content_container">
        <br></br>
        <div className="content_container">
          <br></br>
          <p className="onboarding-title">
            {currentLang === 'ar' ? "ما هو هدفك التعليمي اليومي؟" : "Whats you daily learning goal?"}
          </p>
      
          <div className="age-selection-group">
            {ageRanges.map((range, index) => (
              <button
                key={range}
                onClick={() => setSelectedAge(range)}
                className={`age-option-btn ${selectedAge === range ? 'selected' : ''}`}
              >
                {currentLang === 'ar' ? ageRangesAr[index] : range}
              </button>
            ))}
          </div>

          <Link to='/signin' style={{ textDecoration: 'none' }} >
            <button 
              className="submit-btn" 
              disabled={!selectedAge}
              onClick={() => console.log("Form Submitted:", { selectedAge })}
            >
              {currentLang === 'ar' ? "استمرار" : "Continue"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;