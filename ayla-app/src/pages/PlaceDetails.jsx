import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Supabase } from '../Supabase'; 
import './PlaceDetails.css';

const PlaceDetails = () => {
  const { title } = useParams(); 
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check language preference
  const currentLang = localStorage.getItem('appLanguage') || 'en';

  useEffect(() => {
    const fetchDetails = async () => {
      const { data, error } = await Supabase
        .from('Discover')
        .select('*')
        .eq('title', title) // Ensure this matches the title passed in the URL
        .single(); 

      if (error) {
        console.error('Error fetching from Supabase:', error);
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
        {/* The back arrow will automatically flip if you set dir="rtl" on the body */}
        <button className="back_btn_white" onClick={() => navigate(-1)}>❮</button>
        <img src={details.imgg || '/assets/park.png'} alt={details.title} className="hero_img" />
      </div>

      <div className="details_content">
        <h1 className="details_title">
          {currentLang === 'ar' ? (details.titleAR || details.title) : details.title}
        </h1>
        
        <p className="details_description">
          {currentLang === 'ar' ? details.descAR : details.desc}
        </p>

        <div className="info_box">
          <div className="info_item">
            <p>
              <strong>{currentLang === 'ar' ? 'ساعات العمل:' : 'Opening Hours:'}</strong> 
              {currentLang === 'ar' ? details.timeAR : details.time}
            </p>
          </div>
          <div className="info_item">
            <p>
              <strong>{currentLang === 'ar' ? 'الموقع:' : 'Location:'}</strong> 
              {currentLang === 'ar' ? details.locateAR : details.locate}
            </p>
          </div>
        </div>

        {/* <section className="photo_section">
          <h2 className="section_label">
            {currentLang === 'ar' ? 'شاهد المزيد من الصور' : 'See more Photos of this place'}
          </h2>
          <div className="photo_grid">
           
            <img src={details.img_card} alt="view 1" />
            <img src={details.imgg} alt="view 2" />
          </div>
        </section> */}

        <section className="reviews_section">
          <h2 className="section_label_center">
            {currentLang === 'ar' ? 'آراء  الامهات' : 'Parent Reviews'}
          </h2>
          <div className="review_card">
            <div className="review_avatar"></div>
            <p className="review_text">
              {currentLang === 'ar' 
                ? '"أحب أطفالي هذا المكان. منطقة الألعاب آمنة ونظيفة للغاية."' 
                : '"My kids loved this place. The play area is very safe and clean."'}
            </p>
            <p className="review_author">~ {currentLang === 'ar' ? 'هدى عبد السلام' : 'Huda Abdelsalam'}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlaceDetails;