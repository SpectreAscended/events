const DUMMY_EVENTS = [
  {
    id: 'ev-1',
    title: 'Test Event 1',
    description: 'This is my awesome event',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mar 23, 2023',
  },
  {
    id: 'ev-2',
    title: 'Test Event 2',
    description: 'This is my other event',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Apr 14, 2023',
  },
];

export default DUMMY_EVENTS;

export const loadEvents = async () => {
  try {
    const res = await fetch(
      'https://events-ffacd-default-rtdb.firebaseio.com/events.json'
    );
    if (!res.ok) throw new Error('Problem fetching event');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
