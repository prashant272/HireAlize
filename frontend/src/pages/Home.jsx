import React from 'react';
import Hero from '../components/Hero';
import PartnerStrip from '../components/PartnerStrip';
import AboutPreview from '../components/AboutPreview';
import WhyChoose from '../components/WhyChoose';
import ProcessPreview from '../components/ProcessPreview';
import Stats from '../components/Stats';
import ServicesPreview from '../components/ServicesPreview';
import IndustriesGrid from '../components/IndustriesGrid';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import HomeCTA from '../components/HomeCTA';

const Home = () => {
  return (
    <div className="bg-dark-900">
      <Hero />
      <PartnerStrip />
      <AboutPreview />
      <WhyChoose />
      <Stats />
      <ServicesPreview />
      <ProcessPreview />
      <IndustriesGrid />
      <Testimonials />
      <FAQ />
      <HomeCTA />
    </div>
  );
};

export default Home;
