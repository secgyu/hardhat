import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faCogs, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Smart Safety Helmet Control Panel</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/control">
              <FontAwesomeIcon icon={faCogs} /> Control Panel
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
