import React from "react";
import "./Content.css";
import InteractiveDivs from "./InteractiveDivs";
import CardSwitcher from "./CardSwitcher";
// import CardSlider from "./Cardslider";

// Define a functional component

function Content() {
  return (
    <div>
      <div className="main">
        <h1>
          Your New Gateway to<br></br> Exclusive Investment In <br></br>Best
          Opportunities
        </h1>
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
        <button className="responsive-button1">CONTACT NOW</button>
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
      <div className="container">
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
          <div className="buttons">
            <button>BIND US</button>
            <button>CONTACT US</button>
          </div>
        </div>
        <div className="image-slider">
          <div className="slider">
            <img
              src="https://s.globalsources.com/IMAGES/live/202404020635523552"
              alt="Slide 1"
            />
          </div>
        </div>
      </div>
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
      <div className="card-container">
        <div className="card">
          <img
            src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbb06cc8f6de9337b459c1_investment%20img%203.png"
            alt="Card Image 1"
          />
          <h2>Software Companies</h2>
        </div>
        <div className="card">
          <img
            src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bb94fbc99652b4b054ad0d_investment%20img%201.png"
            alt="Card Image 2"
          />
          <h2>Hardware Companies</h2>
        </div>
        <div className="card">
          <img
            src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bbb598f9e3ad4438f0fc00_investment%20img%204.png"
            alt="Card Image 3"
          />
          <h2>Mobile App Companies</h2>
        </div>
      </div>

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
      <div className="container6">
        <div className="bxx1">
          <h1>Explore About Zaivest, Why People Select It.</h1>
        </div>
        <div className="bxx2">
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
      <div className="photo-c">
        <div className="photo-container">
          <div className="photo-frame">
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bf775df4ca11d2994fb37a_about%20us%20img%203.png"
              alt="Photo 1"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bf76eb9cd3b97eab3d61c7_about%20us%20img%202.png"
              alt="Photo 2"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bf76c5ce8ad963b4e81b72_about%20us%20img%201.png"
              alt="Photo 3"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bf7769b68dbbea9edccd46_about%20us%20img%204.png"
              alt="Photo 4"
            />
            <img
              src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bf7769b68dbbea9edccd46_about%20us%20img%204.png"
              alt="Photo 5"
            />
          </div>
        </div>
      </div>
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
      {/* <CardSwitcher/> */}
      <div className="container8">
  <div className="upper2">
    <h2>The Prime Investor We Have, Who Make’s Your Dream.</h2>
    <h5>Stay informed, stay empowered – because when you understand your investments, that you're future better equipped to achieve your financial goals.
</h5>
  </div>
  <div className="middle">
    <img src="https://assets-global.website-files.com/65ba1b755715957fca408ddc/65bf975cbc19eafdb0cf1375_member%20img%205.png" alt="Medium Photo" className="mid-photo"/>
    {/* <div className="coins">
      <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65cc9de9c829e27c189af716_v1%20member%20coin%202.svg" alt="Coin 1" className="coin"/>
      <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65cc9de9c829e27c189af716_v1%20member%20coin%202.svg" alt="Coin 2" className="coin"/>
    </div> */}
  </div>
</div>
<div className="container5">
        <div className="bx1">
          <h1>Upgrade And Downgrade With Important Information.</h1>
        </div>
        <div className="bx2">
          <p>
            Stay informed, stay empowered – because when you understand your
            investments, that you're future better equipped to achieve your
            financial goals.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Content;
