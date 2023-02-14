import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

// useLoaderData is fetched before loading the form
function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventForm event={data.event} />
  )
}

export default EditEventPage;