import React, { useEffect, useState, useRef } from "react";
import { createClient } from "contentful";
import { CoreValues } from "../coreValues/CoreValues";
import styled, { keyframes } from "styled-components";
import { fadeIn, slideInUp } from "react-animations";

import "./AboutUs.css";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInAnimation = keyframes`${slideInUp}`;

const FadeInMoreInfoContainer = styled.div`
  background-color: #00527f;
  background-image: linear-gradient(180deg, #1a3d6b 0%, #000000 100%);
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5vw;
`;

const FadeInConatiner = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FadeInTabInContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  cursor: pointer;
`;

const FadeInTitle = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 5em;
  animation: 1s ${fadeInAnimation};

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.5em;
  }
`;

const FadeInContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2em;
  line-height: 1em;

  @media only screen and (max-width: 768px) {
    margin: 0em;
  }
`;

const FadeInContent = styled.span`
  width: 100%;
  font-size: 1.9em;
  line-height: 1.5em;
  animation: 2.5s ${slideInAnimation};
  margin-block: 2em;
  text-align: ${(props) => (props.alignment ? props.alignment :  "center")};
  color: white;

  @media only screen and (max-width: 480px) {
    font-size: 1em;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.4em;
  }
`;

export const AboutUs = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const [aboutData, setAboutData] = useState([]);
  const [tabTitle, setTabTitle] = useState("");
  const ref = useRef(null);

  const tabBarTitles = ["About Us", "Our Mission", "Our Vision"];

  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const AboutUsContainer = () => {
    return (
      <FadeInContentContainer>
        <FadeInContent alignment={"left"}>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[0]
              ?.description[0]
          }
        </FadeInContent>
        <FadeInContent alignment={"left"}>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[0]
              ?.description[1]
          }
        </FadeInContent>
      </FadeInContentContainer>
    );
  };

  const OurMissionContainer = () => {
    return (
      <FadeInContentContainer>
        <FadeInContent>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[1]
              ?.description
          }
        </FadeInContent>
      </FadeInContentContainer>
    );
  };

  const OurVisionContainer = () => {
    return (
      <FadeInContentContainer>
        <FadeInContent>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[2]
              ?.description
          }
        </FadeInContent>
      </FadeInContentContainer>
    );
  };

  const tabSwitch = (tabName) => {
    setTabTitle(tabName.target.innerHTML);
  };

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
    const refElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.9,
      }
    );
    observer.observe(refElement);
    return () => {
      observer.disconnect(refElement);
    };
  }, [isIntersecting]);

  return (
    <FadeInMoreInfoContainer ref={ref} title={tabTitle}>
      <FadeInConatiner>
        <FadeInTabInContainer>
          {tabBarTitles.map((eachTab, index) => (
            <FadeInTitle
              onClick={tabSwitch}
              key={index}
              className={
                tabTitle === eachTab ||
                (tabTitle === "" && eachTab === tabBarTitles[0])
                  ? "selected_tab"
                  : "unselected_tabs"
              }
              title={eachTab}
            >
              {eachTab}
            </FadeInTitle>
          ))}
        </FadeInTabInContainer>
        {(tabTitle === tabBarTitles[0] || tabTitle === "") && (
          <AboutUsContainer />
        )}
        {tabTitle === tabBarTitles[1] && <OurMissionContainer />}
        {tabTitle === tabBarTitles[2] && <OurVisionContainer />}
        <CoreValues />
      </FadeInConatiner>
    </FadeInMoreInfoContainer>
  );
};
