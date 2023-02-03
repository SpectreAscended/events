import React from 'react';
import { Form, useNavigate, redirect } from 'react-router-dom';
import useValidation from '../hooks/useValidation';
import classes from './EventForm.module.css';

const checkIfEmptyValue = value => {
  return value.trim() !== '';
};

const checkIfValidUrl = value => {
  const trimmedValue = value.trim();
  return (
    trimmedValue.includes('.') &&
    trimmedValue.includes('/') &&
    trimmedValue.includes(':') &&
    trimmedValue.length > 4
  );
};

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();

  const {
    enteredValue: titleEnteredValue,
    hasError: titleHasError,
    isValid: titleIsValid,
    changeEnteredValueHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    resetValues: resetTitle,
  } = useValidation(checkIfEmptyValue);

  const {
    enteredValue: imageEnteredValue,
    hasError: imageHasError,
    isValid: imageIsValid,
    changeEnteredValueHandler: imageChangeHandler,
    inputBlurHandler: imageBlurHandler,
    resetValues: resetImage,
  } = useValidation(checkIfValidUrl);

  const {
    enteredValue: descriptionEnteredValue,
    hasError: descriptionHasError,
    isValid: descriptionIsValid,
    changeEnteredValueHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    resetValues: resetDescription,
  } = useValidation(checkIfEmptyValue);

  const cancelHandler = () => {
    navigate('..');
  };

  const inputClassesHandler = inputHasError => {
    return `${classes.control} ${inputHasError ? classes.error : undefined}`;
  };

  const titleClasses = inputClassesHandler(titleHasError);
  const imageClasses = inputClassesHandler(imageHasError);
  const descriptionClasses = inputClassesHandler(descriptionHasError);

  const formIsValid = titleIsValid && imageIsValid && descriptionIsValid;

  return (
    <Form className={classes.form} method="post">
      <div className={titleClasses}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          //   defaultValue={event ? event.title : ''}
          value={event && !titleEnteredValue ? event.title : titleEnteredValue}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        <p>Title cannot be blank</p>
      </div>
      <div className={imageClasses}>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // defaultValue={event ? event.image : ''}
          value={event && !imageEnteredValue ? event.image : imageEnteredValue}
          onChange={imageChangeHandler}
          onBlur={imageBlurHandler}
        />
        <p>
          Please enter a valid image URL. (Must include http:// or https://)
        </p>
      </div>

      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        name="date"
        defaultValue={event ? event.date : ''}
        required
      />
      <div className={descriptionClasses}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          //   defaultValue={event ? event.description : ''}
          value={
            event && !descriptionEnteredValue
              ? event.description
              : descriptionEnteredValue
          }
          onChange={descriptionChangeHandler}
          onBlur={descriptionBlurHandler}
        />
        <p>Description cannot be blank</p>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const action = async ({ request, params }) => {
  const REQUEST_URL = import.meta.env.VITE_DATABASE_URL;
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    img: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(eventData),
  };

  const res = await fetch(REQUEST_URL, options);

  if (!res.ok) {
    throw json({ message: 'Trouble sending your post' }, { status: 500 });
  }

  return redirect('..');
};
