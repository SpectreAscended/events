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
  return loaderRequest({
    url: 'https://events-ffacd-default-rtdb.firebaseio.com/events.jsonzzz',
  });
};

// export const loader = async () => {
//   const res = await fetch(
//     'https://events-ffacd-default-rtdb.firebaseio.com/events.json'
//   );

//   if (!res.ok) throw new Error('Problem loading event');

//   const data = await res.json();

//   const loadedEvents = [];
//   for (const key in data) {
//     loadedEvents.push({
//       id: key,
//       title: data[key].title,
//       img: data[key].img,
//       date: data[key].date,
//       description: data[key].description,
//     });
//   }

//   return loadedEvents;
// };
