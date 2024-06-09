import React from 'react';
import './Shop.css';

const Shop = () => {
  return (
    <div>
       <div className="about-container">
        <h1>Shop</h1>
        <h4>Home / Shop</h4>
    </div>
    <div class="container-row2">
        <div class="row-2">
            <div class="photo2"><img src="https://wallpapercave.com/wp/wp11076377.jpg" alt="Photo 2"/></div>
            <div class="photo2"><img src="https://www.papercitymag.com/wp-content/uploads/2019/12/62386966_2402234889822621_1584683988369276928_o-1024x683.jpg" alt="Photo 2"/></div>
        </div>
        <div class="row-2">
            <div class="photo2"><img src="https://s3-pixelphant-frontend.s3.amazonaws.com/frontend/online-clothing-business-768x384.jpg" alt="Photo 3"/></div>
            <div class="photo2"><img src="https://media.timeout.com/images/100919467/1372/1029/image.jpg" alt="Photo 4"/></div>
        </div>
    </div>
    <footer>
        <div className="footer-logo">
          <img
            src="https://app.shiprocket.in/sr_login/assets/images/srlogo.svg
"
            alt="Logo"
          />
        </div>
        <div className="footer-subscribe">
          <div className="subscribe-content">
            <p>Enter Your Email</p>
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-info">
          <div className="info-column">
            <h4>Pages</h4>
            <p>Home </p>
            <p>About</p>
            <p>About</p>
            <p>Shop</p>
            <p>Contact Us</p>
          </div>
          <div className="info-column">
            <h4>Company Pages</h4>
            <p>Shop Single</p>
            <p>Blog Single</p>
            <p>Blog</p>
            <p>Project</p>
            <p>Project Single</p>
          </div>
          <div className="info-column">
            <h4>Template</h4>
            <p>404 Not Found</p>
            <p>Change Log</p>
            <p>License</p>
            <p>Style Guide</p>
            <p>Password Protected</p>
          </div>
          <div className="info-column">
            <h4>Contact Us</h4>
            <p>
              <i className="fab fa-facebook"></i> Facebook
            </p>
            <p>
              <i className="fab fa-twitter"></i> Twitter
            </p>
            <p>
              <i className="fab fa-instagram"></i> Instagram
            </p>
            <p>
              <i className="fab fa-linkedin"></i> Linkedin
            </p>
            <p>
              <i className="fab fa-skype"></i> Skype
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Shop;
