import React from 'react';
import { useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

const EventItem = ({ event }) => {
  const submit = useSubmit();

  const deleteEventHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <article className={classes.event}>
      <img src={event.img} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <span>{event.date}</span>
        <p>{event.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={deleteEventHandler}>Delete</button>
      </div>
    </article>
  );
};

export default EventItem;
