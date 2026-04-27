import React from 'react';
import { services, processSteps } from '../assets/servicesData';

const Services = () => {
  return (
    <div className="w-full min-h-screen pb-24 bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary to-secondary py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to bring your vision to life. From initial concept to final execution, we handle every detail with precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-2xl text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Working <span className="text-accent">Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach ensuring transparency, efficiency, and exceptional results at every phase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative z-10 border border-gray-100 group-hover:border-accent transition-colors duration-300">
                  <span className="text-2xl font-bold text-accent" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {process.step}
                  </span>
                </div>
                {/* Connecting Line */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gray-200 border-dashed border-t-2 border-gray-200 z-0"></div>
                )}
                <h4 className="text-xl font-bold text-dark mb-3">{process.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;