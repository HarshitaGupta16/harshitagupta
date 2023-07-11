import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={styles["back-btn"]}>
      <i className="fa fa-chevron-left"></i>
      <span className={styles["back-text"]}>Back</span>
    </button>
  );
};

export default BackButton;
