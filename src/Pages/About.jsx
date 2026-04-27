import React from 'react';
import { homePageData } from '../assets/homePageData';

const About = () => {
  const { hero } = homePageData;

  return (
    <div className="w-full min-h-screen pb-24 bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary to-secondary py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            About <span className="text-accent">DesignHaven</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a collective of visionaries, architects, and designers dedicated to redefining spaces and elevating lifestyles through innovative design.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="bg-accent-light rounded-3xl p-2 shadow-2xl overflow-hidden relative z-10">
              <img 
                src={hero.image.src} 
                alt="About DesignHaven" 
                className="rounded-3xl w-full hover:scale-105 transition duration-500"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-10 -right-10 w-full h-full border-2 border-accent/20 rounded-3xl -z-0"></div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Crafting <span className="text-accent">Timeless</span> Spaces Since 2008
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At DesignHaven, we believe that your environment profoundly shapes your experiences and well-being. Our journey began with a simple yet powerful mission: to transform ordinary spaces into extraordinary sanctuaries that inspire, comfort, and endure.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We approach every project with a blend of artistic vision and practical ingenuity. By listening closely to our clients and collaborating with top-tier artisans, we ensure that every detail—from the sweep of an architectural line to the texture of a bespoke fabric—is thoughtfully considered and masterfully executed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              {hero.stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-dark mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;