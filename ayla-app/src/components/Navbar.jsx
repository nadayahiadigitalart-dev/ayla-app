import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

import { useLocation } from 'react-router-dom';


import homeIcon from '../assets/Vector.svg';
import searchIcon from '../assets/search-line.svg';
import ideaIcon from '../assets/lightbulb-line.svg';
import communityIcon from '../assets/team-line.svg';
import heartIcon from '../assets/fav.svg';

const Navbar = () => {
  const navigate = useNavigate();
//   const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();

  const menuItems = [
    { name: 'Home', icon: homeIcon, path: '/home' },
    { name: 'Discover', icon: searchIcon, path: '/discover' },
    { name: 'Parenting', icon: ideaIcon, path: '/parenting' },
    { name: 'Community', icon: communityIcon, path: '/community' },
    { name: 'Favourite', icon: heartIcon, path: '/favourite' },
  ];

//   const handleNavigation = (index, path) => {
//     setActiveIndex(index);
//     navigate(path);
//   };

  return (
    <nav className="bottom-nav">
      <div className="nav-content">
        {menuItems.map((item, index) => {
          // Check if the current URL matches this item's path
          const isActive = location.pathname === item.path;

          return (
            <div 
              key={index} 
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <div className="icon-container">
                <img src={item.icon} alt={item.name} className="nav-icon" />
              </div>
              <span className="nav-label">{item.name}</span>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

























// import React from 'react';
// import './Navbar.css';


// import homeIcon from '../assets/Vector.svg';
// import searchIcon from '../assets/search-line.svg';
// import ideaIcon from '../assets/lightbulb-line.svg';
// import communityIcon from '../assets/team-line.svg';
// import notifyIcon from '../assets/fav.svg';

// const Navbar = () => {
//   return (
//     <nav className="bottom-nav">
//       <div className="nav-content">
        
      
//         <div className="nav-item active">
//           <div className="home-circle">
//             <img src={homeIcon} alt="Home" className="nav-icon" />
//           </div>
//           <span className="nav-label active-label">Home</span>
//         </div>

//         <div className="nav-item">
//           <img src={searchIcon} alt="Search" className="nav-icon" />
//         </div>

//         <div className="nav-item">
//           <img src={ideaIcon} alt="Tips" className="nav-icon" />
//         </div>

//         <div className="nav-item">
//           <img src={communityIcon} alt="Community" className="nav-icon" />
//         </div>

//         <div className="nav-item">
//           <img className='ico' src={notifyIcon} alt="Alerts" className="nav-icon" />
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;