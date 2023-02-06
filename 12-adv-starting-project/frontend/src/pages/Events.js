import { useLoaderData } from 'react-router-dom';

// gets closest loader data
// useLoaderData gets the result of a promise

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;


