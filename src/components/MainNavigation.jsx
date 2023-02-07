import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useAuth } from '../contexts/authContext';

const MainNavigation = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const signOutHandler = () => {
    navigate('/events');
    logout();
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          {!currentUser && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Log in
              </NavLink>
            </li>
          )}
          {currentUser && (
            <li>
              <button onClick={signOutHandler}>Log out</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
