import React, { PureComponent } from 'react';
import Navbar from '../components/Navbar';

import logo_ayla_app from '../assets/logo_ayla_app.svg';
import profile from '../assets/profile.png';
import menu from '../assets/menu.svg';
import arrow from '../assets/arrow.svg';
import parentbg from '../assets/parenting.svg';
import ic1 from '../assets/cup-line.svg';
import ic2 from '../assets/emotion-line.svg';
import ic3 from '../assets/brain.svg';
import ic4 from '../assets/speak-ai-line.svg';
import ic5 from '../assets/magic-line.svg';
import ic6 from '../assets/zzz-line.svg';

import smartActImg from '../assets/smartgame.png';
import bodyMoveImg from '../assets/boyy.png';
import creativeActImg from '../assets/creativeact.png';

import './Parenting.css';


const Parenting = () => {
    const commonSituations = [
    { id: 1, title: 'Eating & Mealtime', icon: ic1 },
    { id: 2, title: 'Emotions & Tantrums', icon: ic2 },
    { id: 3, title: 'Learning & Exploration', icon: ic3 },
    { id: 4, title: 'Communication', icon: ic4 },
    { id: 5, title: 'Sleep', icon: ic5 },
    { id: 6, title: 'Social Behaviour', icon: ic6 }
  ];

  const activities = [
    {
      id: 1,
      title: 'Smart Activities',
      description: 'Encourage creativity and improve hand coordination.',
      image: smartActImg,
    },
    {
      id: 2,
      title: 'Body Movement',
      description: 'Running and climbing help build strength and coordination.',
      image: bodyMoveImg,
    },
    {
      id: 3,
      title: 'Creative activities',
      description: 'Encourage creativity and improve hand coordination.',
      image: creativeActImg,
    },
  ];
    return ( <>

    <Navbar />
    <img className='homebg' src={parentbg} alt='ayla-app_paerenting-bg'/>
            <div className='home_header'>
                <img src={logo_ayla_app} alt='logo_ayla_app' />
                <div className='row_profile'>
                    <img src={profile} alt='profile' />
                    <img src={menu} alt='menu' />
                </div>
            </div>

   <div className="parenting_page">
      <header className="page_header">
        <p className="header_title">Yassin is now a Toddler (1-3 years)</p>
        <p className="header_subtitle">
          Your child is learning independence, communication, and emotions.
        </p>
      </header>

      <div className="stage_card">
        <p className="card_label"
        >Toddler Stage:</p>
        <p className="card_link">Learn About Your Toddler</p>
        <div className="progress_bar_container">
          <div className="progress_fill"></div>
        </div>
      </div>

      <ul className="info_list">
        <li>Understanding your toddler <span className="arrow">❯</span></li>
        <li>Communication & Language <span className="arrow">❯</span></li>
        <li>Mealtime & Nutrition <span className="arrow">❯</span></li>
        <li>Social Skills <span className="arrow">❯</span></li>
      </ul>

      <section className="situations_section">
        <h2 className="section_title">Common Situations</h2>
        <div className="situations_grid">
          {commonSituations.map(item => (
            <div key={item.id} className="situation_card">
              <img className="situation_icon" src={item.icon} alt={item.title} />
              <p className="situation_title">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="awareness_section">
        <h2 className="awareness_title">Healthy Development Awareness</h2>
        <p className="awareness_text">
          Your child is learning independence, communication, and emotions.
        </p>
        <div className="support_list">
          <p className="support_label">Signs your toddler may need extra support:</p>
          <ul>
            <li>• no words by age two</li>
            <li>• no eye contact</li>
            <li>• no response to name</li>
            <li>• repetitive unusual behaviors</li>
          </ul>
        </div>
      </section>

     <section className="activities_container">
      <h2 className="section_title_main">Suggested Activities to do with kid</h2>
      
      <div className="activities_list">
        {activities.map(activity => (
          <div key={activity.id} className="activity_card">
            <div className="activity_img_container">
              <img src={activity.image} alt={activity.title} className="activity_img" />
            </div>
            <div className="activity_details">
              <h3 className="activity_card_title">{activity.title}</h3>
              <p className="activity_description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <br></br>
    <br></br>
    <br></br>


    </div>

    
    
    
    </> );
}
 
export default Parenting;