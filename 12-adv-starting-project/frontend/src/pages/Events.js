// import { Link } from 'react-router-dom';
import EventsList from '../components/EventsList'

const EVENTS = [
  { id: 'e1', title: 'Beatles Revival Concert' },
  { id: 'e2', title: 'Salsa Dancing at Mercato 60' },
  { id: 'e3', title: 'New Balance Indoor Track Meet' }
];

function Events() {
  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={EVENTS} />
    </>
  );
}

export default Events;