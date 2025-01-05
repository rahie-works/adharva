import styled from "styled-components";

export const ConnectContainer = styled.div`
    height: ${(props) => props.page ? "100vh" : "auto"};
    background-image: linear-gradient(180deg, #000000 0%, #1a3d6b 100%);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 6vw;
    font-size: 40px;
    color: white;
`;

export const ConnectHeadline1 = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    transition: 500ms;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        transition: 500ms;
        font-size: 30px;
    }

    @media only screen and (max-width: 399px) {
        color: #fff;
        transition: 500ms;
        font-size: 1.5rem;
    }
`;

export const ConnectHeadline3 = styled.h3`
    text-align: center;
    margin-bottom: 40px;
    transition: 500ms;
    font-size: 40px;

    @media only screen and (min-width: 400px) and (max-width: 767px) {
        transition: 500ms;
        font-size: 20px;
    }

    @media only screen and (max-width: 399px) {
        color: #fff;
        transition: 500ms;
        font-size: 1.5rem;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1.2);
    color: white;
`;

export const ConnectImmediateIcons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const WhatsappIconP = styled.p`
    padding: 3vw;
    @media only screen and (min-width: 400px) and (max-width: 767px) {
        font-size: 6.5vw;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 3vw;
    }
    @media only screen and (max-width: 399px) {
        padding: 2vw;
        font-size: 3vh;
    }
`;

export const Divider = styled.div`
    height: 100px;
    width: 2px;
    background-color: #fff;
    margin-inline: 4vw 4vw;

    @media only screen and (max-width: 399px) {
        margin-inline: 30px 30px;
    }
`;

export const ConnectButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 2vw;
    border-radius: 10px;
    background: rgba(110, 110, 110, 0.2); /* Semi-transparent white */
    backdrop-filter: blur(10px);
`;