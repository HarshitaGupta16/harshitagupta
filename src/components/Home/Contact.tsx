import { Link } from "react-router-dom";
import { contactData } from "../../utils/contactData";
import styles from "./Home.module.css";

const Contact = () => {
  return (
    <ul className={styles.contact}>
      {contactData.map((contact) => {
        return (
          <li key={contact.name} style={{ marginRight: 20 }}>
            <Link to={contact.link} target="_blank">
              <img src={contact.icon} alt={contact.name} width={40} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
