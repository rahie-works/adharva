import React, { useState } from "react";
import { NavigationBar } from "./components/navigation/NavigationBar";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Services from "./components/pages/services/Services";
import Connect from "./components/pages/connect/Connect";
import More from "./components/pages/more/More";
import { FaqSection } from "./components/pages/faq/FaqSection";
import Testimonials from "./components/pages/more/testimonials/Testimonials";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FaqSection />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/more" element={<More path="About Us" />} />
          <Route path="/more/mission" element={<More path="Our Mission" />} />
          <Route path="/more/vision" element={<More path="Our Vision" />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
