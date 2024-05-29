import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../images/lgo.png";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className="header">
                <div className="logo" style={{ marginTop: "8px" }}>
                    <img height="60px" width="190px" src={logo} alt="Logo" />
                </div>
                <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsNavOpen(false)}><h4>Home</h4></Link>
                    <Link to="/about" onClick={() => setIsNavOpen(false)}><h4>About</h4></Link>
                    <Link to="/services" onClick={() => setIsNavOpen(false)}><h4>Services</h4></Link>
                    <Link to="/rooms" onClick={() => setIsNavOpen(false)}><h4>Rooms</h4></Link>
                    <Link to="/gallery" onClick={() => setIsNavOpen(false)}><h4>Gallery</h4></Link>
                    <Link to="/contact" onClick={() => setIsNavOpen(false)}><h4>Contact</h4></Link>
                </nav>
                <div className="book-now">
                    <button><b>BOOK NOW</b></button>
                </div>
                <div className="hamburger" onClick={toggleNav}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>
        </>
    );
}

export default Header;
