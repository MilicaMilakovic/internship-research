import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.navigation}>
        <li>
          <a href="">Lucene Research</a>
        </li>
        <li>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo" height="35" />
          </a>
        </li>
        <li>
          <a href="">Graph Libraries</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
