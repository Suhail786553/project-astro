import React from 'react';
import './About.css'

const About = () => {
  return (
    <div>
        <div className="about-container">
        <h1>About Us</h1>
        <h4>Home / About Us</h4>
    </div>
    <div className="container-6">
    <div className="bxx-1">
        <h1>Explore About Zaivest, Why People Select It.</h1>
    </div>
    <div className="logo-container">
        <img src="https://icon-library.com/images/rotation-icon/rotation-icon-17.jpg" alt="Zaivest Logo" className="rotating-logo"/>
    </div>
    <div className="bxx-2">
        <p>
            Stay informed, stay empowered – because when you understand your
            investments, that you're future better equipped to achieve your
            financial goals.
        </p>
        <div className="button-container">
            <button className="responsive-button1">CONTACT NOW</button>
        </div>
    </div>
</div>
    </div>
  );
}

export default About;
