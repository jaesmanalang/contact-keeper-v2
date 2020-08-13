import React from 'react';
import { useHistory } from 'react-router-dom';
import './Logo.css';

const Logo = ({ color }) => {
  const history = useHistory();

  return (
    <h1
      onClick={() => history.push('/')}
      className="logo"
      style={color ? { color: color } : { color: '#c1a57b' }}
    >
      Contact Keeper
    </h1>
  );
};

export default Logo;
