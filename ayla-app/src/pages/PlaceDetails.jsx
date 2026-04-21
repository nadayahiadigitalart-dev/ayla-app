import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Supabase } from '../Supabase'; 
import './PlaceDetails.css';

const PlaceDetails = () => {
  const { title } = useParams(); 
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      const { data, error } = await Supabase
        .from('Discover')
        .select('*')
        .eq('title', title)
        .single(); 

      if (error) {
        console.error('Error:', error);
      } else {
        setDetails(data);
      }
      setLoading(false);
    };

    fetchDetails();
  }, [title]);

  if (loading) return <div className="loading">Loading details...</div>;
  if (!details) return <div className="error">Place not found.</div>;

  return (
    <div className="details_page">
      <div className="hero_image_container">
        <button className="back_btn_white" onClick={() => navigate(-1)}>❮</button>
        <img src={details.image_url || '/assets/park.png'} alt={details.title} className="hero_img" />
      </div>

      <div className="details_content">
        <h1 className="details_title">{details.title}</h1>
        <p className="details_description">{details.description}</p>

        <div className="info_box">
          <div className="info_item">
            
            <p><strong>Opening Hours:</strong> {details.hours}</p>
          </div>
          <div className="info_item">
           
            <p>{details.address}</p>
          </div>
        </div>

        <section className="photo_section">
          <h2 className="section_label">See more Photos of this place</h2>
          <div className="photo_grid">
           
            <img src={details.image_url} alt="view 1" />
            <img src={details.image_url} alt="view 2" />
          </div>
        </section>

        <section className="reviews_section">
          <h2 className="section_label_center">Parent Reviews</h2>
          <div className="review_card">
            <div className="review_avatar"></div>
            <p className="review_text">"My kids loved this place. The play area is very safe and clean."</p>
            <p className="review_author">~ Huda Abdelsalam</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlaceDetails;