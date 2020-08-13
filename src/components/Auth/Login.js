import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import './Login.css';
import Logo from '../Logo/Logo';
import CustomButton from '../Button/Button';

const Login = () => {
  return (
    <div className="form__container">
      <span className="form__header">
        <Logo color="#30475e" />
        <p className="text-muted">Login your account</p>
      </span>
      <form className="form__login">
        <TextField
          className="form__login-email"
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          className="form__login-password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <CustomButton type="submit">SIGN IN</CustomButton>
        <div className="divider text-muted">
          <span>or</span>
        </div>
        <Button variant="contained" color="secondary">
          SIGN IN WITH GOOGLE
        </Button>
        <span className="sign-up">
          <Link className="sign-up__link" to="/register">
            Don't have an account? Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
