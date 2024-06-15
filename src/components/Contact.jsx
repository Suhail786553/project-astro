import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="about-container">
        <h1>Contact</h1>
        <h4>Home / Contact</h4>
      </div>
      <div class="content1">
        <h1>
          Get In Touch With Us<br></br> For Further Informations.
        </h1>
      </div>
      <div class="containery">
        <div class="photo-containery">
          <img
            src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0d98b2bf7a04ed9752410_contact%20us%20img.png"
            alt="Photo"
          />
        </div>
        <div class="info-container">
          <div class="info-row">
            <h1>New York, NY office</h1>
          </div>
          <div class="info-row">
            <img
              src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0dbc35dab873ed076387a_contact%20info%20icon%201.svg"
              alt="Location Logo"
            />
            <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
          </div>
          <div class="info-row">
            <img
              src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0dcb62749451c82b6e7f6_contact%20info%20icon%202.svg"
              alt="Call Logo"
            />
            <span>+880 (12459 2543)</span>
          </div>
          <div class="info-row">
            <img
              src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0dcc28f88e08e2af9b2fd_contact%20info%20icon%203.svg"
              alt="Email Logo"
            />
            <span>Info.zaivest@gmail.com</span>
          </div>
        </div>
      </div>
      <div class="form-container">
        <form>
          <div class="form-row">
            <div class="input-group">
              <label for="fullName">
                Full Name <span class="mandatory">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
              />
            </div>
            <div class="input-group">
              <label for="email">
                Email Address <span class="mandatory">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="input-group">
              <label for="phone">
                Phone Number <span class="mandatory">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="input-group">
              <label for="subject">
                Subject <span class="mandatory">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Service Name"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="input-group full-width">
              <label for="message">
                Message <span class="mandatory">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <button type="submit">Send Message</button>
          </div>
        </form>
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
      <h5 class="footer">
        © Copyright - <span style={{color:'blue'}}>Zaivest</span>| Designed by <span style={{color:'blue'}}>Flowzai / Licensing - </span>Powered by<span style={{color:'blue'}}> Webflow</span>
    </h5>
    </div>
  );
};

export default Contact;
