
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/about.css'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 >About Us</h1><hr style={{width:'10%',height:'6px',backgroundColor:'black',borderRadius:'10px'}}/>
        <p className="about-us-intro">
          Welcome to Lens Craft, where we capture life's most precious moments through the lens of creativity and passion. 
          Based in [Your Location], we specialize in photography and videography services that tell your unique story.
        </p>
        
        <div className="about-us-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, Lens Craft was born out of a love for visual storytelling. 
            Our journey began with a simple camera and a dream to create timeless memories for our clients. 
            Over the years, we've grown into a team of dedicated professionals who are passionate about capturing the essence of every moment.
          </p>
        </div>
         {/* Our Founders Section */}
     <div className="founders">
        <h2>Meet Our Founders</h2>
        <div className="founders-cards">
          <div className="founder-card">
          {/* Founder 1 */}
          <img src="/public/image/mee.jpeg" alt="Founder 1" />
            <h3>Harshini C Raj</h3>
            <p>Co-founder & Lead Photographer</p>
          </div>
          {/* Founder 2 */}
          <div className="founder-card">
            <img src="/public/image/teja bro.jpeg" alt="Founder 2" />
            <h3>Teja Trivikram Vangala</h3>
            <p>Co-founder & Lead Videographer</p>
          </div>
          {/* Founder 3 */}
          <div className="founder-card">
            <img src="/public/image/raj.jpeg" alt="Founder 3" />
            <h3>Rajesh Krishnan</h3>
            <p>Co-founder & Creative Director</p>
          </div>
        </div>
      </div>

        <div className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional photography and videography services that exceed your expectations. 
            We strive to create authentic, emotional, and visually stunning content that you'll cherish for a lifetime.
          </p>
        </div>

        <div className="about-us-team">
          <h2>Meet the Team</h2>
          <p>
            Our team is made up of talented photographers and videographers who bring their unique perspectives and skills to every project. 
            We believe in collaboration, creativity, and delivering the highest quality work.
          </p>
          {/* You can add team member profiles here */}
        </div>

        <div className="about-us-cta">
          <h2>Let's Create Something Beautiful Together</h2>
          <p>
            Whether it's a wedding, corporate event, or a personal project, we're here to bring your vision to life. 
            Contact us today to discuss how we can help you capture your special moments.
          </p>
          <button className="cta-button"><Link to='/contact'>Get in Touch</Link></button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
