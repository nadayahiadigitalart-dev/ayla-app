import React, { PureComponent } from 'react';
// import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import situationImg from '../assets/bg_situation.svg';
import situ from '../assets/bg_situ.svg';
import replay from '../assets/replay.svg';
import situationImg from '../assets/situation1_2.svg';

import './Situation1.css';


const Situation1_3 = () => {


    return ( <>


     <section className='situation1_page'>
        <img className='situ' src={situationImg} alt='situation_img' />
        <div>
          <img className='situ_bg_3' src={situ} alt='bg_situation' />
          <div className='situ_col'>
          <Link to='/situation1'style={{ textDecoration: 'none' }} >
           <div className='replay_sit'>
            <img className='replay_icon' src={replay} alt='replay_icon' />
            <p className='replay_text'>Replay</p>
            </div>
          </Link>


            <p className='animate_font2'>You’re tired and just want them to eat. What will you say?</p>
            <div className='col_options'>
                <div className='option_card'>
                    <p className='abc'>A</p>
                    <p className='option'>“If you eat three big bites, you can have a cookie after.”</p>
                </div>

                  <div className='option_card'>
                    <p className='abc'>B</p>
                    <p className='option'>“Look! Here comes the airplane! Open wide!”</p>
                </div>

            <Link to='/situation1_4'   style={{ textDecoration: 'none' }} >
                  <div className='option_card'>
                    <p className='abc'>C</p>
                    <p className='option'>"It looks like you aren't ready for pasta.
                         Would you like to eat with the 'Big Grown-up Fork' or your 
                         'Blue Plastic Spoon'?"</p>
                </div>
            </Link>
            </div>
           </div> 

          
              
              
        </div>
      </section>
    
    
    
    </> );
}
 
export default Situation1_3;