import React from 'react';
import './Gallery.css';
import image1 from '../images/small.jpg'; 
import image2 from '../images/large.jpg';
import image3 from '../images/service.jpg';
import image4 from '../images/header.jpg';
import image5 from '../images/recep.jpg';
import image6 from '../images/1.jpg';
import image7 from '../images/ayodhya.webp';
import image8 from '../images/baranti.webp';
import image9 from '../images/flower.jpg';
import image10 from '../images/out.jpg';
import image11 from '../images/palash.webp';
import image12 from '../images/new.jpg';

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-item">
                <img src={image1} alt="Gallery Image 1" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image2} alt="Gallery Image 2" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image6} alt="Gallery Image 3" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image4} alt="Gallery Image 4" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image11} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image12} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image7} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image8} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image3} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image10} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image5} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
                <img src={image9} alt="Gallery Image 5" className="gallery-image" />
            </div>
           
        </div>
    );
};

export default Gallery;
