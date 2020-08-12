import React from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const history = useHistory();

  return (
    <header className="header">
      <h1 onClick={() => history.push('/')} className="logo">
        Contact Keeper
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
