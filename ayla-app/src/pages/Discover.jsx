import React from 'react';
import './Discover.css';


import parkImg from '../assets/park.png';
import deviceImg from '../assets/ImageWithFallback.png';
import strollerImg from '../assets/ImageWithFallback-1.png';
import Navbar from '../components/Navbar';
import discoverbg from '../assets/discoverbg.svg';
import playground from '../assets/playground.png';
import kidscafe from '../assets/kidscafe.png';
import shops from '../assets/shops.png';
import kindergarten from '../assets/kindergarten.png';
import familyfriendly from '../assets/Familyfriendly.png';
import clinics from '../assets/bxs_clinic.png';
import discov from '../assets/search-line.svg';

import { useNavigate } from 'react-router-dom';



const Discover = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: 'Playgrounds', icon: playground, to: '/playgrounds', path: '/playgrounds' },
    { id: 2, name: 'Kids Cafés', icon: kidscafe },
    { id: 3, name: 'Shops', icon: shops },
    { id: 4, name: 'Kindergartens', icon: kindergarten },
    { id: 5, name: 'Family-Friendly', icon: familyfriendly },
    { id: 6, name: 'Clinics', icon: clinics },
  ];

  const products = [
    { id: 1, name: 'Smart Baby Device', price: '2,500EGP', rating: '4.8', img: deviceImg },
    { id: 2, name: 'Comfort Stroller', price: '3,500EGP', rating: '4.8', img: strollerImg }
  ];

  return (
    <div className="discover_page">
      <section className="discover_header">
        <h1 className="main_title_dark">Discover Near You</h1>
        <div className="search_container">
          <img className="search_icon" src={discov} alt='search_icon' />
          <input type="text" placeholder="Search" className="search_input" />
        </div>

        <div className="category_grid">
          {categories.map(cat => (
            <div key={cat.id} className="category_card"
            onClick={() => navigate(cat.path)} 
            style={{ cursor: 'pointer' }}
            >
              <img className="cat_icon" src={cat.icon} alt='category_discover_ayla_icon' />
              <p className="cat_name">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      


      <Navbar />
    </div>
  );
};

export default Discover;