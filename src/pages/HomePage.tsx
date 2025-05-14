import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import HealthyEating from '../components/home/HealthyEating';
import NutritionTherapy from '../components/home/NutritionTherapy';
import Stats from '../components/home/Stats';
import BlogSection from '../components/home/BlogSection';
import Newsletter from '../components/home/Newsletter';
import Calculator from '../components/home/Calculator';
import EnhancingLifestyle from '../components/home/EnhancingLifestyle';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ConsultationSection from '../components/home/ConsultationSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <HealthyEating />
      <NutritionTherapy />
      <Stats />
      <BlogSection />
      <Calculator />
      <EnhancingLifestyle />
      <WhyChooseUs />
      <ConsultationSection />
      <Newsletter />
    </>
  );
};

export default HomePage;