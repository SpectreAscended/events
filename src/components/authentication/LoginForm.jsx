import React, { useRef, useState } from 'react';
import classes from './AuthForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async e => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      navigate('/events');
    } catch (err) {
      console.error(err);
      setError('Incorrect email or password');
    }
    setLoading(false);
  };

  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Log In</h2>
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

      <menu className={classes.actions}>
        <span>Need an account?</span>
        <Link to="/signup">Sign up!</Link>
        <button type="submit">Log in</button>
      </menu>
    </form>
  );
};

export default LoginForm;
