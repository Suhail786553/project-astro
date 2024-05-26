import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for your styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo"><img src="https://app.shiprocket.in/sr_login/assets/images/srlogo.svg
" alt="logo"></img></div>
      <div className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
     {/* <a href="#link" className="navbar-item">Link</a> */}
        <div className="navbar__item">
          <button className="dropdown__button">Home</button>
          <div className="dropdown__content">
            <a href="#link1">Home 01</a>
            <a href="#link2">Home 02</a>
          </div>
        </div>
        <div className="navbar-item">
        <a href="#home" className="navbar__item">About Us</a>
        </div>
        <div className="navbar__item">
          <button className="dropdown__button">Pages</button>
          <div className="dropdown__content">
            <a href="#link4">Link 4</a>
            <a href="#link5">Link 5</a>
          </div>
        </div>
        <div className="navbar-item">
        <a href="#home" className="navbar__item">Shop</a>
        </div>
        <div className="navbar-item">
        <a href="#home" className="navbar__item">Contact</a>
        </div>
        
      </div>
      <div className="navbar__actions">
        <div className="navbar__ecart">🛒</div>
        <button className="navbar__button">BIND WITH US</button>
        <button className="navbar__toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
