import React from 'react';
import back from '../assets/Backtoschool.gif';
import icon1 from '../assets/question-line.svg';
import icon2 from '../assets/brain-3-line.svg';
import icon3 from '../assets/hand-heart-line.svg';
import icon4 from '../assets/team-line.svg';

import './Readyscreen.css';
import { Link } from 'react-router-dom';

const Readyscreen = () => {
  // Check language preference
  const currentLang = localStorage.getItem('appLanguage') || 'en';

  const features = [
    { id: 1, text: 'Personalized parenting guidance', textAr: 'توجيه تربوي مخصص', icon: icon1 },
    { id: 2, text: 'Real-life parenting situations', textAr: 'مواقف تربوية واقعية', icon: icon2 },
    { id: 3, text: 'Kids activities and meal ideas', textAr: 'أنشطة للأطفال وأفكار للوجبات', icon: icon3 },
    { id: 4, text: 'Expert advice and community support', textAr: 'نصائح الخبراء ودعم المجتمع', icon: icon4 }
  ];

  return (
    <div className="ready-page">
      <div className="ready-content">
      
        <div className="gif-container">
          <img src={back} alt="Ready Animation" className="header-gif" />
        </div>

        <div className="text-header">
          <h1 className="ready-title">
            {currentLang === 'ar' ? "أنت مستعد للبدء" : "You're Ready to Start"}
          </h1>
          <p className="ready-subtitle">
            {currentLang === 'ar' 
              ? "أيلا مستعدة لإرشادك في رحلتك التربوية من خلال" 
              : "Ayla is ready to guide you through your parenting journey with"}
          </p>
        </div>

        <div className="features-list">
          {features.map((item) => (
            <div key={item.id} className="feature-item">
              <div className="icon-wrapper">
                <img src={item.icon} alt="icon" className="feature-icon" />
              </div>
              <p className="feature-text">
                {currentLang === 'ar' ? item.textAr : item.text}
              </p>
            </div>
          ))}
        </div>

        <Link to='/home' style={{ textDecoration: 'none' }}>
          <button className="home-btn" onClick={() => console.log('Go to Home')}>
            {currentLang === 'ar' ? "الذهاب للصفحة الرئيسية" : "Go to Home"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Readyscreen;