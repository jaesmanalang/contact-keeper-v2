import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
