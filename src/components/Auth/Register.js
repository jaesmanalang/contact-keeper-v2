import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import './Login.css';
import Logo from '../Logo/Logo';
import CustomButton from '../Button/Button';
import { useForm } from 'react-hook-form';
import { auth, createUserProfile } from '../../firebase';
import ErrorIcon from '@material-ui/icons/Error';

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    watch,
  } = useForm();

  const history = useHistory();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const { fullName, email, password } = data;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      const userRef = await createUserProfile(user, { displayName: fullName }); // Fix this
      console.log(userRef, ' from userRef');
      history.push('/');
    } catch (error) {
      console.log(error.message);
      setError('auth', {
        message: error.message,
      });
    }
  };

  return (
    <div className="form__container">
      <span className="form__header">
        <Logo color="#30475e" />
        <p className="text-muted">Register an account</p>
      </span>
      <form
        className="form__login"
        onSubmit={e => {
          clearErrors('auth');
          handleSubmit(onSubmit)(e);
        }}
      >
        <TextField
          name="fullName"
          className="form__login-email"
          id="fullName"
          label="Full Name"
          variant="outlined"
          inputRef={register({ required: 'Please enter your name' })}
          error={errors.fullName ? true : false}
          helperText={errors.fullName ? errors.fullName.message : ''}
        />
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
        <TextField
          name="confirmPassword"
          className="form__login-password"
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          type="password"
          inputRef={register({
            required: 'Please confirm your password',
            validate: value => value === watch('password'),
          })}
          error={errors.confirmPassword ? true : false}
          helperText={
            errors.confirmPassword ? errors.confirmPassword.message : ''
          }
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
        <span className="sign-up">
          <Link className="sign-up__link" to="/login">
            Already have an account? Sign In
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
  );
};

export default Register;
