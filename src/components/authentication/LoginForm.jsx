import React from 'react';
import classes from './AuthForm.module.css';
import { Link, Form } from 'react-router-dom';

const LoginForm = () => {
  return (
    <Form className={classes.form}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Log In</h2>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
        />
      </div>

      <menu className={classes.actions}>
        <span>Need an account?</span>
        <Link to="/signup">Sign up</Link>
        <button type="submit">Log in</button>
      </menu>
    </Form>
  );
};

export default LoginForm;
