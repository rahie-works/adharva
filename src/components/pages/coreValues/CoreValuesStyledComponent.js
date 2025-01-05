import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeUpAnimation = keyframes`
from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const increaseLetterSpacing = keyframes`
  from {
    letter-spacing: normal;
  }
  to {
    letter-spacing: 0.25em;
  }
`;

export const CoreValuesBackground = styled.div`
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    padding: 3rem;

    @media screen and (max-width: 480px) {
        padding: 1rem;
        padding-top: 5vh;
    }
`;

export const CoreValueContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 30vh;
    color: white;
    margin-left: 2vw;
    margin-bottom: 4vh;

    @media screen and (max-width: 480px) {
        height: 20vh;
    }
`;

export const CoreValue = styled.div`
    justify-content: left;
    padding-top: 6vh;

    @media screen and (max-width: 480px) {
        padding-top: 5vh;
    }
`;

export const FadeInTitle = styled.h3`
  display: flex;
  width: 100%;
  font-size: 8em;
  justify-content: center;
  animation: 1s ${fadeInAnimation};

  @media only screen and (max-width: 480px) {
    font-size: 2em;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 3em;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 4em;
  }
`;

export const FadeUpAcronym = styled.h1`
  display: flex;
  width: 100%;
  animation: ${fadeUpAnimation} 1s ease-in-out both,
    ${increaseLetterSpacing} 1s ease-in-out 1s both;
  font-size: 15em;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 6.5em;
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 10em;
  }
`;

export const FadeInValue = styled.p`
  display: flex;
  justify-content: left;
  margin-left: 1.5vmin;
  font-size: 1.5vw;
  width: 100%;
  animation: ${fadeInAnimation} 1s ease-in-out both;
  animation-delay: 1.5s;

  @media only screen and (max-width: 768px) {
    font-size: 0.7em;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 1.6em;
  }
`;