import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link className="nav__link" to="/login">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
