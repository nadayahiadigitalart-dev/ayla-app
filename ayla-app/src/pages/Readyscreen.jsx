import React from 'react';

import back from '../assets/Backtoschool.gif';
import icon1 from '../assets/question-line.svg';
import icon2 from '../assets/brain-3-line.svg';
import icon3 from '../assets/hand-heart-line.svg';
import icon4 from '../assets/team-line.svg';



import './Readyscreen.css';
import { Link } from 'react-router-dom';

const Readyscreen = () => {
  const features = [
    {
      id: 1,
      text: 'Personalized parenting guidance',
      icon: icon1
    },
    {
      id: 2,
      text: 'Real-life parenting situations',
      icon: icon2
    },
    {
      id: 3,
      text: 'Kids activities and meal ideas',
      icon: icon3
    },
    {
      id: 4,
      text: 'Expert advice and community support',
      icon: icon4
    }
  ];

  return (
    <div className="ready-page">
      <div className="ready-content">
      
        <div className="gif-container">
          <img 
            src={back} 
            alt="Ready Animation" 
            className="header-gif"
          />
        </div>

       
        <div className="text-header">
          <h1 className="ready-title">You're Ready to Start</h1>
          <p className="ready-subtitle">
            Ayla is ready to guide you through your parenting journey with
          </p>
        </div>

       
        <div className="features-list">
          {features.map((item) => (
            <div key={item.id} className="feature-item">
              <div className="icon-wrapper">
                <img src={item.icon} alt="icon" className="feature-icon" />
              </div>
              <p className="feature-text">{item.text}</p>
            </div>
          ))}
        </div>


        <Link to='/home' style={{ textDecoration: 'none' }}>

        <button className="home-btn" onClick={() => console.log('Go to Home')}>
          Go to Home
        </button>

        </Link>

      </div>
    </div>
  );
};

export default Readyscreen;