import React from 'react';
import { Form, Link } from 'react-router-dom';
import classes from './AuthForm.module.css';

const SignupForm = () => {
  return (
    <Form className={classes.form}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Sign Up</h2>
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
      <div className={classes.control}>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          autoComplete="current-password"
        />
      </div>
      <menu className={classes.actions}>
        <span>Already have an account?</span>
        <Link to="/login">Log in</Link>
        <button type="submit">Sign up</button>
      </menu>
    </Form>
  );
};

export default SignupForm;
