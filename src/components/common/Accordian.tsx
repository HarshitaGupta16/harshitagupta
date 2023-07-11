import { useState } from "react";

interface AccordianProps {
  [key: string]: any;
  title: string;
  description: string;
  id: string;
  category: string;
}

import styles from "./Accordian.module.css";
import { Link } from "react-router-dom";

const Accordian = ({ title, description, id, category }: AccordianProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.accordian}>
      <div className={styles["accordian-header"]}>
        <Link to={`/projects/${category}/${id}`}>
          <div>{title}</div>
        </Link>
        <div
          style={{ color: "white" }}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? (
            <i className="fa fa-chevron-down"></i>
          ) : (
            <i className="fa fa-chevron-up"></i>
          )}
        </div>
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
};

export default Accordian;
