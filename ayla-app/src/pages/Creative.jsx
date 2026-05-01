import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Creative.css';

const Creative = () => {
  const navigate = useNavigate();
  const [openCardId, setOpenCardId] = useState(null);

  
  const currentLang = localStorage.getItem('appLanguage') || 'en';

  const activities = [
    {
      id: 1,
      title: 'Color Sorting Game',
      titleAr: 'لعبة تصنيف الألوان',
      img: 'https://zqzrnpngtywsdfqsnvez.supabase.co/storage/v1/object/public/ayla%20assets/creative1.png',
      skill: 'Color recognition and early thinking skills.',
      skillAr: 'التعرف على الألوان ومهارات التفكير المبكر.',
      need: 'Colored cups or bowls and small toys.',
      needAr: 'أكواب أو أوعية ملونة وألعاب صغيرة.',
      play: 'Place toys in front of your toddler and ask them to match each toy with the cup that has the same color.',
      playAr: 'ضعي الألعاب أمام طفلك واطلبي منه مطابقة كل لعبة مع الكوب الذي له نفس اللون.',
      tip: 'Celebrate when they try, even if they don’t match correctly.',
      tipAr: 'احتفلي عندما يحاولون، حتى لو لم يتطابقوا بشكل صحيح.'
    },

  ];

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div className="creative_page">
      <header className="creative_header">
        <button className="back_btn" onClick={() => navigate(-1)}>❮</button>
        <h1 className="header_title">
          {currentLang === 'ar' ? 'أنشطة إبداعية' : 'Creative Activities'}
        </h1>
      </header>

      <div className="activities_container">
        {activities.map((item) => (
          <div key={item.id} className={`activity_card ${openCardId === item.id ? 'open' : ''}`}>
            
            
            <div className="card_image_wrapper" onClick={() => toggleCard(item.id)}>
              <img src={item.img} alt={item.title} className="card_img" />
            </div>

            
            <div className="card_header_toggle" onClick={() => toggleCard(item.id)}>
              <span>{currentLang === 'ar' ? item.titleAr : item.title}</span>
              <span className={`arrow_icon ${openCardId === item.id ? 'rotate' : ''}`}>⌃</span>
            </div>

            
            {openCardId === item.id && (
              <div className="card_details_content">
                <div className="detail_section">
                  <h3>{currentLang === 'ar' ? 'المهارة المتطورة' : 'Skill developed'}</h3>
                  <p>{currentLang === 'ar' ? item.skillAr : item.skill}</p>
                </div>

                <div className="detail_section">
                  <h3>{currentLang === 'ar' ? 'ماذا تحتاج' : 'What you need'}</h3>
                  <p>{currentLang === 'ar' ? item.needAr : item.need}</p>
                </div>

                <div className="detail_section">
                  <h3>{currentLang === 'ar' ? 'كيفية اللعب' : 'How to play'}</h3>
                  <p>{currentLang === 'ar' ? item.playAr : item.play}</p>
                </div>

                <div className="detail_section">
                  <h3 className="tip_label">{currentLang === 'ar' ? 'نصيحة' : 'Tip'}</h3>
                  <p>{currentLang === 'ar' ? item.tipAr : item.tip}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creative;