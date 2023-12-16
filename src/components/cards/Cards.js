import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import FAQCards from './FAQCards';

function Cards(props) {

  const {sectionData, cardData} = props;

  return (
    <div className="cards_background_for_services">
      <h1>{sectionData.title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {cardData.map((eachRow) => {
            return (
              <ul className={sectionData.section === "FAQ" ?  '.faq_cards__item':'cards__items'}>
                  { eachRow.map((eachItem, index) => {
                  
                  return (
                      <CardItem
                        key={index}
                        src={eachItem.backgroundImage}
                        description={eachItem.description}
                        label={eachItem.label}
                        path='/services'
                      />
                  )
                })}
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;