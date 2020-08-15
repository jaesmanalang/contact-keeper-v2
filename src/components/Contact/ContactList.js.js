import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user/context';
import { db } from '../../firebase';
import ContactItem from './ContactItem';

const ContactList = () => {
  const [currentUser] = useContext(UserContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    let contactList = [];
    if (currentUser) {
      db.doc(`users/${currentUser.id}`)
        .collection('contacts')
        .onSnapshot(snapShot => {
          snapShot.forEach(doc => {
            contactList.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setContacts(contactList);
        });
    }
  }, [currentUser]);

  return (
    <div className="contact__list">
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          type={contact.type}
        />
      ))}
      {console.log(contacts)}
    </div>
  );
};

export default ContactList;
