import React from 'react';
import './Discover.css';

// Assets (Using names from your project structure)
import parkImg from '../assets/park.png';
import deviceImg from '../assets/ImageWithFallback.png';
import strollerImg from '../assets/ImageWithFallback-1.png';
import Navbar from '../components/Navbar';

const Discover = () => {
  const categories = [
    { id: 1, name: 'Playgrounds', icon: '🛝' },
    { id: 2, name: 'Kids Cafés', icon: '☕' },
    { id: 3, name: 'Shops', icon: '🏪' },
    { id: 4, name: 'Therapy centers', icon: '🫙' },
    { id: 5, name: 'Family-Friendly', icon: '👥' },
    { id: 6, name: 'Workshops', icon: '🧩' }
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
          <span className="search_icon">🔍</span>
          <input type="text" placeholder="Search" className="search_input" />
        </div>

        <div className="category_grid">
          {categories.map(cat => (
            <div key={cat.id} className="category_card">
              <span className="cat_icon">{cat.icon}</span>
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