import { Link } from "react-router-dom";

import "./nav.styles.scss";

const Nav = () => (
  <>
    <nav role="navigation" className="nav">
      <ul>
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-item">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="nav-item">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-item">
            Order Online
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Nav;
