  import React from 'react';
import { homePageData } from '../assets/homePageData';
import { FaStar } from 'react-icons/fa';

const TestimonialSlider = () => {
  const { testimonials } = homePageData;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {testimonials.title}
          </h2>
          <p className="text-lg text-gray-600">
            {testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative mt-8"
            >
              {/* Profile Image - Absolute positioning to stick out */}
              <div className="absolute -top-8 left-8">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-6 mb-4 text-accent">
                {[...Array(Math.floor(item.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 relative z-10">
                "{item.quote}"
              </p>

              {/* Author Details */}
              <div>
                <h4 className="font-bold text-dark text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;
