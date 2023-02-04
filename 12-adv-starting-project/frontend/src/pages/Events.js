import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Fetching events failed.');
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;


// import EventsList from '../components/EventsList';
// <EventsList events={DUMMY_EVENTS} />

// import { Link } from 'react-router-dom';

// const DUMMY_EVENTS = [
//   { id: 'e1', title: 'Beatles Revival Concert', image: 'https://www.colorado.com/sites/default/files/styles/slideshow_slide_medium/public/listing_images/profile/8169/0-denver_skyline_twilight_7d5b543c-c9c8-4714-acbc-6ce2c5d2e204.jpg?h=c6980913&itok=NO77EanX', date: 'Feb 2, 2023', description: 'Virtual concert with the Fabulous Four' },
//   { id: 'e2', title: 'Salsa Dancing at Mercato 60', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg', date: 'Feb 3, 2023', description: 'Live salsa music in Merida' },
//   { id: 'e3', title: 'New Balance Indoor Track Meet', image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?ca=6&ce=1&s=1920x822', date: 'Feb 4, 2023', description: 'The best track stars in the US' }
// ];

// function EventsPage() {
//   return (
//     <>
//       <h1>Events Page</h1>
//       <ul>
//         {DUMMY_EVENTS.map(event =>
//           <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//           </li>)}
//       </ul>
//     </>
//   );
// }

// export default EventsPage;

