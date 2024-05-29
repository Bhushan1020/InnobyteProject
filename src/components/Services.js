import React from 'react';
import './Services.css'; 

const Services = () => {
    return (
        <>
        <div className="services-container">
            <div className="services-list">
                <center><h2>Our Services</h2></center>
                <h1 style={{marginLeft:"20px"}}>Strive Only For The Best !</h1>
                <ul>
                    <li>High Class Security</li>
                    <li>24 Hours Room Service</li>
                    <li>Restaurant</li>
                    <li>Tourist Guide Support</li>
                </ul>
            </div>
            <div className="image-block">
            <center><div className='myblock'>
            <div className='myblock1'>
               <h1>100+</h1>
               <h4>Completed</h4>
            </div>
            <div className='myblock2'>
               <h1>150+</h1>
               <h4>Happy Customers</h4>
            </div>
        </div></center>
            </div>
        </div>
        <div className="testimonials-container">
            <center><h1>Customer Testimonials</h1></center>
            <div className="testimonial">
                <p className="testimonial-text">"The cleaning service was impeccable. Every corner of our home was spotless. It’s clear they care deeply about their work."</p>
                <h5 className="testimonial-author">Sarah Lee, Homeowner</h5>
            </div>
            <div className="testimonial">
                <p className="testimonial-text">"Their maintenance team is top-notch. They fixed issues that we’ve had for years, and everything was done on schedule."</p>
                <h5 className="testimonial-author">Gregory Diaz, Property Manager</h5>
            </div>
            <div className="testimonial">
                <p className="testimonial-text">"Absolutely thrilled with the renovations completed in our kitchen and bathroom. The team was professional, and their craftsmanship was exceptional."</p>
                <h5 className="testimonial-author">Amanda Brooks, Homeowner</h5>
            </div>
            <div className="testimonial">
                <p className="testimonial-text">"Highly reliable! They handled my electrical repairs and installations with great precision and safety."</p>
                <h5 className="testimonial-author">Michael Chen, Homeowner</h5>
            </div>
            <div className="testimonial">
                <p className="testimonial-text">"Fantastic customer service and transparency throughout the entire process. They kept us informed and were very respectful of our space."</p>
                <h5 className="testimonial-author">Emily Rivera, Renter</h5>
            </div>
        </div>
        
        </>
    );
}

export default Services;
