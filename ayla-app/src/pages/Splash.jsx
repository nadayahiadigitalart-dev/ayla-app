import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';

import splash_bg from '../assets/splash_2.svg';
import splash_logo from '../assets/splash_logo.svg';

const Splash = () => {
  const navigate = useNavigate();

  const selectLanguage = (lang) => {
   
    localStorage.setItem('appLanguage', lang);
    
  
document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    navigate('/onboarding'); 
  };

  return (<>
          <img className='splash' src={splash_bg} alt='splash_bg'/>
    <div className="splash-container">
      {/* <div className="logo-section"> */}
        {/* <div className="logo-circle">
          
          <span className="logo-text">Ayla</span>
        </div> */}

      {/* </div> */}

      <div className="language-selection">
        <img className='logo_splash' src={splash_logo} alt=''/>
        <p className="welcome-text">Choose Language</p>
        <p className="welcome-text-ar">اختر اللغة</p>

        <div className="btn-group">
          <button 
            className="lang-btn" 
            onClick={() => selectLanguage('en')}
          >
            English
          </button>
          
          <button 
            className="lang-btn ar-font" 
            onClick={() => selectLanguage('ar')}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  </>);
};

export default Splash;