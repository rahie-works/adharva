import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
const fadeInAnimation = keyframes`${fadeIn}`;

export const UpcomingComponent = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  font-size: 5rem;
  color: grey;
  justify-content: center;

  @media screen and (max-width: 769px) {
    font-size: 2rem;
  }
`;

export const GalleryTabBar = styled.span`
    display: flex;
    width: 100%;
    height: 20vh;
    margin: 2vw;
`

export const TabBarItem = styled.h1`
    display: flex;
    width: 100%;
    font-size: 4rem;
    align-items: center;
    justify-content: center;
    animation: 2s ${fadeInAnimation};

    @media screen and (max-width: 769px) {
        font-size: 1.5rem;
    }
`

export const GalleryContents = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-inline: 1vw;
`

export const VideoComponent = styled.video`
    align-self: center;
    width: 80%;
    margin-bottom: 20px;
    animation: 2s ${fadeInAnimation};
`

export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1vw;

    @media only screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ImageComponent = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`