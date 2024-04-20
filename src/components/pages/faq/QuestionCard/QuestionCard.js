// constants
import { FAQ_BANK } from "./QuestionBank";

// styles
import "./QuestionCard.css";

export default function QuestionCard() {
  return (
    <>
      <div className="question-section">
        {FAQ_BANK.map((faq, index) => {
          return (
            <div className="question-card" key={index}>
              ${faq.question}
            </div>
          );
        })}
      </div>
    </>
  );
}
