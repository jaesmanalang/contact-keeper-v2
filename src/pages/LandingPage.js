import React, { useContext } from 'react';
import { UserContext } from '../context/user/context';
import { ContactList } from '../components';

const LandingPage = () => {
  const [currentUser] = useContext(UserContext);

  return (
    <div>
      {currentUser ? (
        <div className="container">
          <ContactList />
        </div>
      ) : (
        <div className="welcome">
          <h1 className="main-heading">Welcome to Contact Keeper</h1>
          <p className="text-muted">Keep. Organize. Manage.</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
