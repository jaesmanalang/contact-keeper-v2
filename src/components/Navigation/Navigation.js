import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navigation.css';
import { UserContext } from '../../context/user/context';
import { auth } from '../../firebase';

const Navigation = () => {
  const [currentUser] = useContext(UserContext);
  return (
    <nav className="nav">
      {currentUser ? (
        <AuthNav displayName={currentUser.displayName} />
      ) : (
        <NonAuthNav />
      )}
    </nav>
  );
};

const NonAuthNav = () => (
  <ul className="nav__list">
    <li>
      <Link className="nav__link" to="/login">
        LOGIN
      </Link>
    </li>
  </ul>
);

const AuthNav = ({ displayName }) => {
  const history = useHistory();
  // const name = displayName?.split(' ');
  // const firstName = name[0];

  const handleSignOut = () => {
    auth.signOut();
    history.push('/');
  };

  return (
    <ul className="nav__list">
      <li>
        <p className="displayName">
          {displayName ? 'Hello, ' + displayName.split(' ')[0] + '!' : ''}
        </p>
      </li>
      <li>
        <button onClick={handleSignOut} className="sign-out-btn">
          SIGN OUT
        </button>
      </li>
    </ul>
  );
};

export default Navigation;
