import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const CardsBackgroundForFAQ = styled.div`
    height: auto;
    padding: 6rem;
    background-color: #00527f;
    background-image: linear-gradient(180deg, #1a3d6b 0%, #000000 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cit;
    color: #ffffff;
    font-size: 40px;

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        padding: 3rem;
        font-size: 30px;
        transition: all 0.5 ease-in-out;
    }
    @media only screen and (min-width: 400px) and (max-width: 767px) {
        padding: 1rem;
        font-size: 20px;
        transition: all 0.5 ease-in-out;
    }
    @media only screen and (max-width: 399px) {
        height: auto;
        font-size: 15px;
        padding: 1rem;
        transition: all 0.5 ease-in-out;
    }
`

export const FAQTitle = styled.h1`
    text-align: center;
    animation: 1s ${simpleAnimation};
`

export const FAQCardsContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1100px;
    margin: auto;

    @media only screen and (max-width: 399px) {
        margin: -5px auto;
    }
`

export const FAQCardsWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
`

export const FAQCardsItem = styled.ul`
    display: flex;
    flex: 1;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`
export const FAQCardItem = styled.li`
    margin-bottom: 10px;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
    padding: 5px;
    border-radius: 10px;
    border-width: 5px;
    border-color: #8d8d8d;
    border-style: groove;
    color: #bdbdbd;
    overflow-y: scroll;

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 60vh;
        font-size: 13px;
    }
    @media only screen and (min-width: 400px) and (max-width: 767px) {
        width: 40vh;
        font-size: 13px;
    }
    @media only screen and (max-width: 399px) {
        width: 100%;
        font-size: 10px;
    }
`
export const FAQQuestion = styled.div`
    font-size: 18px;

    @media only screen and (max-width: 767px) {
        font-size: 15px;
    }
`

export const FAQAnswer = styled.h3`
    display: block;
    font-size: 25px;
    color: #ffffff;

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 22px;
    }
    @media only screen and (min-width: 400px) and (max-width: 767px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 399px) {
        font-size: 14px;
    }
`