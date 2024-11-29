import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { createClient } from "contentful";

import * as S from "./CoreValuesStyledComponent"

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
    <S.CoreValuesBackground ref={ref}>
      {isIntersecting && (
        <S.FadeInTitle>{coreValues?.fields?.coreValuesTitle}</S.FadeInTitle>
      )}
      <S.CoreValueContainer>
        {isIntersecting &&
          coreValues?.fields?.coreValues?.definitions?.map(
            (coreValue, index) => (
              <S.CoreValue key={index}>
                <S.FadeUpAcronym>{coreValue.letter}</S.FadeUpAcronym>
                <S.FadeInValue>{coreValue?.desc}</S.FadeInValue>
              </S.CoreValue>
            )
          )}
      </S.CoreValueContainer>
    </S.CoreValuesBackground>
  );
};
