import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Connect.css";
import * as S from "./ConnectStyledComponents";

// constants
import { CONNECT_TITLE, ENCODED_WHATSAPP_TEXT } from "./ConnectConstant";

export default function Connect(props) {

  const handleChat = () => {
    window.location.href = `https://wa.me/+918891502071?text=${ENCODED_WHATSAPP_TEXT}`;
  };

  const handleCall = () => {
    window.location.href = `tel:+918891502071`;
  };

  return (
    <S.ConnectContainer page={props.page}>
      <S.ConnectHeadline1>{CONNECT_TITLE}</S.ConnectHeadline1>
      <S.SocialIcons>
        <Link
          className="social-icon-link-top facebook"
          to="https://www.facebook.com/profile.php?id=100091785007499"
          target="_blank"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f" />
        </Link>
        <Link
          className="social-icon-link-top instagram"
          to="https://www.instagram.com/aic_nilambur/"
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" />
        </Link>
        <Link
          className="social-icon-link-top youtube"
          to="https://www.youtube.com"
          target="_blank"
          aria-label="Youtube"
        >
          <i className="fab fa-youtube" />
        </Link>
        <Link
          className="social-icon-link-top linkedIn"
          to="https://www.linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin" />
        </Link>
      </S.SocialIcons>
      <S.ConnectHeadline3>Or why wait?</S.ConnectHeadline3>
      <S.ConnectImmediateIcons>
        <S.ConnectButtonWrapper onClick={handleChat}>
          <Link
            className="social-icon-link-bottom whatsapp"
            target="_blank"
            to={`https://wa.me/+918891502071?text=${ENCODED_WHATSAPP_TEXT}`}
            aria-label="Whatsapp"
          >
            <i className="fab fa-whatsapp" />
          </Link>
          <S.WhatsappIconP>Chat</S.WhatsappIconP>
        </S.ConnectButtonWrapper>
        <S.Divider></S.Divider>
        <S.ConnectButtonWrapper onClick={handleCall}>
          <Link
            className="social-icon-link-bottom phone"
            target="_blank"
            to={`tel:+918891502071`}
            aria-label="call"
          >
            <i className="fas fa-phone"></i>
          </Link>
          <S.WhatsappIconP>Call</S.WhatsappIconP>
        </S.ConnectButtonWrapper>
      </S.ConnectImmediateIcons>
    </S.ConnectContainer>
  );
}
