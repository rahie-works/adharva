import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {

  const {sectionData, cardData} = props;

  return (
    <div className='cards'>
      <h1>{sectionData}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {cardData.map((eachRow) => {
            return (
              <ul className='cards__items'>
                  { eachRow.map((eachItem) => {
                  return (
                      <CardItem
                        src={eachItem.backgroundImage}
                        description={eachItem.description}
                        question={eachItem.question}
                        answer={ eachItem.answer}
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