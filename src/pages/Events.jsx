import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import loaderRequest from '../utilities/loaderRequest';

const EventsPage = () => {
  const events = useLoaderData();

  return <EventsList events={events} />;
};

export default EventsPage;

export const loader = () => {
  const REQUEST_URL = import.meta.env.VITE_DATABASE_URL;
  return loaderRequest({
    url: REQUEST_URL,
  });
};
