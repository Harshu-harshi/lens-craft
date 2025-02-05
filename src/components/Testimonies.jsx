import React from 'react';
import '../style/testimonies.css';

const Testimonies = () => {
  const testimonials = [
    { name: 'John Doe', image: 'https://i.pinimg.com/736x/f3/04/64/f30464d2d3c78c849058368411e2ab6f.jpg', content: 'Amazing work! Highly recommended.' },
    { name: 'Jane Smith', image: 'https://i.pinimg.com/736x/45/07/5c/45075c042271e2a6275a4cbe595fcc05.jpg', content: 'The best photography team I have worked with.' },
    { name: 'Michael Lee', image: 'https://i.pinimg.com/236x/17/97/eb/1797ebba8ce9f3d59d02ba92a5d6c625.jpg', content: 'Captured every detail of our wedding perfectly.' },
    { name: 'Emily Clark', image: 'https://i.pinimg.com/236x/47/8e/7e/478e7e03fad29ec0dd037ebc135eaaa6.jpg', content: 'Fantastic service and beautiful photos!' },
    { name: 'David Wilson', image: 'https://i.pinimg.com/236x/28/2e/db/282edb3d3978af7f838a7deb8a4f8c5e.jpg', content: 'Professional and talented team. Worth every penny.' },
    { name: 'Sarah Taylor', image: 'https://i.pinimg.com/236x/66/3f/8a/663f8a5b2cb881008d912b55a4d9bbc4.jpg', content: 'My go-to team for all my events. Highly satisfied.' },
    { name: 'Chris Johnson', image: 'https://via.placeholder.com/100', content: 'They made our special day even better with their amazing photos.' },
    { name: 'Patricia Brown', image: 'https://via.placeholder.com/100', content: 'A pleasure to work with! The results speak for themselves.' },
    { name: 'Daniel Harris', image: 'https://via.placeholder.com/100', content: 'Outstanding creativity and attention to detail.' },
    { name: 'Linda Martin', image: 'https://via.placeholder.com/100', content: 'Incredible team, they really captured the essence of our day.' },
    { name: 'James Garcia', image: 'https://via.placeholder.com/100', content: 'Impressed by the professionalism and quality of work.' },
    { name: 'Laura Wilson', image: 'https://via.placeholder.com/100', content: 'Absolutely love the photos! I would recommend them anytime.' },
    { name: 'Oliver King', image: 'https://via.placeholder.com/100', content: 'The team is super friendly and made the whole process so easy.' },
    { name: 'Sophia White', image: 'https://via.placeholder.com/100', content: 'Gorgeous photos! They really know how to capture moments.' },
    { name: 'Lucas Adams', image: 'https://via.placeholder.com/100', content: 'Best decision we made for our wedding! Amazing experience.' }
  ];

  return (
    <div className="testimonies">
      <h1 style={{fontFamily:'Space Grotesk'}}>📝Testimonies</h1>
      <div className="testimonies-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimony-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
