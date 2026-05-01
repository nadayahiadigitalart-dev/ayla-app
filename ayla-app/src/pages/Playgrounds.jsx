import React, { useEffect, useState } from 'react';
import { Supabase } from '../Supabase'; 
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Playgrounds.css';


import kidsStationImg from '../assets/park.png'; 
import filterIcon from '../assets/filter.svg';

const Playgrounds = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlaygrounds();
  }, []);

  const fetchPlaygrounds = async () => {

    const { data, error } = await Supabase
      .from('Discover')
    .select('*')
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
          Near by <img className="filter_icon" src={filterIcon} alt="Filter" />
        </button>
      </div>

      
      <div className="places_list">
        {places.map((place, index) => (
          <Link to={`/placedetails/${place.title}`} className="place_link" >
          <div key={index} 
          className="place_card"
          
          
          >
            
            <div className="place_img_container">
             
              <img src={place.img_card} alt={place.title} className="place_img" />

            </div>
            <div className="place_info">
              <h3 className="place_name">{place.title}</h3>
              <div className="place_meta">
                <span className="place_location_tag">{place.locate}</span>
                <div className="place_distance">

                     {place.km} km</div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>

     

      <Navbar />
    </div>
  );
};

export default Playgrounds;