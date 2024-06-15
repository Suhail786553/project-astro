import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
       <div className="about-container">
        <h1>Contact</h1>
        <h4>Home / Contact</h4>
    </div>
    <div class="content1">
        <h1>Get In Touch With Us<br></br>  For Further Informations.
        </h1>
    </div>
    <div class="containery">
        <div class="photo-containery">
            <img src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0d98b2bf7a04ed9752410_contact%20us%20img.png" alt="Photo"/>
        </div>
            {/* <div class="button-containery">
                <button>&lt;</button>
                <button>&gt;</button>
            </div> */}
        <div class="info-container">
            <div class="info-row">
                <h1>New York, NY office</h1>
            </div>
            <div class="info-row">
                <img src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0dbc35dab873ed076387a_contact%20info%20icon%201.svg" alt="Location Logo"/>
                <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
            </div>
            <div class="info-row">
                <img src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0dcb62749451c82b6e7f6_contact%20info%20icon%202.svg" alt="Call Logo"/>
                <span>+880 (12459 2543)</span>
            </div>
            <div class="info-row">
                <img src="https://cdn.prod.website-files.com/65b8d5c5e2ef493dbe7c1b86/65c0dcc28f88e08e2af9b2fd_contact%20info%20icon%203.svg" alt="Email Logo"/>
                <span>Info.zaivest@gmail.com</span>
            </div>
        </div>
    </div>
    <div class="form-container">
        <form>
            <div class="form-row">
                <label for="fullName">Full Name <span class="mandatory">*</span></label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name"/>
                <label for="email">Email Address <span class="mandatory">*</span></label>
                <input type="email" id="email" name="email" placeholder="Enter your email address"/>
            </div>
            <div class="form-row">
                <label for="phone">Phone Number <span class="mandatory">*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"/>
                <label for="subject">Subject <span class="mandatory">*</span></label>
                <input type="text" id="subject" name="subject" placeholder="Enter the subject"/>
            </div>
            <div class="form-row message-row">
                <label for="message">Message <span class="mandatory">*</span></label>
                <textarea id="message" name="message" placeholder="Enter your message"></textarea>
            </div>
            <div class="form-row button-container">
                <button type="submit">Send Message</button>
            </div>
        </form>
    </div>

    </div>
  );
}

export default Contact;
