import React from "react";
import { Link } from "react-router-dom";

// constants
import {
  ADHARVA_ORG_TEXT,
  ADHARVA_GOOGLE_MAP,
  ADHARVA_FOOTER_TEXT,
  ADHARVA_TITLE,
} from "./FooterConstants";

// styles
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">{ADHARVA_FOOTER_TEXT}</p>
        <iframe
          src={ADHARVA_GOOGLE_MAP}
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Adharva Location"
        ></iframe>
      </section>
      <div className="footer-links"></div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Link to="/" className="social-logo">
            {ADHARVA_TITLE}
          </Link>
          <small className="website-rights">{ADHARVA_ORG_TEXT}</small>
        </div>
      </section>
      {/* <section>
        <div>
          <a href="https://www.flaticon.com/free-icons/call" title="call icons">
            Call icons created by Smashicons - Flaticon
          </a>
        </div>
      </section> */}
    </div>
  );
}
