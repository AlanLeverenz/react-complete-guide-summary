import { useParams, Link } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventsDetailPage({ event }) {
  const params = useParams();

  const id = params.eventId;

  // relative="route" goes back to parent route (in App)
  // relative="path" moves one segment in the path

  //       <EventItem event={event} />
  return (
    <>
      <h1>Event Detail</h1>
      <p>Event ID: {params.eventId}</p>
      <EventItem event={id} />
      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );
}

export default EventsDetailPage;