import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const StyledCourseSelectionScreen = styled.div`
  color: white;
  margin-top: 10vh;
  font-size: 1.5vw;
  animation: 2.5s ${simpleAnimation};
`;

export const StyledRegisterTitle = styled.h1`
    text-align: center;
    animation: 1s ${simpleAnimation}
`

export const CourseSelectionLabel = styled.p`
    margin-top: 3vh;
    text-align: center;
    font-size: 1.7vh;
`
