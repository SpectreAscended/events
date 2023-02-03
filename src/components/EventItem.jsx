import React from 'react';
import classes from './EventItem.module.css';

const EventItem = ({ event }) => {
  return (
    <article className={classes.event}>
      <img src={event.img} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <span>{event.date}</span>
        <p>{event.description}</p>
      </div>
    </article>
  );
};

export default EventItem;
