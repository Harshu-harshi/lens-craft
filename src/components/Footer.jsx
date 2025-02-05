import React from 'react';
import '../style/footer.css';
import { FaFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-title">
        <h2>Lens Craft</h2><hr className='hr'/>
      </div>
      <div className="social-links">
        <li><Link to='https://facebook.com'><FaFacebook /></Link></li>
        <li><Link to='https://instagram.com'><TiSocialInstagram /></Link></li>
        <li><Link to='https://in.pinterest.com/'><FaPinterest /></Link></li>
        <li><Link to='https://www.youtube.com/'><FaYoutube /></Link></li>
      </div>
    </footer>
  );
};

export default Footer;