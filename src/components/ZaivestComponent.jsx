import React, { useEffect, useState, useRef } from 'react';
import './ZaivestComponent.css';

const ZaivestComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollingPhotos, setScrollingPhotos] = useState(false);
  const images = [
    'https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png',
    'https://neotalenta.com/wp-content/uploads/2014/04/IT-project.jpg',
    'https://www.liquidplanner.com/wp-content/uploads/2019/04/7022318_IT-big-projects.jpg',
    'https://learn.g2crowd.com/hubfs/iStock-1135541613.jpg'
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerPosition = containerRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (!scrollingPhotos && scrollPosition > containerPosition) {
        setScrollingPhotos(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollingPhotos]);

  useEffect(() => {
    let timer;
    if (scrollingPhotos) {
      timer = setInterval(() => {
        setCurrentImage((prevImage) => {
          const nextImage = (prevImage + 1) % images.length;
          if (nextImage === 0) {
            setScrollingPhotos(false);
          }
          return nextImage;
        });
      }, 1000); // Adjust the interval as needed
    }
    return () => clearInterval(timer);
  }, [scrollingPhotos, images.length]);

  useEffect(() => {
    if (currentImage === 0 && !scrollingPhotos) {
      document.querySelector('.container6').style.backgroundColor = '#d3d3d3';
    } else {
      document.querySelector('.container6').style.backgroundColor = '#f7fad9';
    }
  }, [currentImage, scrollingPhotos]);

  return (
    <div ref={containerRef}>
      <div className="container6">
        <div className="bxx1">
          <h1>Explore About Zaivest, Why People Select It.</h1>
          <div className="logo"></div>
        </div>
        <div className="bxx2">
          <p>
            Stay informed, stay empowered – because when you understand your
            investments, that you're future better equipped to achieve your
            financial goals.
          </p>
          <div className="button-container1">
            <button className="responsive-button1">CONTACT NOW</button>
          </div>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="scroll-container1">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image ${currentImage === index ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateY(${currentImage === index ? '0' : '100%'})`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZaivestComponent;
