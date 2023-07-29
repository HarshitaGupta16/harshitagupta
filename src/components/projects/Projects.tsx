import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles["nav-items"]}>
        <ul>
          <li className={styles["project-type"]}>
            <Link to="/projects/frontendeval">Frontendeval</Link>
          </li>
          <li className={styles["project-type"]}>
            <Link to="/projects/small-apps">Small Projects</Link>
          </li>
          <li className={styles["project-type"]}>
            <Link to="/projects/big-projects">Big Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
