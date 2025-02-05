import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/StyleDetails.css';

const StyleDetails = () => {
  const { id } = useParams();

  // Mock data for style details, each style has 10 different photos
  const styleDetails = [
    {
      id: 1,
      name: 'Wedding Photography',
      images: [
        { url: 'https://i.pinimg.com/236x/29/ff/a1/29ffa110582721128fd263ccffdf8d7f.jpg', content: 'Magical wedding moment.', price: '$500' },
        { url: 'https://i.pinimg.com/236x/2f/12/7f/2f127f80101c79295700e1e907c2ae64.jpg', content: 'Vows exchange.', price: '$450' },
        { url: 'https://i.pinimg.com/236x/a5/c8/6d/a5c86d4f46673579b7e87d7c16b53051.jpg', content: 'First kiss.', price: '$550' },
        { url: 'https://i.pinimg.com/236x/4c/60/76/4c60769ad535eb6314005cdce7a5c16d.jpg', content: 'Bridal beauty.', price: '$400' },
        { url: 'https://i.pinimg.com/236x/35/25/ef/3525ef7f48de5fe2c38996fc6f85a45b.jpg', content: 'Elegant reception.', price: '$600' },
        { url: 'https://i.pinimg.com/236x/c7/8d/67/c78d678f1d545e5da1b923911ed1c55c.jpg', content: 'Cake cutting moment.', price: '$450' },
        { url: 'https://i.pinimg.com/236x/78/19/72/781972a7be95c45999f272021e2f61bc.jpg', content: 'Bridal party.', price: '$500' },
        { url: 'https://i.pinimg.com/236x/e5/a3/28/e5a328ff730f3223dbe835b9f56d3109.jpg', content: 'Dancing the night away.', price: '$550' },
        { url: 'https://i.pinimg.com/236x/89/68/8f/89688f3f52e26b4802f26b2c799f25b4.jpg', content: 'Exchanging rings.', price: '$400' },
        { url: 'https://i.pinimg.com/236x/90/22/65/90226526a473389f6e1f8c16c27cc5ed.jpg', content: 'Couple portraits.', price: '$700' }
      ],
    },
    {
      id: 2,
      name: 'Portrait Photography',
      images: [
        { url: 'https://i.pinimg.com/236x/36/65/86/366586b3ea5dd56f8fc6300a3afc554a.jpg', content: 'Elegant close-up.' },
        { url: 'https://i.pinimg.com/236x/f7/7e/f7/f77ef7ff0c401b456f9a2feeb8b0d9d3.jpg', content: 'Serene beauty.' },
        { url: 'https://i.pinimg.com/236x/3c/3b/8a/3c3b8a87ca543f6db5721fe2157123fc.jpg', content: 'Outdoor portrait.' },
        { url: 'https://i.pinimg.com/236x/1b/0f/12/1b0f122b2b256d02e34e6fd67447c3b4.jpg', content: 'Fashionable pose.' },
        { url: 'https://i.pinimg.com/236x/2e/cd/52/2ecd523081d9ffb7bc5a16f81e2f30e9.jpg', content: 'Smiling in natural light.' },
        { url: 'https://i.pinimg.com/236x/2a/45/47/2a45473cc96a5b648b61a14cfcac3e96.jpg', content: 'Classic black-and-white.' },
        { url: 'https://i.pinimg.com/236x/d9/63/f1/d963f1f8b76776eec9937db7f5b68c96.jpg', content: 'Artistic expression.' },
        { url: 'https://i.pinimg.com/236x/c9/7d/67/c97d67e96cd74b57b9ff6572568d5b01.jpg', content: 'Moody lighting.' },
        { url: 'https://i.pinimg.com/236x/7a/84/3a/7a843a4e7db407fa4151e6497fd8a924.jpg', content: 'Vintage style.' },
        { url: 'https://i.pinimg.com/236x/e5/12/f4/e512f47f5a7458a2994f91e4177342c9.jpg', content: 'Peaceful outdoor shot.' }
      ],
    },
    {
      id: 3,
      name: 'Landscape Photography',
      images: [
        { url: 'https://i.pinimg.com/236x/55/28/f4/5528f4e397a8907c537ec4b8bf914b34.jpg', content: 'Majestic mountain view.' },
        { url: 'https://i.pinimg.com/236x/7c/19/29/7c19296db4f8e8e2b8f0a1ebd5d3b9e5.jpg', content: 'Calm ocean waves.' },
        { url: 'https://i.pinimg.com/236x/da/9e/50/da9e50672a0334b5953cf9fc35d7c5a6.jpg', content: 'Sunset on the horizon.' },
        { url: 'https://i.pinimg.com/236x/cf/74/d3/cf74d33e9f69a0d32f735b2b5a0b9c56.jpg', content: 'Open fields at dawn.' },
        { url: 'https://i.pinimg.com/236x/11/d7/02/11d70272cbfcd2794bbcf41ab015158e.jpg', content: 'City skyline.' },
        { url: 'https://i.pinimg.com/236x/2f/d4/d7/2fd4d7ec473ea11c1f54237b9e5500e4.jpg', content: 'Waterfall cascading.' },
        { url: 'https://i.pinimg.com/236x/0a/57/f8/0a57f8fc89a39a11f139a3199b4a2a9f.jpg', content: 'Coastal cliffs.' },
        { url: 'https://i.pinimg.com/236x/22/7d/2c/227d2c3877f8f502a7fe9275247d0e51.jpg', content: 'Forest view in autumn.' },
        { url: 'https://i.pinimg.com/236x/12/61/2c/12612c8a64c17f272d0c44e51bfc1910.jpg', content: 'Golden hour landscape.' },
        { url: 'https://i.pinimg.com/236x/e6/cf/63/e6cf63bc5fe370da1f87253f213e9f64.jpg', content: 'Snow-capped peaks.' }
      ],
    },
    {
      id: 4,
      name: 'Event Photography',
      images: [
        { url: 'https://i.pinimg.com/236x/40/c0/9c/40c09cf488cd4c575b5fb58e942fd581.jpg', content: 'Corporate event.' },
        { url: 'https://i.pinimg.com/236x/9d/62/40/9d6240b4e02c06eaa7e9c63fe2ab3b59.jpg', content: 'Private party moments.' },
        { url: 'https://i.pinimg.com/236x/35/ed/2c/35ed2c9ef1e5ca0f30e7380f2b8baf83.jpg', content: 'Conference networking.' },
        { url: 'https://i.pinimg.com/236x/c7/d5/65/c7d5654d0c0ea9bc597bcf3b3b221004.jpg', content: 'Wedding reception.' },
        { url: 'https://i.pinimg.com/236x/8e/af/5a/8eaf5a6186e1d5a1da9f75562d26875b.jpg', content: 'Celebrating birthdays.' },
        { url: 'https://i.pinimg.com/236x/94/1c/9a/941c9a4739bde39e4fa2ccfae8a4c57b.jpg', content: 'Exhibition event.' },
        { url: 'https://i.pinimg.com/236x/42/91/4f/42914f7d01c3a83c60bcf9c3ff72fa0d.jpg', content: 'Gala dinner.' },
        { url: 'https://i.pinimg.com/236x/38/5f/8b/385f8b2d40fe58ff29041852a5b9c426.jpg', content: 'Charity auction.' },
        { url: 'https://i.pinimg.com/236x/62/8f/3f/628f3f7887ac43a2337e3cdb97b9a81f.jpg', content: 'Corporate celebration.' },
        { url: 'https://i.pinimg.com/236x/61/28/d5/6128d582ecdd5786b02ff3970a520cd2.jpg', content: 'Sports event.' }
      ],
    },
    {
      id: 5,
      name: 'Fashion Photography',
      images: [
        { url: 'https://i.pinimg.com/236x/57/4a/6e/574a6e25f3dc08a3d4b9cbb228edc639.jpg', content: 'High-fashion photo shoot.' },
        { url: 'https://i.pinimg.com/236x/1f/56/8d/1f568d72f02c85b18c7a2c5033a8a7e9.jpg', content: 'Street style fashion.' },
        { url: 'https://i.pinimg.com/236x/9b/f7/94/9bf79423eaa7db5cb7ac04f1e92e4e8d.jpg', content: 'Elegant gown.' },
        { url: 'https://i.pinimg.com/236x/f2/c6/72/f2c672d5e459d9e688cf20cb02e81299.jpg', content: 'Fashion runway.' },
        { url: 'https://i.pinimg.com/236x/68/2a/cf/682acf5698fcd6a081ce87714ed7273e.jpg', content: 'Model posing in street.' },
        { url: 'https://i.pinimg.com/236x/71/4b/97/714b97a3387362921992e14e78f50a72.jpg', content: 'Creative lighting.' },
        { url: 'https://i.pinimg.com/236x/a0/1a/68/a01a68160c0c524fbdd0f18be40c6207.jpg', content: 'Trendy clothing.' },
        { url: 'https://i.pinimg.com/236x/e1/6a/c9/e16ac9d6e3f2646f3fa5f31d3743a346.jpg', content: 'Futuristic fashion.' },
        { url: 'https://i.pinimg.com/236x/7d/c6/68/7dc6688c36563f8e91f4d5c5ed204d8e.jpg', content: 'Bold fashion statements.' },
        { url: 'https://i.pinimg.com/236x/f9/0e/da/f90edae7f587c41e27c15d1a2d760d4d.jpg', content: 'Fashion editorial.' }
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
