import React from 'react';
import './AboutUs.css';
import aboutImage from '../images/out.jpg'; 

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="image-block">
                <img src={aboutImage} alt="About Us" />
            </div>
            <div className="info-block">
                <center><h1 style={{color:"white",marginTop:"90px"}}>About Us</h1></center>
                <h2 style={{marginLeft:"30px",color:"white",textAlign:"center"}}>The Best Holidays Start Here !</h2>
                <p>
                Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
                </p>
                <div className="book-now" style={{marginLeft:"25px"}}>
                   <button><b>BOOK NOW</b></button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
