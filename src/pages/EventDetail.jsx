import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const event = useRouteLoaderData('event-detail');
  console.log(event);

  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const res = await fetch(
    `https://events-ffacd-default-rtdb.firebaseio.com/events.json/`
  );

  const data = await res.json();

  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      title: data[key].title,
      date: data[key].date,
      img: data[key].img,
      description: data[key].description,
    });
  }

  const loadedEvent = loadedData.find(event => event.id === id);

  console.log(loadedData);
  return loadedEvent;
};
