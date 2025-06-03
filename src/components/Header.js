// src/components/Header.js
import React, { useState } from 'react'; // <<<< ENSURE useState IS IMPORTED FROM 'react'
import { Link, NavLink } from 'react-router-dom'; // <<<< ENSURE NavLink IS IMPORTED (Link too, if used)
import '../styles/Header.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Assuming you added these for footer, not needed here unless header uses them

// Placeholder logo URLs - REPLACE with your actual imported images
// For the dark header, these should be light-colored logos
// import proskillLogoForHeader from '../assets/proskill-logo-white.svg'; // Or your actual white logo file
// import mascotLogoForHeader from '../assets/mascot-logo-white.png'; // Or your actual white logo file


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Now useState is defined

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Using text placeholders for logos if actual image imports are problematic
  const proskillLogoText = "PROSKILL";
  const mascotLogoText = "MASCOT® WORKWEAR";


  return (
    <header className={`site-header site-header-homepage ${isMobileMenuOpen ? 'mobile-menu-is-open' : ''}`}>
      <div className="header-container-homepage">
        <div className="logo-group-homepage">
          <Link to="/" className="proskill-logo-link"> {/* Link is also from react-router-dom */}
            {/* If using imported image: <img src={proskillLogoForHeader} alt="ProSkill Australia" className="proskill-logo-header" /> */}
            <span className="proskill-logo-header-text">{proskillLogoText}</span>
          </Link>
          {/* If using imported image: <img src={mascotLogoForHeader} alt="Mascot Workwear" className="mascot-logo-header" /> */}
          <span className="mascot-logo-header-text">{mascotLogoText}</span>
        </div>

        <div className="header-actions-homepage">
          <button className="icon-button-homepage search-icon" aria-label="Search">
            🔍
          </button>
          <button
            className="icon-button-homepage menu-toggle-icon"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-navigation-homepage">
          <NavLink to="/" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-mobile-link" : ""}>Home</NavLink>
          <NavLink to="/brands" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-mobile-link" : ""}>Brands</NavLink>
          <NavLink to="/specials" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-mobile-link" : ""}>Specials</NavLink>
          <NavLink to="/contact" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-mobile-link" : ""}>Contact</NavLink>
          {/* Add other important links from ProSkill */}
        </nav>
      )}
    </header>
  );
};

export default Header;