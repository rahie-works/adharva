import React from 'react';
import '../../../App.css';
import Services from '../services/Services';
import Connect from '../connect/Connect'
import HeroSection from '../../heroSection/HeroSection';
import Footer from '../../footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
        <Services/>
        <Connect/>
      <Footer />
    </>
  );
}

export default Home;