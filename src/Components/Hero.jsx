import React from 'react';
import { FaAward, FaArrowRight, FaPlay, FaStar } from 'react-icons/fa';
import { homePageData } from '../assets/homePageData';

const Hero = () => {
  const { hero } = homePageData;

  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-20 py-24 overflow-hidden bg-white">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

        {/* Left Column: Content */}
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-8 shadow-sm">
            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
              <FaAward className="text-white text-xs" />
            </div>
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              {hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {hero.title.normal}{' '}
            <span className="text-accent relative inline-block">
              {hero.title.highlight}
              {/* Swoosh Underline */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            <br className="hidden md:block" />
            {hero.title.end}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            {hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-dark text-white rounded-full font-medium flex items-center justify-center gap-3 hover:bg-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group">
              Start Your Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-dark rounded-full font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <FaPlay className="text-xs ml-0.5" />
              </div>
              Watch Showreel
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            {hero.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-dark mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Visuals */}
        <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          
          {/* Main Image Container */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={hero.image.src} 
              alt={hero.image.alt} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
          </div>

          {/* Floating Glassmorphism Card 1: Review */}
          <div className="absolute top-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white flex items-center gap-4 float-animation">
            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl">
              <FaStar />
            </div>
            <div>
              <div className="flex text-accent text-sm mb-1">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>
              <p className="font-bold text-dark text-sm">4.9/5 Average Rating</p>
            </div>
          </div>

          {/* Floating Glassmorphism Card 2: Award */}
          <div className="absolute bottom-20 -right-6 md:-right-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white max-w-[220px] float-animation stagger-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-dark text-accent flex items-center justify-center text-lg">
                <FaAward />
              </div>
              <p className="font-bold text-dark leading-tight">Design<br/>Excellence</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">Award-winning interior and architectural design</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;