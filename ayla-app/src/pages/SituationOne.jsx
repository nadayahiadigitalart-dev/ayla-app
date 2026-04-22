// import React, { PureComponent } from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import situationImg from '../assets/bg_situation.svg';
import situ from '../assets/bg_situ.svg';

import './SituationOne.css';

const SituationOne = () => {

  const navigate = useNavigate(); 
  const fullText = "It’s lunch time! You’ve made a healthy meal for your toddler..";
  const words = fullText.split(" ");
  const [displayedWords, setDisplayedWords] = useState([]);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartTyping(true);
    }, 1000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (startTyping) {
      if (displayedWords.length < words.length) {
       
        const typingTimer = setTimeout(() => {
          setDisplayedWords((prev) => [...prev, words[prev.length]]);
        }, 200);
        return () => clearTimeout(typingTimer);
      } else {
        
        const transitionTimer = setTimeout(() => {
          navigate('/situation1_2'); 
        }, 1500); 
        return () => clearTimeout(transitionTimer);
      }
    }
  }, [startTyping, displayedWords, words, navigate]);

    return ( <>


     <section className='situation1_page'>
        <img className='situ' src={situationImg} alt='situation_img' />
        <div>
          <img className='situ_bg' src={situ} alt='bg_situation' />
          <p className='animate_font'>
            {displayedWords.map((word, index) => (
              <span key={index} className="word-fade">
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </section>
    
    
    
    </> );
}
 
export default SituationOne;