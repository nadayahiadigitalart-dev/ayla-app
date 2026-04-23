import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Premium.css';


import premiumIllustration from '../assets/Webinar.mp4'; 

const Premium = () => {
  const navigate = useNavigate();

  return (
    <div className="premium_page">
      <div className="premium_top_visual">
        <div className="chat_bubble_icon">
          <span>•••</span>
        </div>
        <video 
          src={premiumIllustration} 
          alt="Premium illustration" 
          className="illustration_img" 
          autoPlay 
        //   loop 
          muted
        />
      </div>

      <div className="pricing_card">
        <div className="price_header">
          <span className="amount">800</span>
          <span className="currency">EGP /month</span>
        </div>

        <div className="features_list">
          <p>Access all premium features including:</p>
          <ul>
            <li>✓ Ask specialists</li>
            <li>✓ Join live expert sessions</li>
            <li>✓ Advanced parenting lessons</li>
            <li>✓ Access courses & workshops</li>
          </ul>
        </div>
      </div>

      <button className="upgrade_btn" onClick={() => console.log("Processing payment...")}>
        Upgrade to premium
      </button>
    </div>
  );
};

export default Premium;