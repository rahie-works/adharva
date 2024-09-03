import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";

// components
import Button from "../button/Button";

// images
import adharvalogoblue from "../../images/adharvalogoblue.jpeg";

// constants
import { NAVIGATION_LINKS, NAVIGATION_BAR_BUTTON } from "./NavigationConstants";

// styles
import "./NavigationBar.css";

export default function NavigationBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const currentTabRef = useRef();
  const previousTabRef = useRef();

  const [navigationData, setNavigationBarData] = useState({});
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (ref) => {
    if (!!previousTabRef.target) {
      previousTabRef.target.classList.remove("nav-links-clicked");
    }
    ref.target.classList.add("nav-links-clicked");
    previousTabRef.target = ref.target;
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    const fecthData = async () => {
      try {
        const navSectionData = await client.getEntry("3XP7f5kuPEQe0t6VNt8qln");
        setNavigationBarData(navSectionData);
      } catch (error) {
        console.log("==Data not received", error);
      }
    };
    fecthData();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={adharvalogoblue}
              className="adharva-logo"
              alt="adharva_logo_blue"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {(
              navigationData.fields?.navigationBarSections?.sections ||
              NAVIGATION_LINKS
            ).map((eachSection, index) => {
              return (
                <li className="nav-item" key={index} ref={currentTabRef}>
                  <Link
                    to={eachSection.linkTo}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {eachSection.title.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" routeTo="/register">
              {navigationData.fields?.navigationBarSections?.button
                ?.buttonName || NAVIGATION_BAR_BUTTON}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}
