import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';
import formatDate from '../utilities/formatDate';

const EventsList = ({ events }) => {
  let content = (
    <h2 className={classes['default-message']}>
      There are no events. Post something!
    </h2>
  );

  if (events) {
    content = events.map(ev => {
      return (
        <li key={ev.id} className={classes.item}>
          <Link to={`/events/${ev.id}`}>
            <img src={ev.img} alt={ev.title} />
            <div className={classes.content}>
              <h3>{ev.title}</h3>
              <span>{formatDate(ev.date)}</span>
            </div>
          </Link>
        </li>
      );
    });
  }

  return (
    <section className={classes.events}>
      <h2>All Events</h2>
      <ul className={classes.list}>{content}</ul>
    </section>
  );
};

export default EventsList;
