import { useParams, Link } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventsDetailPage(props) {
  const params = useParams();

  // relative="route" goes back to parent route (in App)
  // relative="path" moves one segment in the path

  //       <EventItem event={props.event} />
  return (
    <>
      <h1>Event Details</h1>
      <p>{params.eventId}</p>

      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );
}

export default EventsDetailPage;