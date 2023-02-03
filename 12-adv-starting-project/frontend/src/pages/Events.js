import EventsList from '../components/EventsList';

const EVENTS = [
  { id: 'e1', title: 'Beatles Revival Concert', image: '', date: 'Feb 2, 2023', description: 'Virtual concert with the Fabulous Four' },
  { id: 'e2', title: 'Salsa Dancing at Mercato 60', image: '', date: 'Feb 3, 2023', description: 'Live salsa music in Merida' },
  { id: 'e3', title: 'New Balance Indoor Track Meet', image: '', date: 'Feb 4, 2023', description: 'The best track stars in the US' }
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

