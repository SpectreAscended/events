import React from 'react';
import { Form, useNavigate } from 'react-router-dom';
import classes from './EventForm.module.css';

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('..');
  };

  return (
    <Form method={method} className={classes.form}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        defaultValue={event ? event.title : ''}
      />
      <label htmlFor="image">Image</label>
      <input
        id="image"
        type="url"
        name="image"
        defaultValue={event ? event.image : ''}
      />
      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        name="date"
        defaultValue={event ? event.date : ''}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        defaultValue={event ? event.description : ''}
      />
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

export default EventForm;
