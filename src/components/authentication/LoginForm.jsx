import React, { useRef } from 'react';
import classes from './AuthForm.module.css';
import { Link, Form, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async e => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/events');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Log In</h2>
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
        <Link to="/signup">Sign up</Link>
        <button type="submit">Log in</button>
      </menu>
    </form>
  );
};

export default LoginForm;

// export const action = async ({ request }) => {
//   const data = await request.formData();
//   // const { login } = useAuth();

//   const userData = {
//     email: data.get('email'),
//     password: data.get('password'),
//   };

//   console.log(userData);

//   try {
//     // await login(userData.email, userData.password);
//   } catch (err) {}

//   return redirect('/events');
// };
