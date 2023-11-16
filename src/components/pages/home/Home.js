import React from 'react';
import '../../../App.css';
import Services from '../services/Services';
import Connect from '../connect/Connect'
import HeroSection from '../../heroSection/HeroSection';
import { FaqSection } from '../faq/FaqSection'

function Home() {
  return (
    <>
      <HeroSection />
        <Services/>
        <FaqSection/>
        <Connect/>
    </>
  );
}

export default Home;