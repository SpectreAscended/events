import React from 'react';
import { useRouteLoaderData } from 'react-router';
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
