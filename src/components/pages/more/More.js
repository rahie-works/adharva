import React, {useState, useRef} from 'react';
import './More.css';
import {ABOUT_US_TEXT_1, ABOUT_US_TEXT_2, ABOUT_US_TEXT_3, WHY_US_1, WHY_US_2, WHY_US_3} from './constants'
import TabBar from './tabs/TabBar';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Testimonials from './testimonials/Testimonials';

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 1s ${simpleAnimation}
`


export default function More(props) {

  const {path} = props;

  const getContent = () => {
    console.log("==Here", path)
    switch (path) {
      case "About Us":
        return ABOUT_US_TEXT_1+ABOUT_US_TEXT_2+ABOUT_US_TEXT_3;
      case "Our Mission":
        return "To transform lives through affordable, quality and value-based education.";
      case "Our Vision":
        return "AIC in brand of trust";
      default:
        return ABOUT_US_TEXT_1+ABOUT_US_TEXT_2+ABOUT_US_TEXT_3;
    }
  }

  const getBackgroundColorFromClassnames = () => {
    switch (path) {
      case "About Us":
        return "aboutus_background";
      case "Our Mission":
        return "ourmission_background";
      case "Our Vision":
        return "ourvision_background";
      default:
        return "aboutus_background";
    }
  }

  const [contentText, setContentText] = useState(getContent);
  const ref = useRef();

  const selectedtab = (tab) => {
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
    <div className={"container " + getBackgroundColorFromClassnames()} ref={ref}>
      <TabBar tab={selectedtab} navigatedTo={props.path}/>
      <FadeInDiv className='content'>
        {contentText}
      </FadeInDiv>
      <Testimonials/>
    </div>
  )
}