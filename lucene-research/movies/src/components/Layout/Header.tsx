import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
          alt="logo"
          height="35"
        />
      </a>

      <ul className={styles.navigation}>
        <li>
          <NavLink
            to="/lucene"
            style={isActive => ({
              color: isActive ? "#CC0B30" : "white",
              fontWeight: 'bold'
           })}
          >
            Lucene Research
          </NavLink>
        </li>

        <li>
          <Link to="/graphs">Graph Libraries</Link>
        </li>
        
        <li id="private-route">
          <Link to="/graphs">Private Route</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
