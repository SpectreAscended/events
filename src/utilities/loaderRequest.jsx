import { json } from 'react-router-dom';

const loaderRequest = async requestConfig => {
  let options;
  if (!requestConfig.method) {
    options = {};
  } else {
    options = {
      method: requestConfig.method,
      headers: requestConfig.headers || { 'Content-type': 'application/json' },
      body: JSON.stringify(requestConfig.body),
    };
  }
  try {
    const res = await fetch(requestConfig.url, options);

    if (!res.ok) throw new Error('Problem fetching data');

    const data = await res.json();

    const loadedEvents = [];
    for (const key in data) {
      loadedEvents.unshift({
        id: key,
        title: data[key].title,
        img: data[key].img,
        date: data[key].date,
        description: data[key].description,
        uid: data[key].uid,
      });
    }
    return loadedEvents;
  } catch (err) {
    console.error(err);
    throw json({ message: 'Problem fetching data' }, { status: 500 });
  }
};

export default loaderRequest;
