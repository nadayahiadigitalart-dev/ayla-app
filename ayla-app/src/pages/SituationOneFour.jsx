import React, { PureComponent } from 'react';
// import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import warn from '../assets/warn.svg';
import info from '../assets/info.svg';

import situ from '../assets/bg_situ.svg';
import replay from '../assets/replay.svg';
import situationImg from '../assets/chooseing_situ_1_4.svg';

import './SituationOne.css';


const SituationOneFour = () => {


    return ( <>


     <section className='situation1_page'>
        <img className='situ' src={situationImg} alt='situation_img' />
        <div>
          <img className='situ_bg_3' src={situ} alt='bg_situation' />
          <div className='situ_col'>
        
        <div className='col_sito'>
            <p className='pinko'>Effect</p>
            <p className='fo'>The toddler’s brain shifts from "Fighting Mom"
                 to "Making a Decision." By giving them a small bit of
                  power, you satisfy their developmental need 
                  for Autonomy.</p>
        </div>

         <div className='col_sito'>
            <p className='pinko'>Long-Term Impact</p>
            <p className='fo'>You are raising a Confident Decision Maker. 
                They learn that their voice matters within safe 
                boundaries, which reduces "No" as a default response 
                later.</p>
        </div>

         <div className='col_sito'>
            <p className='pinko'>Why this happen?</p>
            <p className='fo'>Toddlers say "No" to prove they are a 
                separate person from you. Giving "Limited Choices" 
                (only 2 options) lets them feel independent without you 
                losing control of the routine.</p>
        </div>

         <div className='row_sito_p'>
            <img className='replay_icon' src={warn} alt='warning_icon' />
            <p className='fo2'>Take care if you notice your child 
                eat only one brand or type of food. This may be a sign of 
                "Sensory Processing Disorder" and you should consult a 
                pediatrician.</p>
        </div>
            
        

         <div className='row_sito_y'>
            <img className='replay_icon' src={info} alt='advice_icon' />
            <p className='fo2'>Make the choices silly! "Do you want
                 to eat like a quiet mouse or a loud lion?" Play 
                 is the fastest way to end a mealtime standoff.</p>
        </div>

        <div className='two_buttons'>
            <div className='ask_bu'>Ask an Expert</div>
            <div className='back_bu'>Back to situations</div>
        </div>


           
            
           </div> 

          
              
              
        </div>
      </section>
    
    
    
    </> );
}
 
export default SituationOneFour;