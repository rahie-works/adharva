import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

// components
import Button from "../button/Button";

// styles
import "./Cards.css";
import "../button/Button.css";

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInButtons = styled.div`
  animation: 5s ${simpleAnimation};
`;

export default function CardItem(props) {
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

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add("fade-in");
    } else {
      ref.current.classList.remove("fade-in");
    }
  }, [isIntersecting]);

  return (
    <>
      <div className="cards__item" ref={ref}>
        <div className="cards__item__block">
          <div className="cards__item__pic-wrap">
            <div className="card_text">{props.name}</div>
            <div className="card_text_abbr">[ {props.abbr} ]</div>
            <div className="card_sub_text_container">
              <h5 className="card_sub_text">
                Eligibility : {props.eligibility}
              </h5>
              {props.duration && (
                <h5 className="card_sub_text">Duration : {props.duration}</h5>
              )}
              {props.certificationBody && (
                <h5 className="card_sub_text">
                  Certification : {props.certificationBody}
                </h5>
              )}
              <FadeInButtons className="register-btns">
                <Button
                  buttonName="Register"
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                  routeTo={"/register/" + props.abbr}
                >
                  {"Learn More & Register"}
                </Button>
              </FadeInButtons>
            </div>
            <div className="card_abbr_line"></div>
          </div>
        </div>
      </div>
    </>
  );
}
