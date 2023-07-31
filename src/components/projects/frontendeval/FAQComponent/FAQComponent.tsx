import { useState } from "react";
import styles from "./FAQComponent.module.css";

const FAQData = [
  {
    id: "ques1",
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    id: "ques2",
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    id: "ques3",
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

interface AccordianProps {
  id: string;
  title: string;
  body: string;
}

const Accordian = ({ id, title, body }: AccordianProps) => {
  const [open, setOpen] = useState<string | boolean>("ques1" || false);
  const handleChange = (id: string) => {
    setOpen(id === id);
  };
  return (
    <div className={styles.accordian}>
      <div onClick={() => handleChange(id)}>{title}</div>
      {open && <div>{body}</div>}
    </div>
  );
};

const FAQComponent = () => {
  const [open, setOpen] = useState<string | boolean>("ques1" || false);
  const handleChange = (id: string) => {
    setOpen((prevId) => (prevId === id ? false : id));
  };
  return (
    <div className={styles.container}>
      <h1>Frequestly asked questions</h1>
      {FAQData.map((faq) => (
        <div className={styles.accordian} key={faq.id}>
          <div onClick={() => handleChange(faq.id)} className={styles.question}>
            {open === faq.id ? (
              <i className="fa fa-caret-down"></i>
            ) : (
              <i className="fa fa-caret-right"></i>
            )}
            {faq.question}
          </div>
          {open === faq.id && <div className={styles.answer}>{faq.answer}</div>}
        </div>
        // <Accordian
        //   key={faq.id}
        //   title={faq.question}
        //   body={faq.answer}
        //   id={faq.id}
        // />
      ))}
    </div>
  );
};

export default FAQComponent;
