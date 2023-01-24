import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <headher>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </headher>
  )
}

export default MainNavigation;