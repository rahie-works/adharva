import React, { useState, useEffect, useRef } from "react";

// components
import Button from "../button/Button";

// styles
import "../button/Button.css";

import * as S from "./CardsStyledComponents";

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
      <S.CardsItem ref={ref}>
        <S.CardItemBlock>
          <S.CardItemPicWrap>
            <S.CardText>{props.name}</S.CardText>
            <S.CardTextAbbr>[ {props.abbr} ]</S.CardTextAbbr>
            <S.CardSubTextContainer>
              <S.CardSubText>
                Eligibility : {props.eligibility}
              </S.CardSubText>
              {props.duration && (
                <S.CardSubText>Duration : {props.duration}</S.CardSubText>
              )}
              {props.certificationBody && (
                <S.CardSubText>
                  Certification : {props.certificationBody}
                </S.CardSubText>
              )}
              <S.RegisterButtons className="register-btns">
                <Button
                  buttonName="Register"
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                  routeTo={"/register/" + props.abbr}
                >
                  {"Learn More & Register"}
                </Button>
              </S.RegisterButtons>
            </S.CardSubTextContainer>
            <S.CardBottomLine></S.CardBottomLine>
          </S.CardItemPicWrap>
        </S.CardItemBlock>
      </S.CardsItem>
    </>
  );
}
