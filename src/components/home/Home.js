import React from "react";
import "../../App.css";
import Services from "../pages/services/Services";
import Connect from "../pages/connect/Connect";
import HomePageSection from "../pages/homePageSection/HomePageSection";
import { FaqSection } from "../pages/faq/FaqSection";

function Home() {
  return (
    <>
      <HomePageSection />
      <Services />
      <FaqSection />
      <Connect />
    </>
  );
}

export default Home;
