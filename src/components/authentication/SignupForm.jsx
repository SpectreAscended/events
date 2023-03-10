import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { useAuth } from '../../contexts/authContext';

const SignupForm = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const signUpHandler = async e => {
    e.preventDefault();

    if (
      !emailRef.current.value.includes('@') ||
      !emailRef.current.value.includes('.')
    ) {
      setError('Please enter a valid email address');
      return;
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match.');
      return;
    }

    if (passwordRef.current.value.length < 6) {
      setError('Passwords must be atleast 6 characters.');
      return;
    }

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/events');

      emailRef.current.value = '';
      passwordRef.current.value = '';
      passwordConfirmRef.current.value = '';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={classes.form} onSubmit={signUpHandler}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Sign Up</h2>
      {error && <p className={classes.error}>{error}</p>}
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          ref={emailRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          ref={passwordRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          autoComplete="current-password"
          ref={passwordConfirmRef}
        />
      </div>
      <menu className={classes.actions}>
        <span>Already have an account?</span>
        <Link to="/login">Log in</Link>
        <button type="submit">Sign up</button>
      </menu>
    </form>
  );
};

export default SignupForm;
