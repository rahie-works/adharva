import React, { useEffect, useState, useRef } from "react";
import { createClient } from "contentful";
import { CoreValues } from "../coreValues/CoreValues";

import "./AboutUs.css";
import * as S from "./AboutUsStyledComponents"

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
      <S.FadeInContentContainer>
        <S.FadeInContent alignment={"left"}>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[0]
              ?.description[0]
          }
        </S.FadeInContent>
        <S.FadeInContent alignment={"left"}>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[0]
              ?.description[1]
          }
        </S.FadeInContent>
      </S.FadeInContentContainer>
    );
  };

  const OurMissionContainer = () => {
    return (
      <S.FadeInContentContainer>
        <S.FadeInContent>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[1]
              ?.description
          }
        </S.FadeInContent>
      </S.FadeInContentContainer>
    );
  };

  const OurVisionContainer = () => {
    return (
      <S.FadeInContentContainer>
        <S.FadeInContent>
          {
            aboutData?.fields?.moreSectionContents?.moreSectionContents[2]
              ?.description
          }
        </S.FadeInContent>
      </S.FadeInContentContainer>
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
    <S.FadeInMoreInfoContainer ref={ref} title={tabTitle}>
      <S.FadeInConatiner>
        <S.FadeInTabInContainer>
          {tabBarTitles.map((eachTab, index) => (
            <S.FadeInTitle
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
            </S.FadeInTitle>
          ))}
        </S.FadeInTabInContainer>
        {(tabTitle === tabBarTitles[0] || tabTitle === "") && (
          <AboutUsContainer />
        )}
        {tabTitle === tabBarTitles[1] && <OurMissionContainer />}
        {tabTitle === tabBarTitles[2] && <OurVisionContainer />}
        <CoreValues />
      </S.FadeInConatiner>
    </S.FadeInMoreInfoContainer>
  );
};
