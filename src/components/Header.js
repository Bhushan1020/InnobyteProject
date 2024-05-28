import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from "../images/lgo.png";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="logo" style={{marginTop:"8px"}}>
        <img height= "60px" width= "190px" src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <Link to = "/"><h4>Home</h4></Link>
        <Link to = "/header" ><h4>About</h4></Link>
        <h4>Services</h4>
        <h4>Portfolio</h4>
        <h4 >Blog</h4>
        <h4 >Contact</h4>
      </nav>
      <div className="book-now">
        <button><b>BOOK NOW</b></button>
      </div>
    </header>
    
  </>
  );
}

export default Header;
