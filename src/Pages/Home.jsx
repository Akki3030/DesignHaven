import React from 'react';
import Hero from '../Components/Hero';
import Feature from '../Components/Feature';
import TestimonialSlider from '../Components/TestimonialSlider';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Feature />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
