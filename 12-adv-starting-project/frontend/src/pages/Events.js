import { useLoaderData } from 'react-router-dom';

// gets closest loader data
// useLoaderData gets the result of a promise

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  // fetch returns a Response promise
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
    return response;
  }
}


// const resData = await response.json();
// // return resData.events;

// // Response function built into the browser, captures a response object. it is client side code
// const res = new Response('any data', {status: 201});
// return res;