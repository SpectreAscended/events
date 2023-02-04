import React from 'react';
import { useRouteLoaderData, redirect, json } from 'react-router';
import EventItem from '../components/EventItem';
import loaderRequest from '../utilities/loaderRequest';

const EventDetailPage = () => {
  const event = useRouteLoaderData('event-detail');

  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const REQUEST_URL = import.meta.env.VITE_DATABASE_URL;

  const loadedData = await loaderRequest({
    url: REQUEST_URL,
  });

  const loadedEvent = loadedData.find(event => event.id === id);

  return loadedEvent;
};

export const action = async ({ params, request }) => {
  const eventId = params.eventId;

  const URL = import.meta.env.VITE_DATABASE_EDIT;

  const res = await fetch(`${URL}${eventId}.json`, {
    method: request.method,
  });

  if (!res.ok) {
    throw json({ message: 'Could not delete event' }, { status: 500 });
  }

  return redirect('/events');
};
