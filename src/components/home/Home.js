import React from "react";

// components
import Connect from "../pages/connect/Connect";
import FaqSection from "../pages/faq/FaqSection";
import Footer from "../pages/footer/Footer";
import HomePageSection from "../pages/homePageSection/HomePageSection";
import Services from "../pages/services/Services";
import Testimonials from "../pages/testimonials/Testimonials";
// import Partners from "../pages/partners/Partners";

// styles
import "../../App.css";

export default function Home() {
  return (
    <>
      <HomePageSection />
      <Services />
      {/* <Partners /> */}
      <FaqSection />
      <Connect />
      <Testimonials />
      <Footer />
    </>
  );
}
