import React from "react";
import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

// components
import CardItem from "./CardItem";

// styles
import "./Cards.css";

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInTitle = styled.h1`
  animation: 1s ${simpleAnimation};
`;

function Cards(props) {
  const { sectionData, cardData } = props;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div className="cards_background_for_services" ref={ref}>
      {isIntersecting && <FadeInTitle>{sectionData.title}</FadeInTitle>}
      <div className="cards__container">
        <div className="cards__wrapper">
          {cardData.map((eachRow, index) => {
            return (
              <ul className="cards__items">
                <CardItem
                  key={index}
                  intersecting={isIntersecting}
                  name={eachRow.serviceName}
                  src={eachRow.backgroundImage}
                  description={eachRow.serviceDescription}
                  label={eachRow.serviceAbbr}
                  path="/services"
                />
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
