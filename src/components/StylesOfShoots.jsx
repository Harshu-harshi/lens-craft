import React from 'react';
import { Link } from 'react-router-dom';
import '../style/StyleofShoots.css';

const StylesOfShoots = () => {
  const styles = [
    {
      id: 1,
      name: 'Auto Photography',
      image: '/public/image/PSX_20240308_131127.jpg',
      description: 'Capture a stylish car in an open road, emphasizing speed, reflections, and dynamic lighting for a dramatic effect.',
    },
    {
      id: 2,
      name: 'Animals Photography',
      image: '/public/image/Ani1.jpg',
      description: 'Animals photography is a specialized genre focused on capturing images of animals in their natural habitats',
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
      description: 'The marvels of daily life are exciting; no movie director can arrange the unexpected that you find in the street.',
    },
    {
      id: 5,
      name: 'Travel Photography',
      image: '/public/image/t1.jpg',
      // video :'/public/video/travel1.mp4',
      description: 'The main goal of a travel photographer is to capture stunning images of their experiences in locations away from home. This allows them to serve as storytellers and educators on the world diversity',
    },
    {
      id: 6,
      name: 'Hist Photography',
      image: '/public/image/ST6.jpeg',
      description: 'The history of architecture traces the changes in architecture through various traditions, regions, overarching stylistic trends, and dates',
    },
  ];

  return (
    <div className="styles-of-shoots">
      <h1>Styles of Shoots</h1><u>Styles of Shoots</u>
      {/* <hr style={{width:'15%',height:'6px',backgroundColor:'black',borderRadius:'10px'}}/> */}
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
