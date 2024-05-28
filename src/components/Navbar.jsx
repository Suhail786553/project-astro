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
        <div className="navbar__ecart"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></div>
        <button className="navbar__button">BIND WITH US</button>
        <button className="navbar__toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
