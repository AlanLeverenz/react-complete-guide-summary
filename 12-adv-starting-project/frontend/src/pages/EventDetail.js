import { useParams, Link } from 'react-router-dom'

function EventsDetailPage() {
  const params = useParams();

  // relative="route" goes back to parent route (in App)
  // relative="path" moves one segment in the path
  return (
    <>
      <h1>Event Details</h1>
      <p>{params.eventId}</p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );
}

export default EventsDetailPage;