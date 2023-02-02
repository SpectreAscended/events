import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';
import DUMMY_EVENTS, { loadEvents } from '../store/dummyEvents';

console.log(DUMMY_EVENTS);

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await loadEvents();

      const loadedEvents = [];
      for (const key in data) {
        loadedEvents.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          img: data[key].img,
          date: data[key].date,
        });
      }
      setEvents(loadedEvents);
    };
    loadData();
  }, [loadEvents]);

  return (
    <section className={classes.events}>
      <h2>All Events</h2>
      <ul className={classes.list}>
        {events.map(ev => {
          return (
            <li key={ev.id} className={classes.item}>
              <Link to={`/events/${ev.id}`}>
                <img src={ev.img} alt={ev.title} />
                <div className={classes.content}>
                  <h3>{ev.title}</h3>
                  <span>{ev.date}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default EventsList;
