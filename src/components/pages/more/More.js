import React, {useState, useRef} from 'react';
import './More.css';
import {ABOUT_US_TEXT_1, ABOUT_US_TEXT_2, ABOUT_US_TEXT_3, WHY_US_1, WHY_US_2, WHY_US_3} from './constants'
import TabBar from './tabs/TabBar';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 1s ${simpleAnimation}
`


export default function More() {

  const [contentText, setContentText] = useState(ABOUT_US_TEXT_1+ABOUT_US_TEXT_2+ABOUT_US_TEXT_3)
  const ref = useRef();

  const selectedtab = (tab) => {
    console.log("--tab", tab)
    switch(tab) {
      case "About Us":
        setContentText(ABOUT_US_TEXT_1+ABOUT_US_TEXT_2+ABOUT_US_TEXT_3)
        ref.current.style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
        break;
      case "Our Mission":
        setContentText("To transform lives through affordable, quality and value-based education.")
        ref.current.style.backgroundImage = "linear-gradient(to top, #37ecba 0%, #72afd3 100%)";
        break;
      case "Our Vision":
        setContentText("AIC in brand of trust")
        ref.current.style.backgroundImage = "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%";
        break;
      default:
        break;
    }
  }

  return (
    <div className='container' ref={ref} style={{backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'}}>
      <TabBar tab={selectedtab}/>
      <FadeInDiv className='content'>
        {contentText}
      </FadeInDiv>
    </div>
  )
}

{/* <>
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
    </> */}