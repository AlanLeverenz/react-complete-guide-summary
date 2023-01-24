import { Link } from 'react-router-dom';

function HomePage() {
  // Link listens for clicks on that element
  // prevents browser from reloading all the html
  // looks at the route definitions
  // changes the url without sending a new html request
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">The List of Products</Link>
      </p>
    </>
  );
}

export default HomePage;