import React from "react";

import Connect from "../pages/connect/Connect";
import { FaqSection } from "../pages/faq/FaqSection";
import Footer from "../pages/footer/Footer";
import HomePageSection from "../pages/homePageSection/HomePageSection";
import Services from "../pages/services/Services";
import Testimonials from "../pages/testimonials/Testimonials";

import "../../App.css";

function Home() {
  return (
    <>
      <HomePageSection />
      <Services />
      <FaqSection />
      <Connect />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
