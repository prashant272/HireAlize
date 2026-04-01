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

import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="bg-dark-900">
      <SEO 
        title="Best Recruitment & HR Solutions in India"
        description="Hirealize Consultants connects ambitious companies with high-performing professionals. Expert recruitment, executive search, and staffing solutions across India."
        keywords="recruitment agency india, HR solutions, executive search, hiring consultants, staffing services, talent acquisition"
      />
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
