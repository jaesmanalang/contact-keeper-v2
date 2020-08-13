import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import './Login.css';
import Logo from '../Logo/Logo';
import CustomButton from '../Button/Button';
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase';
import ErrorIcon from '@material-ui/icons/Error';

const Login = () => {
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const history = useHistory();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      console.log(error.message);
      setError('auth', {
        message: error.message,
      });
    }
  };

  return (
    <React.Fragment>
      <div className="form__container">
        <span className="form__header">
          <Logo color="#30475e" />
          <p className="text-muted">Login your account</p>
        </span>
        <form
          className="form__login"
          onSubmit={e => {
            clearErrors('auth');
            handleSubmit(onSubmit)(e);
          }}
        >
          <TextField
            name="email"
            className="form__login-email"
            id="email"
            label="Email Address"
            variant="outlined"
            inputRef={register({
              required: 'Please enter your e-mail',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid e-mail address',
              },
            })}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            name="password"
            className="form__login-password"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            inputRef={register({
              required: 'Please enter your password',
            })}
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : ''}
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
          {errors.auth && (
            <div className="error">
              <p className="error-message">
                <ErrorIcon />
                <span>{errors.auth.message}</span>
              </p>
            </div>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
