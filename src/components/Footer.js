import React from 'react';
import './Footer.css';
import logo from "../images/lgo.png";
import fb from "../images/facebook.png";
import tw from "../images/twitter.png";
import yt from "../images/youtube.png";
import insta from "../images/instagram.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-block">
        <img height= "60px" width= "190px" src={logo} alt="Logo" />
          <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
          <div className="book-now">
        <button><b>BOOK NOW</b></button>
      </div>
        </div>
        <div className="footer-block">
          <h2>Services</h2>
          <p>Concierge Assistance</p>
          <p>Flexible Booking Options</p>
          <p>Airport Transfers</p>
          <p>Wellness & Recreation</p>
        </div>
        <div className="footer-block">
          <h2>Contact us</h2>
          <p>Address: Beside Barshal Water <br/>Tank, Manpur, Barhanti, West Bengal <br/>723156</p>
          <p>kkghosh0099@gmail.com</p>
          <p>+91 9007062180</p>
        </div>
        <div className="footer-block">
          <h2>Follow Us</h2>
          <div className='links'>
          <a href='https://www.instagram.com/kingsukhguesthouse'><img src={insta} alt="Instagram" className="social-icon"></img></a>
            <a href='https://www.facebook.com'><img src={fb} alt="Facebook" className="social-icon"></img></a>
            <a href='https://www.twitter.com'><img src={tw} alt="Twitter" className="social-icon"></img></a>
            <a href='https://www.youtube.com'><img src={yt} alt="Youtube" className="social-icon"></img></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kingsukh Guest House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
