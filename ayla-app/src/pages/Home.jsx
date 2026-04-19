import React, { PureComponent } from 'react';

import logo_ayla_app from '../assets/logo_ayla_app.svg';
import profile from '../assets/profile.png';
import menu from '../assets/menu.svg';
import arrow from '../assets/arrow.svg';
import homebg from '../assets/homebg.svg';
import baby from '../assets/baby_.png';
import play from '../assets/play.svg';




import './Home.css';
import Navbar from '../components/Navbar';


const Home = () => {
    return ( <>

    <section className='home'>
        <img className='homebg' src={homebg} alt='ayla-app_paerenting-bg'/>
        <div className='home_header'>
            <img src={logo_ayla_app} alt='logo_ayla_app' />
            <div className='row_profile'>
                <img src={profile} alt='profile' />
                <img src={menu} alt='menu' />
            </div>
        </div>

        <Navbar />

        <section className='ask'>
           <p className='mf'>Ask ayla</p>
           <p className='sub_f'>Get quick guidance for parenting moments.</p>
           <div className='ask_col'>

           <input className='input_home' type='text' placeholder='What would you like help with today?' 
           />

           <div className='row_ask'>
            <p className='blue_f'>Generate bullet points for a lesson podcast</p>
            <img className='' src={arrow} alt='arrow' />
            </div>

             <div className='row_ask'>
            <p className='blue_f'>Products recommended</p>
            <img className='' src={arrow} alt='arrow' />
            </div>
           </div>


        </section>

        <section className='tip'>

            <img className='baby' src={baby} alt='parenting_tip' />
            
            <div className='tip_col'>
                <p className='bst'>Todays Parenting Tip</p>
                <p className='weird_f'>Stop being the "Boss" and start being silly! Use a robot voice or a funny whisper to turn boring chores into a game. This stops the power struggle and gets your toddler excited</p>
            </div>
        </section>

        <section className='podcast'>
            <p className='mf'>Continue Listening</p>
            <div className='podcast_row'>
                <img className='' src={play} alt=''/>
                <div className='podcast_col'>
                    <p className='pinkmf'>The Power of Choices</p>
                    <p className='pinkf'>Dr. Hend Sherif, Parenting Expert</p>
                </div>
            </div>
        </section>

         <section className='podcast'>
            <p className='mf'>What would you do in this situation</p>
            <p className='sub_f'>2 of 3 Completed</p>
            <div className='podcast_row'>
                <div className='_col'>
                   
                </div>
                <img className='' src={play} alt=''/>
            </div>
        </section>

        



    </section>
    
    
    </> );
}
 
export default Home;