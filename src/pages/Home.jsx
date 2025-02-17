import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/home.css';
import AboutUs from './AboutUs';
import StylesOfShoots from '../components/StylesOfShoots';
import Testimonies from '../components/Testimonies';
import Contact from './Contact';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
    <div className="home">
      <div className="home-content">
        <div className="home-image">
          <img src="/public/image/home.jpeg" alt="Photography" />
        </div>
        <div className="bar">
          <div className="bar-content">
            <h1 className='title'>Photography</h1>
            <p>Photography is the art, science and practice of creating durable images by recording light
              or other electromagnetic radiation, either electronically by means of an image sensor or chemically by means of a
              light-sensitive medium such as photographic film or paper.</p>
            
          </div>
        </div>
        <div className="home-slider">
          <Slider {...settings}>
            <div><img src="/public/image/ld2.jpeg" alt="Slide 1" /></div>
            <div><img src="/public/image/T3.jpeg" alt="Slide 2" /></div>
            <div><img src="/public/image/image3.jpg" alt="Slide 3" /></div>
            <div><img src="/public/image/image5.jpeg" alt="Slide 4" /></div>
            <div><img src="/public/image/Ani8.jpeg" alt="Slide 5" /></div>
            <div><img src="/public/image/T2.jpeg" alt="Slide 6" /></div>

          </Slider>
        </div>
      </div>
      
    </div>
    <AboutUs />
    <StylesOfShoots/>
    <Testimonies/>
    <Contact/>
    </>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  );
};

export default Home;
