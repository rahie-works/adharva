import React, { useEffect, useState } from "react";
import { CoreValues } from "../coreValues/CoreValues"

import * as S from "./PolicySectionStyledComponents"

export const PolicySection = (props) => {

  const [aboutData, setAboutData] = useState([]);
  const [tabTitle, setTabTitle] = useState("Our Mission");

  const tabBarTitles = ["Our Mission", "Our Vision"];

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
    setAboutData(props.aboutData)
  }, [props]);

  return (
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
        {tabTitle === tabBarTitles[0] && <OurMissionContainer />}
        {tabTitle === tabBarTitles[1] && <OurVisionContainer />}
        <CoreValues />
      </S.FadeInConatiner>
  );
};
