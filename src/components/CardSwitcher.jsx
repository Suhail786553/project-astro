import React, { useState } from 'react';
import './styles.css'

const CardComponent = () => {
  const [current, setCurrent] = useState(0);
  const [photos] = useState([
    'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7ad24148dc489be2381e_testimonial%20img%202.png',
    'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7af62e5dd9cd5b8d143b_testimonial%20img%203.png',
    'https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb7624e067fb0a2ea3e010_testimonial%20img.png',
    // Add more photo URLs here
  ]);
  const [contents] = useState([
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 3', description: 'Description 3' },
    // Add more content objects here
  ]);

  const nextItem = () => {
    setCurrent(current === photos.length - 1 ? 0 : current + 1);
  };

  const prevItem = () => {
    setCurrent(current === 0 ? photos.length - 1 : current - 1);
  };

  return (
    <div className="container2">
      <div className="photo-container2">
        <img src={photos[current]} alt={`Photo ${current + 1}`} />
      </div>
      <div className="card-container2">
        <div className="card2">
          <h2>{contents[current].title}</h2>
          <p>{contents[current].description}</p>
          <div className="button-container2">
            <button onClick={prevItem}>Left</button>
            <button onClick={nextItem}>Right</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
