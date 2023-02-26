import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import EventsPage from "./EventsPage";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to={HomePage}>Home</Link>
          </li>
          <li>
            <Link to={EventsPage}>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
