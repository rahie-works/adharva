import React, { useState, useEffect, useRef } from "react";
import "./Cards.css";
import "../button/Button.css";
import { Button } from "../button/Button";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInButtons = styled.div`
  animation: 5s ${simpleAnimation};
`;

function CardItem(props) {
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
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="Travel" src={props.src} />
            <div className="card_text">{props.name}</div>
            <div className="card_sub_text_container">
              {props.description.map((eachLine, index) => {
                return (
                  <h5 className="card_sub_text" key={index}>
                    {eachLine}
                  </h5>
                );
              })}
              <FadeInButtons className="register-btns">
                <Button
                  buttonName="Register"
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                  routeTo={"/register"}
                >
                  {"Register"}
                </Button>
              </FadeInButtons>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default CardItem;
