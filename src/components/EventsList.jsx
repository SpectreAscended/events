import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';

const EventsList = ({ events }) => {
  return (
    <section className={classes.events}>
      <h2>All Events</h2>
      <ul className={classes.list}>
        {events.map(ev => {
          return (
            <li key={ev.id} className={classes.item}>
              <Link to={`/events/${ev.id}`}>
                <img src={ev.img} alt={ev.title} />
                <div className={classes.content}>
                  <h3>{ev.title}</h3>
                  <span>{ev.date}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default EventsList;
