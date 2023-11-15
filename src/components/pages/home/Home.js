import React from 'react';
import '../../../App.css';
import Services from '../services/Services';
import Connect from '../connect/Connect'
import HeroSection from '../../heroSection/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
        <Services/>
        <Connect/>
    </>
  );
}

export default Home;