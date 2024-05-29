import React from 'react';
import './Rooms.css';
import roomImage1 from '../images/room1.jpg';
import roomImage2 from '../images/small.jpg'; 
import roomImage3 from '../images/large.jpg'; 

const Rooms = () => {
    return (
        <div className="rooms-container">
            <div className="room-card">
                <img src={roomImage1} alt="Room 1" className="room-image" />
                <div className="room-info">
                    <h2>Deluxe Room</h2>
                    <p>Enjoy a luxurious stay in our deluxe room equipped with all modern amenities.</p>
                    <div className="room-rate">
                        <h3>Rs. 1500/night</h3>
                    </div>
                    <button className="book-now-button">Book Now</button>
                </div>
            </div>
            <div className="room-card">
                <img src={roomImage2} alt="Room 2" className="room-image" />
                <div className="room-info">
                    <h2>Cozy Haven Room</h2>
                    <p>Experience comfort in our superior room with beautiful views and cozy furnishings.</p>
                    <div className="room-rate">
                        <h3>Rs. 2000/night</h3>
                    </div>
                    <button className="book-now-button">Book Now</button>
                </div>
            </div>
            <div className="room-card">
                <img src={roomImage3} alt="Room 3" className="room-image" />
                <div className="room-info">
                    <h2>Executive Suite</h2>
                    <p>Relax in our executive suite, featuring spacious interiors and top-notch amenities.</p>
                    <div className="room-rate">
                        <h3>Rs. 2500/night</h3>
                    </div>
                    <button className="book-now-button">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Rooms;
