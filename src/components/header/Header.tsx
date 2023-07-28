import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <h2 className={styles.title}>Harshita Gupta</h2>
      </Link>
      <div className={styles["nav-items"]}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(170, 107, 228)" : "white",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>About</li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(170, 107, 228)" : "white",
                };
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
