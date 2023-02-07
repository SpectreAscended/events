import React from 'react';
import { useSubmit, Link } from 'react-router-dom';
import classes from './EventItem.module.css';
import formatDate from '../utilities/formatDate';
import { useAuth } from '../contexts/authContext';
import getUid from '../utilities/getUid';

const EventItem = ({ event }) => {
  const { currentUser } = useAuth();

  const uid = getUid();
  const eventId = event.uid;

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
      {currentUser && uid === eventId && (
        <div className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={deleteEventHandler}>Delete</button>
        </div>
      )}
    </article>
  );
};

export default EventItem;
