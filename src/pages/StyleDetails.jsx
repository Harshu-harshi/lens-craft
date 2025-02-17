import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/styledetails.css';

const StyleDetails = () => {
  const { id } = useParams();

  // Mock data for style details, each style has 10 different photos
  const styleDetails = [
    {
      id: 1,
      name: 'Auto Photography',
      images: [
        { url: '/public/image/A1.jpg'},
        { url: '/public/image/A12 (2).jpeg'},
        { url: '/public/image/A3.jpg'},
        { url: '/public/image/A6 (1).jpeg'},
        { url: '/public/image/A12 (1).jpeg' },
        { url: '/public/image/A9.jpeg'},
        { url: '/public/image/A8.jpeg'},
        { url: '/public/image/Aa1.jpeg'},
        { url: '/public/image/A10.jpeg' },
        { url: '/public/image/A7.jpeg' },
        { url: '/public/image/A4.jpeg' }

      ],
    },
    {
      id: 2,
      name: 'Animals Photography',
      images: [
        { url: '/public/image/Ani1.jpg' },
        { url: '/public/image/Ani2.jpg'  },
        { url: '/public/image/ANII4.jpeg' },
        { url: '/public/image/animal.jpeg' },
        { url: '/public/image/Ani9.jpeg' },
        { url: '/public/image/Ani11.jpeg' },
        { url: '/public/image/Ani12 (2).jpeg' },
        { url: '/public/image/Ani12 (1).jpeg' },
        { url: '/public/image/Ani10.jpeg' },
        { url: '/public/image/Ani13.jpeg' },
        { url: '/public/image/Ani14.jpeg' },
        { url: '/public/image/Ani15 (2).jpeg' },
        { url: '/public/image/Ani17 (1).jpeg' },
        { url: '/public/image/Ani17 (2).jpeg' },
        { url: '/public/image/Ani18.jpeg' },
        { url: '/public/image/Ani19.jpeg' },
        { url: '/public/image/WhatsApp Image 2025-02-17 at 1.21.11 PM.jpeg' },

      ],
    },
    {
      id: 3,
      name: 'Landscape Photography',
      images: [
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.06 PM.jpeg'},
        { url: '/public/image/WhatsApp Image 2025-02-17 at 1.21.03 PM.jpeg'},
        { url: '/public/image/LD9.jpg' },
        { url: '/public/image/image2.jpg' },
        { url: '/public/image/LD3.jpg' },
        { url: '/public/image/LD5.jpg' },
        { url: '/public/image/LD6.jpg'},
        // { url: '/public/image/LD7.jpg'},
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.03 PM (1).jpeg'},
        { url: '/public/image/LD8.jpg' },
        { url: '/public/image/LD09.jpeg' },
        { url: '/public/image/LD11.jpeg'},
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.09 PM (1).jpeg'},
        { url: '/public/image/LD1.jpeg'  },
        { url: '/public/image/LD4.jpeg' },
       

      ],
    },
    {
      id: 4,
      name: 'Street Photography',
      images: [
        { url: '/public/image/ST10.jpeg' },
        { url: '/public/image/ST9.jpeg' },
        { url: '/public/image/ST2.JPG'},
        { url: '/public/image/St7.jpeg' },
        { url: '/public/image/ST5.jpeg'},
        { url: '/public/image/ST11.jpeg'},
        // { url: '/public/image/ST7.jpeg'},
        { url: '/public/image/ST8.jpeg'},
        { url: '/public/image/st12.jpeg'},
        { url: '/public/image/st13.jpeg'},
        { url: '/public/image/st14.jpeg'},
        // { url: '/public/image/st15.jpeg' },
        { url: '/public/image/St4.jpeg'},
        { url: '/public/image/WhatsApp Image 2025-02-12 at 4.36.52 PM (1).jpeg'},
        { url: '/public/image/WhatsApp Image 2025-02-17 at 1.21.02 PM (2).jpeg'},
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.02 PM.jpeg'},
        {url: '/public/image/WhatsApp Image 2025-02-17 at 1.21.00 PM.jpeg'},
        {url: '/public/image/WhatsApp Image 2025-02-17 at 1.21.02 PM (1).jpeg'},
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.07 PM (1).jpeg'},
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.07 PM.jpeg'},
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.27 PM.jpeg'},
        {url:'/public/image/WhatsApp Image 2025-02-17 at 1.21.06 PM (1).jpeg'},
        // {url:'/public/image/WhatsApp Image 2025-02-12 at 4.36.59 PM (2).jpeg'},
        { url: '/public/image/ST1.JPG'},
        { url: '/public/image/ST3.JPG'},
        // {url: '/public/image/WhatsApp Image 2025-02-17 at 1.21.00 PM (1).jpeg'},
      ],
    },
    {
      id: 5,
      name: 'Travel Photography',
      images: [
        { url: '/public/image/t1.jpg'},
        { url: '/public/image/T4.jpeg' },
        { url: '/public/image/T5.jpeg' },
        { url: '/public/image/T6.jpeg' },
        { url: '/public/image/T7.jpeg' },
        { url: '/public/image/T8.jpeg'},
        { url: '/public/image/T9.jpeg'},
        { url: '/public/image/T10.jpeg' },
        { url: '/public/image/T3.jpeg'},
        { url: '/public/image/T2.jpeg'},
        // { url: '/public/image/T11.jpeg'}

      ],
    },
    {
      id: 6,
      name: 'Arc Photography',
      images: [
        { url: '/public/image/arc1.jpeg'  },
        { url: '/public/image/arc2.jpeg'},
        { url: '/public/image/arc3.jpeg' },
        { url: '/public/image/arc4.jpeg' },
        { url: '/public/image/h1.jpeg' },
        { url: '/public/image/h3.jpeg'},
        { url: '/public/image/h2.jpeg' },
        { url: '/public/image/h4.jpeg'},
        { url: '/public/image/arc5.jpeg' },
        { url: '/public/image/arc6.jpeg' },
        { url: '/public/image/h11.jpeg' },
        { url: '/public/image/h16.jpeg' },
        { url: '/public/image/h12.jpeg' },
        { url: '/public/image/h13.jpeg' },
        { url: '/public/image/h17.jpeg' },
        { url: '/public/image/h24.jpeg' },
        { url: '/public/image/h18.jpeg' },
        { url: '/public/image/h15.jpeg' },


      ],
    },
  ];

  const style = styleDetails.find((style) => style.id === parseInt(id));

  if (!style) {
    return <div>Style not found</div>;
  }


  const handleContentChange = (index, newContent) => {
    const updatedImages = [...style.images];
    updatedImages[index].content = newContent;
    
  };

  return (
    <div className="style-details">
      <h1>{style.name}</h1>
      <div className="style-images">
        {style.images.map((image, index) => (
          <div className="image-card" key={index}>
            <div className="image-wrapper">
              <img src={image.url} alt={`${style.name} ${index + 1}`} className="style-image" />
              <div className="content">{image.content} <p>{image.price}</p> </div>
            </div>
            {/* <textarea
              value={image.content}
              onChange={(e) => handleContentChange(index, e.target.value)}
              placeholder="Add your content here"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleDetails;
