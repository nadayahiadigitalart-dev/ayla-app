// import React, { PureComponent } from 'react';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import situationImg from '../assets/situation1_2.svg';
import situ from '../assets/bg_situ.svg';

import './Situation1.css';


const Situation1_2 = () => {

  const navigate = useNavigate(); 
  const fullText = "But your toddler is refusing to take a single bite and is asking for a snack instead. |  | You’re tired and just want them to eat. What will you say?";  
  const words = fullText.split(" ");
  
  const [displayedWords, setDisplayedWords] = useState([]);
  const [startTyping, setStartTyping] = useState(false);
  const [showButton, setShowButton] = useState(false); // 1. New state for the button

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
        }, 150); 
        return () => clearTimeout(typingTimer);
      } else {
        
        const buttonTimer = setTimeout(() => {
          setShowButton(true);
        }, 500);
        return () => clearTimeout(buttonTimer);
      }
    }
  }, [startTyping, displayedWords, words]);

    return ( 


     <section className='situation1_page'>
        <img className='situ' src={situationImg} alt='situation_img' />
        <div>
          <img className='situ_bg' src={situ} alt='bg_situation' />
          <p className='animate_font'>
          {displayedWords.map((word, index) => {
            
            if (word === "|") {
              return <br key={index} />;
            }
            return (
              <span key={index} className="word-fade">
                {word}{" "}
              </span>
            );
          })}
          </p>

        
        {showButton && (
          <Link to="/situation1_3" className="fade-in-button"> 
            <button className='buttonn'>See Options</button>
          </Link>
        )}
        </div>
      </section>
    
    
    
     );
}
 
export default Situation1_2;