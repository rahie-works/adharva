import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg, #000000 0%, #1a3d6b 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    padding: 4em;
    font-size: 40px;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        padding: 2em;
        font-size: 20px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        padding-top: 30px;
        padding-bottom: 10px;
        font-size: 30px;
    }

    @media only screen and (max-width: 399px) {
        padding: 1em;
        font-size: 30px;
    }
`;

export const TestimonialTitle = styled.h1`
    margin-bottom: 4vh;
`;

export const TestimonialContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow: auto;
    flex-wrap: wrap;
`;

export const Testimonials = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 0 15px -6px rgb(255, 255, 255);
    margin: 30px 30px;
    text-align: center;
    color: black;
    font-size: 30px;
    padding: 10px;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        width: 100%;
        margin: 20px 20px;
        text-align: center;
        padding: 5px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        font-size: 25px;
        margin: 20px 30px;
    }
    @media only screen and (max-width: 399px) {
        width: 100%;
        font-size: 15px;
        margin: 5px 10px;
    }
`;

export const QuoteImage = styled.img`
    width: 80px;
    height: 80px;
    align-items: flex-start;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        width: 30px;
        height: 30px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }
    @media only screen and (max-width: 399px) {
        width: 20px;
        height: 20px;
    }
`;

export const ContentTestimonials = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    text-align: justify;
    color: #ffffff;
    @media only screen and (min-width: 400px) and (max-width: 767px) {
        margin: 5px 10px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 10px 10px;
    }
    @media only screen and (max-width: 399px) {
        margin: 10px 0px;
    }
`;

export const TestimonialName = styled.h3`
    margin-bottom: 10px;
`

export const TestimonialComments = styled.p`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size: 20px;
    color: rgb(255, 255, 255);
    @media only screen and (min-width: 400px) and (max-width: 767px) {
        font-size: 12px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 17px;
    }
    @media only screen and (max-width: 399px) {
        font-size: 12px;
    }
`;

export const TestimonialDate = styled.p`
    color: #7a7a7a;
    margin-top: 5px;
    font-size: 15px;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        font-size: 10px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 399px) {
        font-size: 8px;
    }
`;

export const MoreReviewContainer = styled.div`
    font-size: 3vw;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: 399px) {
        align-items: center;
        font-size: 4vw;
    }
`;

export const MoreReviewTextLink = styled.a`
    color: white;
`;

export const MoreReviewText = styled.h4`
    margin-top: 2vh;
`;