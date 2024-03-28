import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          We welcome you to AIC to explore more and reach your goals.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125243.76575845109!2d76.07260986315119!3d11.197424612650869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba63b599c395a4b%3A0xdbb080e178143d64!2sAdharva%20Institute%20of%20Commerce%20-%20A%20I%20C!5e0!3m2!1sen!2sca!4v1711597096547!5m2!1sen!2sca"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/more">About Us</Link>
            <Link to="/more/mission">Our Mission</Link>
            <Link to="/more/vision">Our Vision</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Link to="/" className="social-logo">
            ADHARVA INSTITUTE FOR COMMERCE
          </Link>
          <small className="website-rights">ADHARVA.ORG.IN © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
