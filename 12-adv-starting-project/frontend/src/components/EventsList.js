import classes from './EventsList.module.css';
import { Link } from 'react-router-dom';

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>{event.title}</Link>
            <img src={event.image} alt={event.title} />
            <div className={classes.content}>
              <h2>{event.title}</h2>
              <time>{event.date}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
