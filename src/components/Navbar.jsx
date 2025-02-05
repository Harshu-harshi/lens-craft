import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{fontFamily:'Dancing Script'}}>
        {/* <img src="/public/image/LC.png" alt="" /> */}
        <Link to="/" >Lens Craft</Link>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/styles">Styles of Shoots</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="hamburger" onClick={handleMenuToggle}>
        <div className="bar"><GiHamburgerMenu /></div>

      </div>
    </nav>
  );
};

export default Navbar;
