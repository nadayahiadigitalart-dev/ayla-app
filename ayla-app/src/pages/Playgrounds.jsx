import React, { useEffect, useState } from 'react';
import { Supabase } from '../Supabase'; 
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Playgrounds.css';


import kidsStationImg from '../assets/park.png'; 

const Playgrounds = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlaygrounds();
  }, []);

  const fetchPlaygrounds = async () => {

    const { data, error } = await Supabase
      .from('Discover')
      .select('title, km, locate')
      .eq('category', 'kid-friendly'); 

    if (error) console.error('Error fetching data:', error);
    else setPlaces(data);
  };

  return (
    <div className="playgrounds_page">
    
      <header className="places_header">
        <button className="back_btn" onClick={() => navigate(-1)}>❮</button>
        <h1 className="places_title">Find Helpful Places Near You</h1>
      </header>

      
      <div className="filter_container">
        <button className="near_by_filter">
          Near by <span className="filter_icon">⚙️</span>
        </button>
      </div>

      
      <div className="places_list">
        {places.map((place, index) => (
          <div key={index} className="place_card">
            <div className="place_img_container">
              <img src={kidsStationImg} alt={place.title} className="place_img" />
            </div>
            <div className="place_info">
              <h3 className="place_name">{place.title}</h3>
              <div className="place_meta">
                <span className="place_location_tag">{place.locate}</span>
                <span className="place_distance">📍 {place.km} km</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navbar />
    </div>
  );
};

export default Playgrounds;