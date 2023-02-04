import React from 'react';
import { useSubmit, Link } from 'react-router-dom';
import classes from './EventItem.module.css';
import formatDate from '../utilities/formatDate';

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
        <span>{formatDate(event.date)}</span>
        <p>{event.description}</p>
      </div>
      <div className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={deleteEventHandler}>Delete</button>
      </div>
    </article>
  );
};

export default EventItem;
