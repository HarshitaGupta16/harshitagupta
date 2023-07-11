import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Harshita's Porfolio</h2>
      <div className={styles["nav-items"]}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
