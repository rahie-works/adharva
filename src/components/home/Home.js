import React from "react";

// components
import Connect from "../pages/connect/Connect";
import FaqSection from "../pages/faq/FaqSection";
import Footer from "../pages/footer/Footer";
import {HomePageSection} from "../pages/homePageSection/HomePageSection";
import Services from "../pages/services/Services";
import {Testimonials} from "../pages/testimonials/Testimonials";
import { AboutUs } from "../pages/about/AboutUs";

export default function Home() {
  return (
    <>
      <HomePageSection />
      <AboutUs />
      <Services />
      <FaqSection />
      <Connect />
      <Testimonials />
      <Footer />
    </>
  );
}
