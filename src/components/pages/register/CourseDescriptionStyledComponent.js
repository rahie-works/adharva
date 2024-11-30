import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const CourseFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-bottom: 10px;
    gap: 3vw;
    justify-content: center;
    align-items: center;
`;

export const StyledCourseSelectionScreen = styled.div`
  color: white;
  font-size: 3vw;
  animation: 2.5s ${simpleAnimation};

`;

export const BodyContainer = styled.div`
    z-index: 20;
    margin-top: -15vh;
    background-image: linear-gradient(180deg, transparent 0%, #122A4A 10%, #071220 80%, transparent 100%);
    height: 100%;
`;

export const IntroBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CourseDescriptionBody = styled.p`
    padding-inline: 5vw;
    margin-top: 2vh;
    font-size: 1.7vw;
    font-family: "Raleway", sans-serif;

    @media screen and (max-width: 480px) {
        font-size: 3vw;
    }
`;

export const CourseDescriptionHeading = styled.h2`
    padding-inline: 5vw;
    margin-top: 4vh;
    text-align: left;
    font-size: 3.5vw;
    font-family: "Montserrat", sans-serif;

    @media screen and (max-width: 480px) {
        text-align: center;
        margin-top: 2vh;
        font-size: 4vw;
        font-family: "Montserra bold", sans-serif;
    }
`;

export const CPAExtraBodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;

    @media screen and (max-width: 480px) {
        width: 100%;
        display: flex;
        text-align: center;
    }
`;

export const CPAExtraBodyItem = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CPAExtraBodyDescription = styled.p`
    margin-top: 2vh;
    font-size: 2vh;
    font-family: "Montserrat", sans-serif;
    padding-inline: 1vw;

    @media screen and (max-width: 480px) {
        font-size: 3vw;
        font-family: "Montserrat", sans-serif;
        padding-inline: 2vw;
    }
`;

export const CGPExtraBodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;

    @media screen and (max-width: 480px) {
        width: 100%;
        display: flex;
        text-align: center;
    }
`;

export const CGPExtraBodyData = styled.p`
    margin-top: 2vh;
    font-size: 2vh;
    font-family: "Montserrat", sans-serif;
    padding-inline: 1vw;
`;

export const CGPExtraBodyList = styled.ol`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CGPExtraBodyDescription = styled.li`
    margin-top: 2vh;
    font-size: 2vh;
    font-family: "Montserrat", sans-serif;
    width: 70%;
    padding-inline: 1vw;


    @media screen and (max-width: 480px) {
        font-size: 3vw;
        font-family: "Montserrat", sans-serif;
        padding-inline: 2vw;
    }

`;

export const CATExtraBodyBullets = styled.li`
    margin-inline: 4vw;
    margin-top: 2vh;
    font-size: 3vw;
    font-family: "Montserrat", sans-serif;
`;

export const CATExtraBodyDescription = styled.li`
    margin-top: 2vh;
    font-size: 2vw;
    font-family: "Montserrat", sans-serif;
    padding-inline: 1vw;

    @media screen and (max-width: 480px) {
        width: 100%;
        display: flex;
        text-align: center;
    }
`;

export const CPAStickyTitle = styled.h1`
    position: relative;
    margin-bottom: 5vh;
    position: sticky;
    font-size: 8vw;
    top: 0;
`;

export const StyledImage = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    background-: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7) 100%);
    z-index: -1;
`