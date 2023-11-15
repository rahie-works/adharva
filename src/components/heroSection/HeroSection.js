import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';
import { CONNECT_BUTTON_NAME, REGISTER_BUTTON_NAME } from '../button/constants';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ADHARVA INSTITUTE OF COMMERCE</h1>
      <p>Accepting aspirants for DEC 2023 intake now.!!</p>
      <div className='hero-btns'>
        <Button
          buttonName={CONNECT_BUTTON_NAME}
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONNECT US
        </Button>
        <Button
          buttonName={REGISTER_BUTTON_NAME}
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;