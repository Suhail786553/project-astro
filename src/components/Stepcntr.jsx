import React, { useEffect, useState } from 'react';
import './Stepcntr.css';

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png',
    'https://neotalenta.com/wp-content/uploads/2014/04/IT-project.jpg',
    'https://www.liquidplanner.com/wp-content/uploads/2019/04/7022318_IT-big-projects.jpg',
    'https://learn.g2crowd.com/hubfs/iStock-1135541613.jpg'
  ];

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="containers">
      <div className="step-connector">
        <div className="step">
          <div className="step-circle">01</div>
          <div className="step-label">Step</div>
          <div className="step-description">
            <h4 className="hfr">Discovery &#8594;</h4>
          </div>
        </div>
        <div className="step">
          <div className="step-circle">02</div>
          <div className="step-label">Step</div>
          <div className="step-description">
            <h4>Research</h4>
          </div>
        </div>
        <div className="step">
          <div className="step-circle">03</div>
          <div className="step-label">Step</div>
          <div className="step-description">
            <h4>Planning</h4>
          </div>
        </div>
        <div className="step">
          <div className="step-circle">04</div>
          <div className="step-label">Step</div>
          <div className="step-description">
            <h4>Investment</h4>
          </div>
        </div>
        <div className="buttons-step">
          <button className="one-btn">BIND US</button>
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="scroll-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`images ${currentImage === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
