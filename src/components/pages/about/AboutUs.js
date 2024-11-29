import React, { useEffect, useState, useRef } from "react";
import { createClient } from "contentful";

import "./AboutUs.css";
import * as S from "./AboutUsStyledComponents"
import { PolicySection } from "../policy/PolicySection";

export const AboutUs = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const [aboutData, setAboutData] = useState([]);
  const ref = useRef(null);

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
    <S.FadeInMoreInfoContainer ref={ref}>
      <S.FadeInConatiner>
        <S.FadeInTitle
          className={"selected_tab"}
          title={"About Us"}
        >
          {"About Us"}
        </S.FadeInTitle>
        <AboutUsContainer />
        <PolicySection aboutData={aboutData}/>
      </S.FadeInConatiner>
    </S.FadeInMoreInfoContainer>
  );
};
