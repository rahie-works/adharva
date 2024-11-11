// component
import Partners from "../pages/partners/Partners";
// styles
import "./FAQCards.css";

export default function FAQCards(props) {
  const { cardData, sectionData } = props;

  return (
    <div className="cards_background_for_faq">
      <Partners />
      <h1>{sectionData.title}</h1>
      <div className="faq_cards__container">
        <div className="faq_cards__wrapper">
          {cardData.map((eachRow, index) => {
            return (
              <ul className=".faq_cards__item" key={index}>
                {eachRow.map((eachItem, index) => {
                  return (
                    <li className="faq_card__item" key={index}>
                      <h2 className="faq_question">? {eachItem.question}</h2>
                      <h3 id="faq_answer"> {eachItem.answer}</h3>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
