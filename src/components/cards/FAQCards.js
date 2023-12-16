import './FAQCards.css'
function FAQCards(props) {

    const {cardData, sectionData} = props;

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
                    <li className='faq_card__item' key={index}>
                    <div>
                        <h2>Q: {eachItem.question}</h2>
                        <h3 className='show_answer'>A: {eachItem.answer}</h3>
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