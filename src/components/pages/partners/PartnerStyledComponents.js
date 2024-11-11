import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const FadeInLogos = styled.div`
  animation: 3s ${simpleAnimation};
  margin-block: 5vh;
`;

export const FadeInPartnersTile = styled.div`
  animation: 3s ${simpleAnimation};
  font-size: 5vw;
  color: white;
  padding-top: 3vh;
  text-align: center;

  @media only screen and (max-width: 767px) {
    font-size: 1.6em;
  }

  @media screen and (min-width: 769px) {
    font-size: 3em;
  }
`;

export const FadeInPartnersLogoRow = styled.div`
  animation: 3s ${simpleAnimation};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5vw;
  flex-wrap: wrap;
`;

export const PartnersLogo = styled.img`
    flex-basis: calc(25% - 10px);
    width: 15%;
    height: 15%;

    @media only screen and (max-width: 767px) {
        flex-basis: calc(33% - 10px);
        width: 15%;
        height: 15%;
      }
`