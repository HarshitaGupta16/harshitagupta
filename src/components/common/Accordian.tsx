import { useState } from "react";

interface AccordianProps {
  [key: string]: any;
  title: string;
  description: string;
  id: string;
  category: string;
  image?: string;
  link?: string;
  mainCategory: string;
  date?: string;
}

import styles from "./Accordian.module.css";
import { Link } from "react-router-dom";

const Accordian = ({
  title,
  description,
  id,
  category,
  image,
  link,
  mainCategory,
  date,
}: AccordianProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.accordian}>
      <div className={styles["accordian-header"]}>
        {mainCategory === "projects" ? (
          category === "big-projects" && link ? (
            <Link to={link} target="_blank">
              <div className={styles.title}>{title}</div>
            </Link>
          ) : (
            <Link to={`/${mainCategory}/${category}/${id}`}>
              <div className={styles.title}>{title}</div>
            </Link>
          )
        ) : (
          <div className={styles.title}>{title}</div>
        )}
        <button
          style={{ color: "white" }}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={styles.chevron}
        >
          {isOpen ? (
            <i className="fa fa-chevron-down"></i>
          ) : (
            <i className="fa fa-chevron-up"></i>
          )}
        </button>
      </div>
      {isOpen &&
        (!image ? (
          <>
            {date && (
              <span className={styles.date} style={{ marginLeft: "10px" }}>
                {date}
              </span>
            )}
            <div className={styles.description}>{description}</div>
          </>
        ) : (
          <div className={styles["blogs-content"]}>
            <img src={image} alt={title.split("")[0]} />
            <div className={styles["blogs-description"]}>
              <div className={styles.date}>{date}</div>
              <span dangerouslySetInnerHTML={{ __html: description }}></span>
              ...
              <span className={styles["show-more-link"]}>
                {" "}
                {link && (
                  <Link to={link} target="_blank">
                    Show more
                  </Link>
                )}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordian;
