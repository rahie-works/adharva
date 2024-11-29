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

    // @media only screen and (max-width: 399px) {
    //     flex-direction: column;
    // }
`;

export const WhatsappIconH3 = styled.h3`
    padding: 4vw;
    @media only screen and (min-width: 400px) and (max-width: 767px) {
        font-size: 8.5vw;
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
    margin-inline: 20px 80px;

    @media only screen and (max-width: 399px) {
        margin-inline: 30px 30px;
    }
`;