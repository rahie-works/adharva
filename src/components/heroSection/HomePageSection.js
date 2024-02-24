import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HomePageSection.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import {createClient} from 'contentful';

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

  const client = createClient({space: "s7ec4kr81lvi", accessToken: "mGPxYipX3NZZGktczzp8BrDei1Tq6DoikETMzVLWHaw"})
  const [title, setTitle] = React.useState("");
  const [subTitle, setSubTitle] = React.useState("");
  const [buttons, setButtons] = React.useState([]);

  React.useEffect( () => {
    const fecthData = async () => {
      try {
        const homePageData = await client.getEntry({id: "1TecGUIXMOZJfBCcGSjjyw"});
        setTitle(homePageData.fields.homeTitle)
        setSubTitle(homePageData.fields.homeSubTitle)
        setButtons(homePageData.fields.homeButtonsList.buttons)
      } catch(error) {
        console.log('==Data not received', error);
      }
  }
  fecthData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='hero-container'>
      <FadeInTitle>{title || "ADHARVA INSTITUTE OF COMMERCE"}</FadeInTitle>
      <FadeInPara>{subTitle || "Accepting aspirants for DEC 2023 intake now.!!"}</FadeInPara>
      <FadeInButtons className='hero-btns'>
        {buttons.map((eachButton, index) => {
          return (
            <Button
              key={index}
              buttonName={eachButton.name}
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              {eachButton.title}
            </Button>
          )
        })}
      </FadeInButtons>
    </div>
  );
}

export default HomePageSection;