import React from "react";
import "../../../App.css";
import Services from "../services/Services";
import Connect from "../connect/Connect";
import HomePageSection from "../../heroSection/HomePageSection";
import { FaqSection } from "../faq/FaqSection";

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
