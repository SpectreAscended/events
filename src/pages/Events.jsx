import React, { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import loaderRequest from '../utilities/loaderRequest';

const EventsPage = () => {
  const { events } = useLoaderData();

  const fallbackContent = (
    <p
      style={{
        textAlign: 'center',
        marginTop: '8rem',
        fontSize: '2rem',
        color: '#e4e0e0',
      }}
    >
      Loading...
    </p>
  );

  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={events}>
        {loadedEvents => {
          return <EventsList events={loadedEvents} />;
        }}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

export const loader = () => {
  const REQUEST_URL = import.meta.env.VITE_DATABASE_URL;

  return defer({
    events: loaderRequest({
      url: REQUEST_URL,
    }),
  });
};
