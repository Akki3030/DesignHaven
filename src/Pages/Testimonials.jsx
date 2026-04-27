import React from 'react';
import TestimonialSlider from '../Components/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className="w-full min-h-screen pb-24 bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary to-secondary py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Client <span className="text-accent">Testimonials</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the homeowners, developers, and visionaries who have partnered with DesignHaven to bring their dreams to life.
          </p>
        </div>
      </section>

      {/* Testimonials Component */}
      <TestimonialSlider />

    </div>
  );
};

export default Testimonials;