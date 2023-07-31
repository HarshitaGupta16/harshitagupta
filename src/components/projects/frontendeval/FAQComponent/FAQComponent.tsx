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
    question: "How long do cats live?",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

interface AccordianProps {
  faqId: string;
  title: string;
  body: string;
}

const Accordian = ({ faqId, title, body }: AccordianProps) => {
  const [open, setOpen] = useState<string | boolean>("ques1" || false);
  const handleChange = (id: string) => {
    setOpen((prevId) => (prevId === id ? false : id));
  };
  return (
    <div className={styles.accordian} key={faqId}>
      <div onClick={() => handleChange(faqId)} className={styles.question}>
        {open === faqId ? (
          <i className="fa fa-caret-down"></i>
        ) : (
          <i className="fa fa-caret-right"></i>
        )}
        {title}
      </div>
      {open === faqId && <div className={styles.answer}>{body}</div>}
    </div>
  );
};

const FAQComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Frequestly asked questions</h1>
      {FAQData.map((faq) => (
        <Accordian
          key={faq.id}
          title={faq.question}
          body={faq.answer}
          faqId={faq.id}
        />
      ))}
    </div>
  );
};

export default FAQComponent;
