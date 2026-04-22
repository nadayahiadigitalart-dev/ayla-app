import React, { PureComponent } from 'react';

import myVideo from '../assets/Appreciation.mp4';
import feedback from '../assets/Feedback_bg.svg';

import { useNavigate } from 'react-router-dom';
import badgeIcon from '../assets/badge.svg'; 

const FeedBack = () => {
    const navigate = useNavigate();
    return ( <>
    
    {/* <img className='' src={feedback} alt='feedback'/>
    <div className='feedback_col' >
        <div className="video_container">
      <video 
        width="100%" 
        height="auto" 
        controls 
        poster="../assets/video_thumbnail.png" 
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    </div> */}


    <div className="feedback_page">
        <img className='feed' src={feedback} alt='feedback'/>
      <div className="feedback_content">

          <video 
        width="100%" 
        height="auto" 
        controls 
        poster="../assets/video_thumbnail.png" 
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       
        <h1 className="feedback_title">Great job!</h1>
        <p className="feedback_subtitle">
          You handled this parenting situation thoughtfully.
        </p>


        <div className="badge_container">
          <p className="badge_status">You have earned new badge</p>
          
          <div className="badge_card">
            <div className="badge_icon_wrapper">
              <img src={badgeIcon} alt="Calm Parent Badge" className="badge_img" />
            </div>
            <h2 className="badge_name">Calm Parent</h2>
            <p className="badge_details">for completing 2 lessons today!</p>
          </div>
        </div>

        <button 
          className="but" 
          onClick={() => navigate('/parenting')}
        >
          Go to Home
        </button>
      
      </div>
    </div>
 



  
    
    
    
    </> );
}
 
export default FeedBack;