import React, { useState } from 'react';
import '../style/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert message
    alert(
      'Thank you for contacting us! We will get back to you soon.\n\nFor fast reservation, call 7793085621.'
    );

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <div className="contact-address">
        <div className="img">
          <img src="https://i.pinimg.com/originals/22/2f/94/222f948574a5da60c0255fb5cbeded62.gif" alt="" />
        </div>
        
        <h2 style={{fontSize:'25px',fontFamily:'Poppins'}}>Our Address</h2>
        <p>123 Photography Lane, Mysuru, India</p>  
      </div>
      <div className="contact-form">
        <center><h2 style={{fontSize:'35px',fontFamily:'Poppins'}}>Contact Us</h2></center>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;