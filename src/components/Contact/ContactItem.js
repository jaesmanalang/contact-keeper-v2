import React from 'react';
import './ContactItem.css';

const ContactItem = ({ name, number, type }) => {
  return (
    <div className="contact__item">
      <h2>{name}</h2>
      <p>{number}</p>
      <p>{type}</p>
    </div>
  );
};

export default ContactItem;
