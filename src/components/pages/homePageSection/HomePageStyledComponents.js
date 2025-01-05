import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const SlideContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    &.active {
      opacity: 1;
      animation: ${simpleAnimation} 1s ease-in-out;
    }
  }

  .indicator-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .indicator {
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
  }

  .indicator.active {
    opacity: 1;
    background-color: #3498db;
  }
`;

export const StyledBannerFigure = styled.figure`
    width: 100%;
    height: 20vh;
`
export const StyledBannerImage = styled.img`
    // width: 100%;
    // height: 20vh;
`

export const StyledHomePageButton = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: white;
    cursor: pointer;
    z-index: 1;
    padding: 5px;
    background: transparent;
    border: null;
    left: ${(props) => props.left ? props.left : null};
    right: ${(props) => props.right ? props.right : null};
`
