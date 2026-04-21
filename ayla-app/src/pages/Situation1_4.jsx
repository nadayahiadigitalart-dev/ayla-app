import React, { PureComponent } from 'react';
// import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import situ from '../assets/bg_situ.svg';
import replay from '../assets/replay.svg';
import situationImg from '../assets/situation1_2.svg';

import './Situation1.css';


const Situation1_4 = () => {


    return ( <>


     <section className='situation1_page'>
        <img className='situ' src={situationImg} alt='situation_img' />
        <div>
          <img className='situ_bg_3' src={situ} alt='bg_situation' />
          <div className='situ_col'>
        


           
            
           </div> 

          
              
              
        </div>
      </section>
    
    
    
    </> );
}
 
export default Situation1_4;