import React from "react";
import "../../App.css";
import Services from "../pages/services/Services";
import Connect from "../pages/connect/Connect";
import HomePageSection from "../pages/homePageSection/HomePageSection";
import { FaqSection } from "../pages/faq/FaqSection";
import Testimonials from "../pages/testimonials/Testimonials";
import Footer from "../pages/footer/Footer";

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
