import React, { useEffect, useState } from 'react';
import { Supabase } from '../Supabase'; 
import './EatSitu.css';

import safety from '../assets/safetyyy.png';
import bg_c from '../assets/Vector_situ_bg.svg';

const EatSitu = () => {
  const [situations, setSituations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchSituations();
  }, []);

  async function fetchSituations() {
    setLoading(true);
    
    const { data, error } = await Supabase
      .from('EatSitu')
      .select('id, title');

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setSituations(data);
    }
    setLoading(false);
  }

  return (<>
    <img className='bg_com' src={bg_c} alt='bg'/>

    <div className="eat-situ-container">
      <header className="header">
        <button className="back-button">‹</button>
        <h1 className="header-title">Situations</h1>
      </header>

      <h2 className="section-title">Explore Eating & Mealtime Situations</h2>
      
      {loading ? (
        <p>Loading situations...</p>
      ) : (
        situations.map((item) => (
          <button key={item.id} className="situation-btn">
            <span>{item.title}</span>
            <span className="arrow-pink">›</span>
          </button>
        ))
      )}

     
      {/* <h2 className="section-title">Safety & Concerns</h2>
      <div className="safety-card">
        <img 
          src={safety}
          alt="Toddler" 
          className="toddler-img" 
        />
        <div className="alert-bar">
          <div className="alert-icon-text">
            <span>⚠️</span>
            <span>Extremely Limited Diet</span>
          </div>
          <span>⌄</span>
        </div>
      </div> */}

     
<h2 className="section-title">Safety & Concerns</h2>
<div className="safety-card">
  <img 
    src={safety}
    alt="Toddler" 
    className="toddler-img" 
  />
{/*   
  <div className="reply-bg"> */}
  
  <div className="alert-bar" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
    <div className="alert-icon-text">
      <span>⚠️</span>
      <span>Extremely Limited Diet</span>
    </div>
    <span>{isOpen ? '⌃' : '⌄'}</span> 
  </div>

  
  {isOpen && (
    <div className="alert-details" style={{ padding: '15px', backgroundColor: '#fff', fontSize: '14px', color: '#333' }}>
      <p><strong>What you may notice</strong><br/>Your toddler only eats 1-2 foods and refuses everything else for weeks.</p>
      <p><strong>Why it matters</strong><br/>Some food preferences are normal, but a very limited diet may affect nutrition.</p>
      <p><strong>What you can do</strong></p>
      <ul>
        <li>Continue offering a variety of foods without pressure</li>
        <li>Eat together as a family</li>
        <li>Introduce new foods slowly and repeatedly</li>
      </ul>
      <p><strong>When to seek advice</strong><br/>If your child avoids many food groups or stops gaining weight.</p>
    </div>
  )}
</div>


<div className="expert-section">

  <h2 className="expert-title">Didn’t find your situation, ask Parenting expert</h2>
  <p className="expert-subtitle">Every child is different. If you want more guidance, you can ask a parenting advisor in the Ayla community.</p>

  <div className="community-card">
    
    <div className="question-header">
      <div className="user-info">
        <div className="avatar-placeholder"></div>
        <span className="user-name">Sarah Ahmed</span>
      </div>
      <button className="ask-tag">ask</button>
    </div>
    <p className="question-text">My toddler throws food on the floor every time he eats. Is he doing it on purpose?</p>
    
    <div className="interaction-bar">
       <span>❤️ 42 find this helpful</span>
       <span>💬 22</span>
    </div>

    
    <div className="expert-reply">
      <div className="user-info">
        <div className="avatar-placeholder"></div>
        <div>
          <span className="user-name">Sandy Kamal</span>
          <span className="expert-badge">Expert</span>
        </div>
      </div>
      <p className="reply-text">
        This behavior is common between ages 1–3. Toddlers are exploring cause and effect and also learning how adults react. 
        Instead of reacting strongly, calmly say: “Food stays on the table.” 
        If throwing continues, remove the plate and offer food again later...
      </p>
      <p className="expert-signature">— Dr. Sandy Kamal<br/>Child Behavior Specialist</p>
    </div>
  </div>

  <button className="ask-expert-btn">Ask Expert</button>
</div>
{/* </div> */}


    </div>
 </> );
};

export default EatSitu;