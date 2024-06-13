import React, { useState, useEffect } from 'react';
import './Card.css';

const cardsData = [
  {
    img: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbb06cc8f6de9337b459c1_investment%20img%203.png',
    logo: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbafcd12f2fd3fed6a9045_investment%20slider%20icon%203.svg', // Add logo URL
    title: 'Software Companies',
    description: 'Teams deep understanding of international markets, combined with a commitment to staying abreast of regional nuances',
  },
  {
    img: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb94fbc99652b4b054ad0d_investment%20img%201.png',
    logo: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbaf75bb284cda9f6e1ea5_investment%20slider%20icon%201.svg', // Add logo URL
    title: 'Hardware Companies',
    description: 'Thats why we provide our clients with a wealth of educational resources, market insights, and timely updates.',
  },
  {
    img: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbb5b7ba503297dc20a030_investment%20img%202.png',
    logo: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb9379c8f6de9337a270bd_testimonial%20slider%20icon%201.svg', // Add logo URL
    title: 'Mobile App Companies',
    description: 'Trusted investment partner, commitment is to empower you on the path to financial prosperity on the software companies.',
  },
  {
    img: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbb598f9e3ad4438f0fc00_investment%20img%204.png',
    logo: 'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbb089854c9ab370213f47_investment%20slider%20icon%204.svg', // Add logo URL
    title: 'Chemical Companies',
    description: 'Trusted investment partner, commitment is to empower you on the path to financial prosperity on the software companies.',
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideCards = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= cardsData.length) {
      newIndex = cardsData.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="app">
      <div className="card-slider">
        <div className="card-container" style={{ transform: `translateX(-${currentIndex * (isMobile ? 30 : 65)}%)` }}>
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <img src={card.logo} alt="Logo" className="card-logo" />
                <h1>{card.title}</h1>
                <h5>{card.description}</h5>
              </div>
              <img src={card.img} alt={card.title} className="card-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={() => slideCards(-1)}>Prev</button>
        <button onClick={() => slideCards(1)}>Next</button>
      </div>
    </div>
  );
};

export default App;
