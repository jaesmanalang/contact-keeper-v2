import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/user/context';
import { db } from '../../firebase';
import './ContactForm.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = () => {
  const [currentUser] = useContext(UserContext);
  const [state, setState] = useState(INITIAL_STATE);
  const { name, email, phone, type } = state;

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      type,
    };
    db.doc(`users/${currentUser.id}`).collection('contacts').add(newContact);
    setState(INITIAL_STATE);
  };
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="contact__form">
      <h1 className="contact__form-title">Add Contact</h1>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={name}
        className="contact__form-input"
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
        value={email}
        className="contact__form-input"
      />
      <input
        name="phone"
        type="text"
        placeholder="Phone number"
        onChange={handleChange}
        value={phone}
        className="contact__form-input"
      />
      <div className="contact__form-type">
        <div className="input-group">
          <input
            name="type"
            type="radio"
            placeholder="Phone number"
            onChange={handleChange}
            value="personal"
            checked={type === 'personal'}
            id="personal"
          />
          <label htmlFor="personal">Personal</label>
        </div>
        <div className="input-group">
          <input
            name="type"
            type="radio"
            placeholder="Phone number"
            onChange={handleChange}
            value="professional"
            checked={type === 'professional'}
            id="professional"
          />
          <label htmlFor="professional">Professional</label>
        </div>
      </div>
      <button className="contact__form-btn" type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
