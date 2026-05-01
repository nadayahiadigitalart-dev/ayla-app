import React from 'react';
import './Experts.css';

import live1 from '../assets/live1.svg';
import live2 from '../assets/live2.svg';
import heartIcon from '../assets/heart_icon.svg';
import messageIcon from '../assets/message_icon.svg';
import clockIcon from '../assets/clock_icon.svg';
import premiumBimg from '../assets/expert_banner.svg';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Experts = () => {
  const navigate = useNavigate();

  
  const handleSubscribe = () => {
    navigate('/subscription'); 
  };

  const sessions = [
    {
      id: 1,
      doctor: "Dr. Sarah Ahmed",
      title: "Understanding ADHD Behavior in Toddlers",
      time: "Sunday - 7:00 PM",
      img: live1
    },
    {
      id: 2,
      doctor: "Dr. Moaz Hamad",
      title: "Healthy Routines for Active Children",
      time: "Tuesday - 5:00 PM",
      img: live2
    }
  ];

  return (
    <div className="experts_container">
      <div className="toggle_container">
        <button className="toggle_btn active">Experts</button>
        
        <button className="toggle_btn" onClick={() => navigate('/community')}>
          Moms Stories
        </button>
      </div>

      <section className="live_sessions">
        <p>upcoming free live session from Experts</p>
        <div className="sessions_wrapper">
          {sessions.map(session => (
            <div key={session.id} className="session_card">
              <div className="session_img" >
                  <img src={session.img} alt="img" />
              </div>
              <div className="session_info">
                <span className="dr_name">{session.doctor}</span>
                <p>{session.title}</p>
                <div className="session_time">
                  <img src={clockIcon} alt="clock" />
                  <span>{session.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="premium_banner">
        <div className="premium_content">
          <p>Ask Parenting Experts</p>
          <p>Get answers from pediatricians, psychologists, and child development specialists.</p>
          <ul>
            <li>✓ Ask personal parenting questions</li>
            <li>✓ Receive expert guidance</li>
            <li>✓ Learn from other parents' questions</li>
          </ul>
         
          <button className="premium_btn" onClick={handleSubscribe}>
            Subscribe to Premium
          </button>
        </div>
        <div className="premium_image_bg">
            <img className='prem' src={premiumBimg} alt='premium_ayla_banner'/>
        </div>
      </section>

      <section className="expert_posts">
        <p>Recent Posts from experts</p>
        <div className="post_card_expert">
          <div className="card_header">
            <div className="user_info">
              <div className="avatar_expert"></div>
              <div className="name_col">
                <span className="author_name">Dr. Omar Hassan</span>
                <span className="sub_text">Helping active children focus</span>
              </div>
            </div>
            <span className="tag_ask">ask</span>
          </div>
          
          <div className="post_body">
            <p className='t' >My child forgets instructions quickly. Is this normal?</p>
            <p className='t'>
              Children with ADHD may struggle to remember multi-step instructions because their working memory is still developing...
            </p>
            <p className="highlight_box">
              Try: "First, put the toys in the box." When they finish, give the next instruction.
            </p>
          </div>

          <div className="card_footer">
            <span className="footer_item"><img src={heartIcon} alt="heart" /> 135 find this helpful</span>
            <span className="footer_item"><img src={messageIcon} alt="msg" /> 24</span>
          </div>
        </div>
      </section>
      <Navbar />

    </div>
  );
};

export default Experts;