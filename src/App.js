import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";

import Connect from "./components/pages/connect/Connect";
import { FaqSection } from "./components/pages/faq/FaqSection";
import Home from "./components/home/Home";
import More from "./components/pages/more/More";
import { NavigationBar } from "./components/navigation/NavigationBar";
import Services from "./components/pages/services/Services";
import Register from "./components/pages/register/Register";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FaqSection />} />
          <Route
            id="connect"
            path="/connect"
            element={<Connect page={true} />}
          />
          <Route path="/more" element={<More path="About Us" />} />
          <Route path="/more/mission" element={<More path="Our Mission" />} />
          <Route path="/more/vision" element={<More path="Our Vision" />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
