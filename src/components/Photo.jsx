import React, { useState } from 'react';
import './Photo.css';

const photos = [
  "https://assets-global.website-files.com/65ba1b755715957fca408ddc/65bf975cbc19eafdb0cf1375_member%20img%205.png",
  "https://assets-global.website-files.com/65ba1b755715957fca408ddc/65f7c64f13bde20c05c5b5bf_Member-Img-2.png",
  "https://assets-global.website-files.com/65ba1b755715957fca408ddc/65bf96ff66010ad14f4f98ef_member%20img%203.png"
];

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="container8">
      <div className="upper2">
        <h1>The Prime Investor We Have,<br/> Who Makes Your Dream.</h1>
        <h4>
          Stay informed, stay empowered – because when you understand your
          investments,<br/> that you're future better equipped to achieve your
          financial goals.
        </h4>
      </div>
      <div className="middle">
        <img
          src={photos[currentPhotoIndex]}
          alt="Medium Photo"
          className="mid-photo"
        />
        <div className="coin coin-left"></div>
        <div className="coin coin-right"></div>
        <div className="navigation-buttons">
          <button onClick={handlePrevPhoto} className="nav-button left">
            &#8592;
          </button>
          <button onClick={handleNextPhoto} className="nav-button right">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
