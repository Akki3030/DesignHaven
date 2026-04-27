import React from 'react';
import { homePageData } from '../assets/homePageData';

const Feature = () => {
  const { features } = homePageData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {features.title}
          </h2>
          <p className="text-lg text-gray-600">
            {features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.items.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:-translate-y-2 transition-all duration-300">
                <item.icon className="text-2xl text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feature;
