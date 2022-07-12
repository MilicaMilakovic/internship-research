import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = "styles.active";

  const active = {
    color: "#CC0B30",
    fontWeight: "bold",
  };

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
            end
            to="/lucene"
            style={({ isActive }) => ({
              color: isActive ? "#CC0B30" : "#ffffff",
              fontWeight: "bold",
            })}
          >
            Lucene Research
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/graphs"
            end
            style={({ isActive }) => ({
              color: isActive ? "#CC0B30" : "#ffffff",
              fontWeight: "bold",
            })}
          >
            Graph Libraries
          </NavLink>
        </li>

        <li id="private-route">
          <NavLink
            to="/private"
            style={({ isActive }) => ({
              color: isActive ? "#CC0B30" : "#ffffff",
              fontWeight: "bold",
            })}
          >
            Private Route
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
