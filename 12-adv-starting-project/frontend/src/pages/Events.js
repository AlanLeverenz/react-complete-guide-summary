// import { Link } from 'react-router-dom';
import EventsList from '../components/EventsList';
import EventsNavigation from '../components/EventsNavigation';

// const EVENTS = [
//   { id: 'e1', title: 'Beatles Revival Concert' },
//   { id: 'e2', title: 'Salsa Dancing at Mercato 60' },
//   { id: 'e3', title: 'New Balance Indoor Track Meet' }
// ];

// <EventsList events={EVENTS} />

function Events() {
  return (
    <>
      <h1>Events Page</h1>
      <EventsNavigation />
    </>
  );
}

export default Events;

