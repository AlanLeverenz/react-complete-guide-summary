import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="events">The List of Events</Link>
      </p>
    </>
  );
}

export default HomePage;