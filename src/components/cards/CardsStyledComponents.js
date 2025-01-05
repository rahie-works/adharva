import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const FadeInTitle = styled.h1`
    padding-top: 10vh;
    animation: 1s ${simpleAnimation};
`;

export const CardsBackgroundForServices = styled.div`
    background-color: #00527f;
    background-image: linear-gradient(180deg, #000000 0%, #1a3d6b 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 40px;
    color: #fff;
    padding-bottom: 2rem;
    text-align: center;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        padding: 0.2rem;
        font-size: 20px;
    }

    @media only screen and (max-width: 399px) {
        font-size: 15px;d
    }
`

export const CardContainer = styled.div`
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
`

export const CardsWrapper = styled.div`
    position: relative;
    margin: 50px 0;
`

export const CardsItems = styled.ul`
    margin-bottom: 24px;

    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`

export const CardsItem = styled.div`
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.5s ease-in;

    &.fade-in {
      opacity: 1;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        margin-bottom: 2rem;
    }
`

export const CardItemBlock = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
`

export const CardItemPicWrap = styled.div`
    position: relative;
    width: 100%;
    padding-top: 57%;
    border-radius: 10px;
    background: rgba(110, 110, 110, 0.2); /* Semi-transparent white */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* Safari support */

    @media only screen and (min-width: 768px) {
        padding-top: 47%;
    }
`

export const CardText = styled.div`
    width: 100%;
    position: absolute;
    top: 10%;
    text-align: center;
    font-size: 60px;

    @media only screen and (min-width: 1024px) {
        font-size: 50px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 35px;
    }
    @media only screen and (max-width: 767px) {
        font-size: 20px;
    }
`

export const CardTextAbbr = styled.div`
    width: 100%;
    position: absolute;
    top: 25%;
    text-align: center;
    font-size: 40px;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        top: 30%;
        font-size: 20px;
    }
    @media only screen and (max-width: 399px) {
        display: none;
    }
`

export const CardSubTextContainer = styled.div`
    width: 100%;
    position: absolute;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    top: 40%;
    font-size: 25px;
    text-align: center;
    line-height: 3cap;
    padding: 0px 20px;

    @media only screen and (min-width: 1024px) {
        line-height: 2cap;
        font-size: 20px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        padding-top: 5%;
        line-height: 1cap;
        font-size: 15px;
    }
`

export const CardSubText = styled.h5`
    margin-bottom: 5px;

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 10px;
        text-align: center;
    }
    @media only screen and (max-width: 767px) {
        display: none;
    }
`

export const RegisterButtons = styled.div`
    animation: 5s ${simpleAnimation};
    margin-top: 20px;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        margin-top: 15px;
    }
    @media only screen and (max-width: 399px) {
        margin-top: 5px;
    }
`

export const CardBottomLine = styled.div`
    flex: 1;
    height: 5px;
    background-color: #ffffff;
`