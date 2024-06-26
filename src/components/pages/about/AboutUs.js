import React, { useEffect, useState, useRef } from "react";
import { createClient } from "contentful";
import { CoreValues } from "../coreValues/CoreValues";
import styled, { keyframes } from "styled-components";
import { fadeIn, slideInLeft, slideInUp } from "react-animations";

import "./AboutUs.css";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInAnimation = keyframes`${slideInUp}`;

const FadeInConatiner = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FadeInTitle = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 8em;
  animation: 1s ${fadeInAnimation};

  @media only screen and (max-width: 480px) {
    font-size: 3em;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 6em;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 4.5em;
  }
`;

const FadeInContent = styled.span`
  width: ${(props) => (props.alignment === "right" ? "100%" : "50%")};
  font-size: 1.9em;
  line-height: 1.5em;
  animation: 2.5s ${slideInAnimation};
  margin-block: 2em;
  padding-left: ${(props) => (props.alignment === "right" ? "50%" : "0")};
  font-family: "Montserrat", sans-serif;

  @media only screen and (max-width: 480px) {
    font-size: 1em;
    width: 100%;
    padding-left: 0%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.5em;
    width: ${(props) => (props.alignment === "right" ? "100%" : "80%")};
    padding-left: ${(props) => (props.alignment === "right" ? "40%" : "0")};
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.5em;
    width: ${(props) => (props.alignment === "right" ? "100%" : "90%")};
    padding-left: ${(props) => (props.alignment === "right" ? "30%" : "0")};
  }
`;

const BoldText = styled.h3`
  font-weight: bold;
  font-size: 1.9em;
  line-height: 1.5em;

  @media only screen and (max-width: 480px) {
    font-size: 1.3em;
  }
`;

export const AboutUs = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const [aboutData, setAboutData] = useState([]);
  const ref = useRef(null);

  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  useEffect(() => {
    const fecthData = async () => {
      try {
        const aboutPagedata = await client.getEntry("2sGOvbZcvYpza3CTtB3h0d");
        setAboutData(aboutPagedata);
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
      {
        threshold: 0.2,
      }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect(ref.current);
    };
  }, [isIntersecting]);

  return (
    <div className="about_us_container" ref={ref}>
      <FadeInConatiner>
        <FadeInTitle>About Us</FadeInTitle>
        <FadeInContent>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[0]
              ?.description
          }
        </FadeInContent>
        <FadeInContent alignment="right">
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[1]
              ?.description
          }
        </FadeInContent>
        <FadeInContent alignment="left">
          <BoldText>
            {
              aboutData?.fields?.moreSectionContents?.moreSectionContents[2]
                ?.title
            }
          </BoldText>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[2]
              ?.description
          }
        </FadeInContent>
        <FadeInContent alignment="right">
          <BoldText>
            {
              aboutData?.fields?.moreSectionContents?.moreSectionContents[3]
                ?.title
            }
          </BoldText>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[3]
              ?.description
          }
        </FadeInContent>
        <CoreValues />
      </FadeInConatiner>
    </div>
  );
};
