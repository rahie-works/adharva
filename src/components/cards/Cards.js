import React from "react";
import { useState, useRef, useEffect } from "react";

import * as S from "./CardsStyledComponents";

// components
import CardItem from "./CardItem";

function Cards(props) {
  const { sectionData, cardData } = props;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const refElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(refElement);

    return () => observer.disconnect(refElement);
  }, [isIntersecting]);

  return (
    <S.CardsBackgroundForServices ref={ref}>
      {isIntersecting && <S.FadeInTitle>{sectionData.title}</S.FadeInTitle>}
      <S.CardContainer>
        <S.CardsWrapper>
          {cardData.map((eachRow, index) => {
            return (
              <S.CardsItems>
                <CardItem
                  key={index}
                  intersecting={isIntersecting}
                  name={eachRow.serviceName}
                  src={eachRow.backgroundImage}
                  eligibility={eachRow.eligibility}
                  duration={eachRow.duration}
                  abbr={eachRow.serviceAbbr}
                  certificationBody={eachRow.certificationBody}
                  label={eachRow.serviceAbbr}
                  path="/services"
                />
              </S.CardsItems>
            );
          })}
        </S.CardsWrapper>
      </S.CardContainer>
    </S.CardsBackgroundForServices>
  );
}

export default Cards;
