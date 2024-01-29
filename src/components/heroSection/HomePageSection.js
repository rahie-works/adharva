import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HomePageSection.css';
import { CONNECT_BUTTON_NAME, REGISTER_BUTTON_NAME } from '../button/constants';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInTitle = styled.h1`
    animation: 1s ${simpleAnimation}
`
const FadeInPara = styled.p`
    animation: 3s ${simpleAnimation};
`;

const FadeInButtons = styled.div`
    animation: 5s ${simpleAnimation};
`;

function HomePageSection() {
  return (
    <div className='hero-container'>
      <FadeInTitle>ADHARVA INSTITUTE OF COMMERCE</FadeInTitle>
      <FadeInPara>Accepting aspirants for DEC 2023 intake now.!!</FadeInPara>
      <FadeInButtons className='hero-btns'>
        <Button
          buttonName={CONNECT_BUTTON_NAME}
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONNECT WITH US
        </Button>
        <Button
          buttonName={REGISTER_BUTTON_NAME}
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          REGISTER NOW
        </Button>
      </FadeInButtons>
    </div>
  );
}

export default HomePageSection;