import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Courses We Offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/services/img-4.jpg'
              text='With solid placement for job seekers as an accountant!'
              label='CPA'
              path='/services'
            />
            <CardItem
              src='assets/services/img-6.jpg'
              text='To grow yourself with your own knowledge and skills'
              label='CGP'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='assets/services/img-9.jpg'
              text='For those who ready for lead tomorrow'
              label='CAT'
              path='/services'
            />
            <CardItem
              src='assets/services/img-home.jpg'
              text='Understand GST from Practitioners'
              label='GST'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;