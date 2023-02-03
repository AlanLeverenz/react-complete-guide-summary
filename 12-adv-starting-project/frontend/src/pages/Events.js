import EventsList from '../components/EventsList';

const EVENTS = [
  { id: 'e1', title: 'Beatles Revival Concert', image: 'https://www.colorado.com/sites/default/files/styles/slideshow_slide_medium/public/listing_images/profile/8169/0-denver_skyline_twilight_7d5b543c-c9c8-4714-acbc-6ce2c5d2e204.jpg?h=c6980913&itok=NO77EanX', date: 'Feb 2, 2023', description: 'Virtual concert with the Fabulous Four' },
  { id: 'e2', title: 'Salsa Dancing at Mercato 60', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg', date: 'Feb 3, 2023', description: 'Live salsa music in Merida' },
  { id: 'e3', title: 'New Balance Indoor Track Meet', image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?ca=6&ce=1&s=1920x822', date: 'Feb 4, 2023', description: 'The best track stars in the US' }
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={EVENTS} />
    </>
  );
}

export default EventsPage;

