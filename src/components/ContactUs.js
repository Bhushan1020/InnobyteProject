import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <>
    <div className="contact-us-container">
      <div className="contact-form-block">
        <form className="contact-form">
          <h2 style={{color:"white"}}>Contact Us</h2>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <center><button type="submit" className="bt">Submit</button></center>
        </form>
      </div>
      <div className="contact-info-block">
        <h2 style={{color:"white",paddingTop:"80px"}}>Contact Information</h2>
        <div className='name'><p style={{color:"white"}}><strong>Address:</strong> 123 Main St, Anytown, USA</p>
        <p style={{color:"white"}}><strong>Email:</strong> info@example.com</p>
        <p style={{color:"white"}}><strong>Phone:</strong> (123) 456-7890</p>
        </div>
      </div>
    </div>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58507.680414433315!2d86.77127480506897!3d23.578137784706982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1716961957711!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  );
};

export default ContactUs;
