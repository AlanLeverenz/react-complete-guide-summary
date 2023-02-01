import { Link } from 'react-router-dom';

const EVENTS = [
  { id: 'e1', title: 'Beatles Revival Concert' },
  { id: 'e2', title: 'Salsa Dancing at Mercato 60' },
  { id: 'e3', title: 'New Balance Indoor Track Meet' }
];

function Events() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Events;