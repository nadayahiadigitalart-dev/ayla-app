import React, { PureComponent } from 'react';

import logo_ayla_app from '../assets/logo_ayla_app.svg';


import './Home.css';


const Home = () => {
    return ( <>

    <section className='home'>
        <div className='home_header'>
            <img src={logo_ayla_app} alt='logo_ayla_app' />
            <div className='row_profile'>
                <img src={profile} alt='profile' />
                <img src={menu} alt='menu' />
            </div>
        </div>

        <section className='ask'>
           <p className='mf'>Ask ayla</p>
           <p className='sub_f'>Get quick guidance for parenting moments.</p>
           <input className='' type='text' placeholder='What would you like help with today?' 
           />

           <div className='row_ask'>
            <p className='blue_f'>Generate bullet points for a lesson podcast</p>
            <img className='' src={arrow} alt='arrow' />
            </div>

             <div className='row_ask'>
            <p className='blue_f'>Products recommended</p>
            <img className='' src={arrow} alt='arrow' />
            </div>

        </section>


    </section>
    
    
    </> );
}
 
export default Home;