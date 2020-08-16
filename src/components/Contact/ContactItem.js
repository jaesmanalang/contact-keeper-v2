import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import './ContactItem.css';

const ContactItem = ({ name, number, type }) => {
  return (
    <div className="contact__item">
      <div className="contact__item-header">
        <h3 className="contact__item-name">{name}</h3>
        <div className="contact__item-type">{type}</div>
      </div>
      <div className="contact__item-info">
        <span className="contact__item-icon">
          <MailIcon />
        </span>
        <p>Email</p>
      </div>
      <div className="contact__item-info">
        <span className="contact__item-icon">
          <PhoneEnabledIcon />
        </span>
        <p>{number}</p>
      </div>
      <div className="contact__item-actions">
        <button className="contact__item-btn">Edit</button>
        <button className="contact__item-btn">Delete</button>
      </div>
    </div>
  );
};

export default ContactItem;
