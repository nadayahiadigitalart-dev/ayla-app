import React, { useState } from 'react';
import './Onboarding.css';

import on_bg from '../assets/onboardingbg.svg';
import { Link } from 'react-router-dom';

const Onboarding2 = () => {
  // const [name, setName] = useState('');
  const [selectedAge, setSelectedAge] = useState(null);


  const currentLang = localStorage.getItem('appLanguage') || 'en';

  const ageRanges = ["Understand my child's behaviour", "Learn smart activities", "Find nearby places", "Communicate with my child"];
  
  const ageRangesAr = ["فهم سلوك طفلي", "تعلم أنشطة ذكية", "البحث عن أماكن قريبة", "التواصل مع طفلي"];

  return (
    <div className="onboarding_page">
      <img className='bg' src={on_bg} alt='onboarding_bg'/>
        
      <div className="content_container">
        <br></br>
        <div className="content_container">
          <br></br>
          <p className="onboarding-title">
            {currentLang === 'ar' ? (
              <>ما الذي ترغب في الحصول على<br></br> المساعدة فيه أكثر؟</>
            ) : (
              <>What would you like help<br></br> with most?</>
            )}
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

          <Link to='/onboarding3' style={{ textDecoration: 'none' }} >
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

export default Onboarding2;