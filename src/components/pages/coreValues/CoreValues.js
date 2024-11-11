import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { createClient } from "contentful";

import "./CoreValues.css";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeUpAnimation = keyframes`
from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const increaseLetterSpacing = keyframes`
  from {
    letter-spacing: normal;
  }
  to {
    letter-spacing: 0.25em;
  }
`;

const FadeInTitle = styled.h3`
  display: flex;
  width: 100%;
  font-size: 8em;
  justify-content: center;
  animation: 1s ${fadeInAnimation};

  @media only screen and (max-width: 480px) {
    font-size: 2em;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 3em;
  }
`;

const FadeUpAcronym = styled.h1`
  display: flex;
  width: 100%;
  animation: ${fadeUpAnimation} 1s ease-in-out both,
    ${increaseLetterSpacing} 1s ease-in-out 1s both;
  font-size: 15em;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 5em;
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 6em;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 10em;
  }
`;

const FadeInValue = styled.p`
  display: flex;
  justify-content: left;
  margin-left: 1.5vmin;
  font-size: 1.5vw;
  width: 100%;
  animation: ${fadeInAnimation} 1s ease-in-out both;
  animation-delay: 1.5s;

  @media only screen and (max-width: 480px) {
    font-size: 0.6em;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 0.4em;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1em;
    margin-left: 1vmin;
  }
`;

export const CoreValues = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const [coreValues, setCoreValues] = useState([]);
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  useEffect(() => {
    const fecthData = async () => {
      try {
        const homePageData = await client.getEntry("787g5a0lTgn7aSSr1RfxRB");
        setCoreValues(homePageData);
      } catch (error) {
        console.log("==Data not received", error);
      }
    };
    fecthData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div ref={ref} className="core_values_background">
      {isIntersecting && (
        <FadeInTitle>{coreValues?.fields?.coreValuesTitle}</FadeInTitle>
      )}
      <div className="core_value_container">
        {isIntersecting &&
          coreValues?.fields?.coreValues?.definitions?.map(
            (coreValue, index) => (
              <div className="core_value" key={index}>
                <FadeUpAcronym>{coreValue.letter}</FadeUpAcronym>
                <FadeInValue>{coreValue?.desc}</FadeInValue>
              </div>
            )
          )}
      </div>
    </div>
  );
};
