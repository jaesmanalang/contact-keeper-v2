import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user/context';
import { db } from '../../firebase';
import ContactItem from './ContactItem';
import './ContactList.css';

const ContactList = () => {
  const [currentUser] = useContext(UserContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      db.doc(`users/${currentUser.id}`)
        .collection('contacts')
        .onSnapshot(snapShot => {
          const contacts = snapShot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
          });
          setContacts(contacts);
        });
    }
  }, []);

  return (
    <div className="contact__list">
      {contacts.length ? (
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            type={contact.type}
          />
        ))
      ) : (
        <h1>No contacts yet.</h1>
      )}
      {console.log(contacts)}
    </div>
  );
};

export default ContactList;
