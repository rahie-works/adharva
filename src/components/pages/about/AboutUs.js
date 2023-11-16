import React from 'react';
import './About.css';
import {ABOUT_US_TEXT_1, ABOUT_US_TEXT_2, ABOUT_US_TEXT_3, WHY_US_1, WHY_US_2, WHY_US_3} from './constants'

export default function SignUp() {
  return (
    <>
      <div className='about'>
        <div className='journey-section'>
          <h1>About Us</h1>
          <p>{ABOUT_US_TEXT_1}</p>
          <p>{ABOUT_US_TEXT_2}</p>
          <p>{ABOUT_US_TEXT_3}</p>
        </div>
        <div className='why-us-section'>
          <h1>Why Us.?</h1>
          <p>{WHY_US_1}</p>
          <p>{WHY_US_2}</p>
          <p>{WHY_US_3}</p>
        </div>
        <div className='value-section'>
          <h1>Vision</h1>
          <p>AIC in brand of trust</p>
          <h1>Mission</h1>
          <p>To transform lives through affordable, quality and value-based education.</p>
          <div>
            <h1>Values</h1>
            <div className='values'>
              <p>Passion towards work.</p>
              <p>Respect for people.</p>
              <p>Integrity in every transaction.</p>
              <p>Dedication for result.</p>
              <p>Empowerment for development.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}