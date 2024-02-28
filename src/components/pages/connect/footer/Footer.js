import React from "react";
import "./Footer.css";
import { Button } from "../../../button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          We welcome you to AIC to explore more and reach your goals.
        </p>
        <p className="footer-subscription-text">
          Join our newsletter to stay updated with whats trending.!
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/more">About Us</Link>
            <Link to="/more/mission">Our Mission</Link>
            <Link to="/more/vision">Our Vision</Link>
            <Link to="/testimonials">Testimonials</Link>
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
