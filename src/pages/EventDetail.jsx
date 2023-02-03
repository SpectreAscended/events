import React from 'react';
import { useRouteLoaderData } from 'react-router';
import EventItem from '../components/EventItem';
import loaderRequest from '../utilities/loaderRequest';

const EventDetailPage = () => {
  const event = useRouteLoaderData('event-detail');
  console.log(event);

  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const loadedData = await loaderRequest({
    url: 'https://events-ffacd-default-rtdb.firebaseio.com/events.json/',
  });

  const loadedEvent = loadedData.find(event => event.id === id);

  return loadedEvent;
};
