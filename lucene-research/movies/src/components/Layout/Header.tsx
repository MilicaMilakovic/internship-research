import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.navigation}>
        <li>
          <Link to="/lucene">Lucene Research</Link>
        </li>
        <li>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo" height="35" />
          </a>
        </li>
        <li>
          <Link to="/graphs">Graph Libraries</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
