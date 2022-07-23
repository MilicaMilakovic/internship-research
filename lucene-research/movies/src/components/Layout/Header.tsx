import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/authSlice";

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header}>
      <a
        href="https://bravosystems.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
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

        {!isAuthenticated && (
          <li>
            <Link to="/login" className={styles.login}>
              Login
            </Link>
          </li>
        )}

        {isAuthenticated && (
          <li>
            <Link
              to="/"
              onClick={() => dispatch(logout())}
              className={styles.login}
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
