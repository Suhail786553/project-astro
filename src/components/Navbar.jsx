// import 'Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/"><img src="https://app.shiprocket.in/sr_login/assets/images/srlogo.svg " alt="logo"></img></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Home</a></li>
            <li><a className="dropdown-item" href="/about">About Us</a></li>
            <li><a className="dropdown-item" href="/shop">Shop</a></li>
            <li><a className="dropdown-item" href="/contact">Contact Us</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/shop">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact us</a>
        </li>
      </ul>

    </div>
      {/* <button className="btn btn-primary" type="submit">Bind With Us</button> */}
  </div>
</nav>
    </div>
  );
}
