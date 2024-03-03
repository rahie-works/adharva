import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import {
  NAVIGATION_BAR_TITLE,
  NAVIGATION_LINKS,
  NAVIGATION_BAR_BUTTON,
} from "./NavigationConstants";
import { createClient } from "contentful";
import Register from "../pages/register/Register";
import { useHistory, useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const [navigationData, setNavigationBarData] = useState({});
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {navigationData.fields?.navigationTitle || NAVIGATION_BAR_TITLE}
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
                <li className="nav-item" key={index}>
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
};
