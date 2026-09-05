import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./join.module.css";

const faqData = [
  {
    question: "What does our Foundation do?",
    answer:
      "Nekdisha Foundation works to support people in need, care for animals, and contribute towards a better and healthier environment.",
  },
  {
    question: "How can I support Nekdisha?",
    answer:
      "You can support our work by making a donation, volunteering your time, or helping us spread awareness about our initiatives.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your donation helps support our various initiatives focused on people, animals, and the environment.",
  },
];

const Join = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className={styles.joinUs}>
      <div className="container">
        <div className={`${styles.joinContent} flex ac`}>
          <div className={`${styles.imgBox} flex ac jc`}>
            <div className={`${styles.imgInner} flex ac jc`}></div>

            <img src="/HomePage/JoinUs/why-join.jpg" alt="Team Image" />
          </div>

          <div className={`${styles.details} flex fClmn`}>
            <p>❤️ Join us</p>
            <h2>Why We Need You Become a Volunteer</h2>
            <p>
              We help companies develop powerful corporate social
              responsibility, grantmaking, and employee engagement strategies.
            </p>

            <div className={styles.faqContent}>
              {faqData.map((faq, index) => (
                <div
                  className={`${styles.faqBox} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => handleFaq(index)}
                  key={index}
                >
                  <div className={styles.faqHead}>
                    <p>{faq.question}</p>

                    <ChevronDown
                      className={styles.faqIcon}
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
