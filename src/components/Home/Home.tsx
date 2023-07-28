import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import TechStack from "./TechStack";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.name}>
            Hi <div className={styles.emoji}>👋</div>
            <span> My name is </span>
            <span className={styles.purple}>Harshita</span>
            <div>
              and I am a <span className={styles.purple}>Web Developer</span>
            </div>
          </div>
          <div className={styles["about-box"]}>
            <p>
              I am a Software Developer specializing in Frontend development.
            </p>
            <div>
              Currently working at HCL Technologies Noida, one of the India's
              leading IT giants.
            </div>
            <p>Prior to this I have experiance working at Infosys Bangaluru.</p>
            <div>
              In my spare time, I like building small applications and write
              technical blogs on frontend technologies such as React,
              JavaScript.
            </div>
            <p>
              You can find all my <Link to={"/projects"}>Projects</Link> and{" "}
              <Link to={"/blogs"}>Blogs</Link> here.
            </p>
          </div>
        </div>
        <div>
          <img src="/assets/my-pic.png" className={styles.image} />
        </div>
      </div>
      <div className={styles.secondContainer}>
        <TechStack />
        <Contact />
      </div>
    </>
  );
};

export default Home;
