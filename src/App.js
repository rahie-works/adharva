import React from 'react';
import { NavigationBar } from './components/navigation/NavigationBar';
import './App.css';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import Services from './components/pages/services/Services';
import Connect from './components/pages/connect/Connect';
import AboutUs from './components/pages/about/AboutUs'
import SignUp from './components/pages/connect/Connect';

function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/connect" element={<Connect/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;