import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import classes from './EventsNavigation.module.css';

const EventsNavigation = () => {
  const { currentUser } = useAuth();

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Events
            </NavLink>
          </li>
          {currentUser && (
            <li>
              <NavLink
                to="new"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
