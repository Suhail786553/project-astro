import "./Content.css";
import InteractiveDivs from "./InteractiveDivs";
import Card from "./Card";
import ZaivestComponent from "./ZaivestComponent";
import Photo from './Photo';

function Content() {
  return (
    <div>
      <div className="main">
        <h1>
          Your New Gateway to<br></br> Exclusive Investment In <br></br>Best
          Opportunities
        </h1>
        <img
          src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65f2c01bb7a422d7191da6be_Banner-S-1.svg"
          className="mini-photo left"
          alt="Mini Photo 1"
        />
        <img
          src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65f2bff621b4188b17d7a6e1_Banner-S-2.svg"
          className="mini-photo right"
          alt="Mini Photo 2"
        />
      </div>
      <div className="main1">
        <p>
          Believe that knowledge is key to confident decesion making that's why
          we provide clients with the wealth of educational resources market
          insights,and timely updates.
        </p>
      </div>
      <div className="button-container">
        <button className="responsive-button">BIND WITH US</button>
        <button className="responsive-button1">CONTACT US</button>
      </div>
      <div className="container">
        <img
          src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b8f585cd44c52b3679a41c_v1%20banner%20img-p-800.png"
          alt="Responsive Image"
          className="responsive-image"
        />
      </div>
      <section className="write-content">
        <div className="Content">
          <h1>
            Trusted By 40K+ Brands<br></br>All Over The World
          </h1>
        </div>
        <div className="Content1">
          <p>
            Believe that knowledge is key to confident decesion making that's
            why we provide clients with the wealth of educational resources
            market insights,and timely updates.
          </p>
        </div>
        {/* logos running */}
        <div className="logo-row">
          <div className="logos">
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a2036b309cc89f56bfe_company%20logo%206.svg"
              alt="Logo 1"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a11029aa8acd8eb622e_company%20logo%205.svg"
              alt="Logo 2"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a2d33c28b61a374ab53_company%20logo%207.svg"
              alt="Logo 3"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a0556340cfea41a9678_company%20logo%204.svg"
              alt="Logo 4"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b909f6c024b60878afb81e_company%20logo%203.svg"
              alt="Logo 4"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a6eb3e661b51a05277e_company%20logo%2012.svg"
              alt="Logo 7"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a7a48f65e29f54cbb6c_company%20logo%2013.svg"
              alt="Logo 8"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a439d9c21c56b921fa1_company%20logo%209.svg"
              alt="Logo 8"
            />
          </div>
        </div>
        <div className="logo-row">
          <div className="logos">
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a4e4b3f980c78aad7b5_company%20logo%2010.svg"
              alt="Logo 5"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a566d7044174d4a05c3_company%20logo%2011.svg"
              alt="Logo 6"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a6eb3e661b51a05277e_company%20logo%2012.svg"
              alt="Logo 7"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a7a48f65e29f54cbb6c_company%20logo%2013.svg"
              alt="Logo 8"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a439d9c21c56b921fa1_company%20logo%209.svg"
              alt="Logo 8"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a2036b309cc89f56bfe_company%20logo%206.svg"
              alt="Logo 1"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a11029aa8acd8eb622e_company%20logo%205.svg"
              alt="Logo 2"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65b90a2d33c28b61a374ab53_company%20logo%207.svg"
              alt="Logo 3"
            />
          </div>
        </div>
      </section>

      <div className="container1">
        <div className="content2">
          <h2>
            <span className="span">Understand</span>that navigating the complex
            world of <span className="invest"> Investment </span>
            requires a blend of expertise, insight, and a forward-thinking
            approach. Our seasoned team of{" "}
            <span className="finance">Financial</span>
          </h2>
        </div>
        <div className="photo-gallery">
          <div className="photo" id="photo1"></div>
          <div className="photo" id="photo2"></div>
          <div className="photo" id="photo3"></div>
        </div>
      </div>
      {/* <div className="containers">
        <div className="step-connector">
          <div className="step">
            Step 1 <h4>Discovery</h4>
          </div>
          <div className="connector"></div>
          <div className="step">
            Step 2<h4>Research</h4>
          </div>
          <div className="connector"></div>
          <div className="step">
            Step 3<h4>Planning</h4>
          </div>
          <div className="buttons-step">
            <button classname="one-btn">BIND US</button>
            <button>CONTACT US</button>
          </div>
        </div>
        <div className="scroll-container">
          <div className="images" id="image3"></div>
          <div className="images" id="image4"></div>
          <div className="images" id="image1"></div>
          <div className="images" id="image2"></div>
        </div>
        
      </div> */}
      <div className="container3">
        <div className="box1">
          <h1>Explore About Zaivest, Why People Select It.</h1>
        </div>
        <div className="box2">
          <p>
            Stay informed, stay empowered – because when you understand your
            investments, that you're future better equipped to achieve your
            financial goalsand achieve ny other goals like partenship bussiness
            or any other type of Bussiness
          </p>
        </div>
      </div>
      <div />
      <InteractiveDivs />
      <div className="container5">
        <div className="bx1">
          <h1>Explore About Zaivest, Why People Select It.</h1>
        </div>
        <div className="bx2">
          <p>
            Stay informed, stay empowered – because when you understand your
            investments, that you're future better equipped to achieve your
            financial goals.
          </p>
        </div>
      </div>
      <hr></hr>
      <Card />
      <div className="marquee">
        <div className="marquee-content">
          <span>
            <h2>WORKS ON ZAVIEST BELIEVE FOR SUCCESS IN YOUR LIFE</h2>
          </span>
          <span>
            <h2>WORKS ON ZAVIEST BELIEVE FOR SUCCESS IN YOUR LIFE</h2>
          </span>
        </div>
      </div>
      <ZaivestComponent/>
      <div className="container5">
        <div className="bx1">
          <h1>Explore About Zaivest, Why People Select It.</h1>
        </div>
        <div className="bx2">
          <p>
            Stay informed, stay empowered – because when you understand your
            investments, that you're future better equipped to achieve your
            financial goals.
          </p>
        </div>
      </div>
      <Photo/>
      <div className="container5">
        <div className="bx1">
          <h1>Upgrade And Downgrade With Important Inform.</h1>
        </div>
        <div className="bx2">
          <p>
            Stay informed, stay empowered – because when you understand your
            investments, that you're future better equipped to achieve your
            financial goals.
          </p>
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

export default Content;
