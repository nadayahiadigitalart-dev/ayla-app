import React, { PureComponent } from 'react';

import logo_ayla_app from '../assets/logo_ayla_app.svg';
import profile from '../assets/profile.png';
import menu from '../assets/menu.svg';
import arrow from '../assets/arrow.svg';
import homebg from '../assets/homebg.svg';
import baby from '../assets/baby_.png';
import play from '../assets/play.svg';
import babyImage from '../assets/babyimg.svg';
import parkImg from '../assets/park.png';
import deviceImg from '../assets/ImageWithFallback.png';
import strollerImg from '../assets/ImageWithFallback-1.png'; 




import './Home.css';
import Navbar from '../components/Navbar';


const Home = () => {

      const products = [
        { id: 1, name: 'Smart Baby Device', price: '2,500EGP', rating: '4.8', img: deviceImg },
        { id: 2, name: 'Comfort Stroller', price: '3,500EGP', rating: '4.8', img: strollerImg }
      ];
    


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

        

        <div className="expert-container">
      <p className="section-titlee">Talk to Parenting Experts</p>
      
      <div className="expert-card">
       
        <img src={babyImage} alt="Baby playing" className="card-bg-image" />
        
       
        <div className="card-content">
         
          <p className="card-description">
            Get answers from pediatricians, psychologists, and child development specialists
          </p>
          
          <ul className="benefits-list">
            <li className='prem_check' >Ask personal parenting questions</li>
            <li className='prem_check'>Receive expert guidance</li>
            <li className='prem_check' >Learn from other parents' questions</li>
          </ul>
          
          <button className="premium-btn">
            Subscribe to Premium
          </button>
        </div>
      </div>
    </div>

    <div className="section-wrapper">
      <div className="section-header">
        <h2 className="main-title">Discover Nearby</h2>
        <span className="view-all">View all ❯</span>
      </div>
      <p className="subtitle">Sunny park is near you, Do you want to see details?</p>
      
      <div className="nearby-card">
        <img src={parkImg} alt="Sunny Park" className="nearby-img" />
        <div className="nearby-info">
          <h3 className="location-name">Sunny Park Playground</h3>
          <div className="nearby-meta">
            <span className="rating">⭐ 4.8</span>
            <span className="distance">📍 0.8 km</span>
          </div>
        </div>
      </div>
    </div>


    <div className="section-wrapper">
      <div className="section-header">
        <h2 className="main-title">Recommended Products</h2>
        <span className="view-all">View all ❯</span>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-img-container">
               <img src={product.img} alt={product.name} className="product-img" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-meta">
                <span className="price">{product.price}</span>
                <span className="rating">⭐ {product.rating}</span>
              </div>
              <button className="read-more-btn">Read More ➔</button>
            </div>
          </div>
        ))}
      </div>
    </div>




    </section>
    
    
    </> );
}
 
export default Home;