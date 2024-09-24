import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Connect.css";

// constants
import { CONNECT_TITLE, ENCODED_WHATSAPP_TEXT } from "./ConnectConstant";

export default function Connect(props) {
  return (
    <>
      <div
        className="connect"
        style={{ height: props.page ? "100vh" : "auto" }}
      >
        <h1>{CONNECT_TITLE}</h1>
        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="https://www.facebook.com/profile.php?id=100091785007499"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="https://www.instagram.com/aic_nilambur/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="https://www.youtube.com"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
          <Link
            className="social-icon-link linkedIn"
            to="https://www.linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </Link>
        </div>
        <h3>Or why wait?</h3>
        <div className="whatsapp-icon">
          <h3>Send us a message now...</h3>
          <Link
            className="social-icon-link whatsapp"
            target="_blank"
            to={`https://wa.me/+918891502071?text=${ENCODED_WHATSAPP_TEXT}`}
            aria-label="Whatsapp"
          >
            <i className="fab fa-whatsapp" />
          </Link>
          <h3 className="whatsapp-number">+91 8891 502 071</h3>
        </div>
      </div>
    </>
  );
}
