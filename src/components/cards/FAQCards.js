import './FAQCards.css';
import { useRef } from 'react';
function FAQCards(props) {

    const {cardData, sectionData} = props;

    const questionRef = useRef(null);
    const showAnswer = (eachItem) => {
      questionRef.current = eachItem.target;
      eachItem.target.classList.add("")
      console.log("==questionRef", questionRef.current)
    }

    return (
    <div className="cards_background_for_faq">
      <h1>{sectionData.title}</h1>
      <div className='faq_cards__container'>
        <div className='faq_cards__wrapper'>
          {cardData.map((eachRow) => {
            return (
              <ul className='.faq_cards__item'>
                  { eachRow.map((eachItem, index) => {
                  return (
                    <li className='faq_card__item' key={index} onClick={showAnswer}>
                      <div label={`question_${index}`}>
                          <h2 className='faq_question'>? {eachItem.question}</h2>
                          <h3 id='faq_answer'> {eachItem.answer}</h3>
                      </div>
                    </li>
                  )
                  })}
              </ul>
            )
          })}
        </div>
      </div>
    </div>
    )
}

export default FAQCards;