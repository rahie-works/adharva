import styled, { keyframes } from "styled-components";
import { fadeIn, slideInUp } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInAnimation = keyframes`${slideInUp}`;

export const FadeInMoreInfoContainer = styled.div`
  background-color: #00527f;
  background-image: linear-gradient(180deg, #1a3d6b 0%, #000000 100%);
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5vw;
`;

export const FadeInConatiner = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FadeInTabInContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  cursor: pointer;
`;

export const FadeInTitle = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 5em;
  animation: 1s ${fadeInAnimation};

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.5em;
  }
`;

export const FadeInContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2em;
  line-height: 1em;

  @media only screen and (max-width: 768px) {
    margin: 0em;
  }
`;

export const FadeInContent = styled.span`
  width: 100%;
  font-size: 1.9em;
  line-height: 1.5em;
  animation: 2.5s ${slideInAnimation};
  margin-block: 2em;
  text-align: ${(props) => (props.alignment ? props.alignment :  "center")};
  color: white;

  @media only screen and (max-width: 480px) {
    font-size: 1em;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.4em;
  }
`;