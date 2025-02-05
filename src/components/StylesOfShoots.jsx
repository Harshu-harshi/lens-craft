import React from 'react';
import { Link } from 'react-router-dom';
import '../style/StyleofShoots.css';

const StylesOfShoots = () => {
  const styles = [
    {
      id: 1,
      name: 'Auto Photography',
      image: '',
      video:'',
      description: 'Capture the most special day of your life with our professional wedding photography services.',
    },
    {
      id: 2,
      name: 'Portrait Photography',
      image: '/public/image/Ani1.jpg',
      description: 'Beautiful portraits that highlight your personality and emotions.',
    },
    {
      id: 3,
      name: 'Landscape Photography',
      image: 'https://i.pinimg.com/236x/55/28/f4/5528f4e397a8907c537ec4b8bf914b34.jpg',
      description: 'Stunning landscapes that capture the beauty of nature.',
    },
    {
      id: 4,
      name: 'Street Photography',
      image: '/public/image/ST1.JPG',
      description: '.',
    },
    {
      id: 5,
      name: 'Travel Photography',
      image: '/public/image/t1.jpg',
      video :'/public/video/travel1.mp4',
      description: 'High-fashion photography that showcases style and elegance.',
    },
  ];

  return (
    <div className="styles-of-shoots">
      <h1>Styles of Shoots</h1><hr style={{width:'15%',height:'6px',backgroundColor:'black',borderRadius:'10px'}}/>
      <div className="styles-grid">
        {styles.map((style) => (
          <Link to={`/styles/${style.id}`} key={style.id} className="style-card">
            <img src={style.image} alt={style.name} />
            <h3>{style.name}</h3>
            <p>{style.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StylesOfShoots;
