import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { createClient } from "contentful";

import { ABOUT_US_TEXT_1, ABOUT_US_TEXT_2, ABOUT_US_TEXT_3 } from "./constants";
import TabBar from "./tabs/TabBar";

import "./More.css";

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 1s ${simpleAnimation};
`;

export default function More(props) {
  const { path } = props;
  const [moreData, setMoreData] = useState([]);

  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const setBackgroundColorFromPath = () => {
    switch (path) {
      case "About Us":
        ref.current.style.backgroundImage =
          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
        break;
      case "Our Mission":
        ref.current.style.backgroundImage =
          "linear-gradient(to top, #37ecba 0%, #72afd3 100%)";
        break;
      case "Our Vision":
        ref.current.style.backgroundImage =
          "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%";
        break;
      default:
        ref.current.style.backgroundImage =
          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
        break;
    }
  };

  useEffect(() => {
    const fecthData = async () => {
      try {
        const moreData = await client.getEntry("2sGOvbZcvYpza3CTtB3h0d");
        setMoreData(moreData?.fields?.moreSectionContents?.moreSectionContents);
      } catch (error) {
        console.log("==Data not received", error);
      }
    };
    fecthData();
    setBackgroundColorFromPath();
  }, []);

  const getContent = () => {
    switch (path) {
      case "About Us":
        return ABOUT_US_TEXT_1 + ABOUT_US_TEXT_2 + ABOUT_US_TEXT_3;
      case "Our Mission":
        return "To transform lives through affordable, quality and value-based education.";
      case "Our Vision":
        return "AIC in brand of trust";
      default:
        return ABOUT_US_TEXT_1 + ABOUT_US_TEXT_2 + ABOUT_US_TEXT_3;
    }
  };

  const [contentText, setContentText] = useState(getContent);
  const ref = useRef();

  const selectedtab = (tab) => {
    switch (tab) {
      case "About Us":
        setContentText(moreData[0].description);
        ref.current.style.backgroundImage =
          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
        break;
      case "Our Mission":
        setContentText(moreData[1].description);
        ref.current.style.backgroundImage =
          "linear-gradient(to top, #37ecba 0%, #72afd3 100%)";
        break;
      case "Our Vision":
        setContentText(moreData[2].description);
        ref.current.style.backgroundImage =
          "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%";
        break;
      default:
        break;
    }
  };

  return (
    <div className="container" ref={ref}>
      <TabBar tab={selectedtab} navigatedTo={props.path} />
      <FadeInDiv className="content">{contentText}</FadeInDiv>
    </div>
  );
}
