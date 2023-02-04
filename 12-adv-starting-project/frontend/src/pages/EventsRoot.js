import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

// Outlet contains children routes from the App file

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  )
}

export default EventsRootLayout;