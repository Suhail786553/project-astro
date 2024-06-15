// src/PhotoCardSlider.js
import React, { useState } from 'react';
import './PhotoCardSlider.css'; // CSS file for styling

const PhotoCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      photox: 'https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7ad24148dc489be2381e_testimonial%20img%202.png',
      contentx: '“Take a personalized approach to investment management. our advisors work closely with you to understand your risk tolerance, time horizon, and financial aspirations. through careful analysis and the commitment to your unique needs, we craft investment strategies that are as individual.”',
      smallPhotox: 'https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7a4443b671410e503871_testimonial%20company%20logo.svg'
    },
    {
      photox: 'https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7af62e5dd9cd5b8d143b_testimonial%20img%203.png',
      contentx: '“We leverage cutting-edge technology and data analytics to optimize your investment portfolio continuously. from automated rebalancing to real-time performance tracking, our tools are designed to provide you with a seamless and transparent investment experience.”',
      smallPhotox: 'https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7a4443b671410e503871_testimonial%20company%20logo.svg'
    },
    {
      photox: 'https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7624e067fb0a2ea3e010_testimonial%20img.png',
      contentx: '“ Investments requires a blend of expertise, insight, and a forward-thinking approach. Our seasoned team of the financial professionals is dedicated to providing tailored investment solutions that align with your unique financ-ial goals. Whether you leverage conditon followed',
      smallPhotox: 'https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7a4443b671410e503871_testimonial%20company%20logo.svg'
    }
  ];
  const backgroundColors = ['#b83d42', '#64cac8','#06c'];
  

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="containerx">
      <div className="photox">
        <img src={data[currentIndex].photox} alt="Photo" />
      </div>
      <div className="cardx" style={{ backgroundColor: backgroundColors[currentIndex] }}>
        <div className="contentx">
          {data[currentIndex].contentx}
        </div>
        <div className="small-photo">
          <img src={data[currentIndex].smallPhotox} alt="Small Photo" />
        </div>
      </div>
      <div className="buttonsx">
        <button onClick={handlePrev}>←</button>
        <button onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default PhotoCardSlider;
