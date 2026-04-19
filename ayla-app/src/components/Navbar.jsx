import React from 'react';
import './Navbar.css';


import homeIcon from '../assets/Vector.svg';
import searchIcon from '../assets/search-line.svg';
import ideaIcon from '../assets/lightbulb-line.svg';
import communityIcon from '../assets/team-line.svg';
import notifyIcon from '../assets/fav.svg';

const Navbar = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-content">
        
      
        <div className="nav-item active">
          <div className="home-circle">
            <img src={homeIcon} alt="Home" className="nav-icon" />
          </div>
          <span className="nav-label active-label">Home</span>
        </div>

        <div className="nav-item">
          <img src={searchIcon} alt="Search" className="nav-icon" />
        </div>

        <div className="nav-item">
          <img src={ideaIcon} alt="Tips" className="nav-icon" />
        </div>

        <div className="nav-item">
          <img src={communityIcon} alt="Community" className="nav-icon" />
        </div>

        <div className="nav-item">
          <img className='ico' src={notifyIcon} alt="Alerts" className="nav-icon" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;