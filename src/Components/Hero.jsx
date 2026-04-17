import React from 'react'
import { FaAward, FaCalendarAlt, FaPlayCircle, FaTrophy } from 'react-icons/fa'
import { homePageData } from '../assets/homePageData'

const Hero = () => {
  const { hero } = homePageData;

  return (
    <section className='relative w-full h-screen min-h-[800px] flex flex-col lg:flex-row overflow-hidden bg-primary'>
      {/* Left Column - Content */}
      <div className='relative w-full lg:w-[55%] h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 lg:pt-0 z-10 bg-gradient-to-br from-primary via-secondary to-blush'>
        
        {/* Abstract Background Orbs */}
        <div className='absolute inset-0 overflow-hidden -z-10 pointer-events-none'>
          <div className='absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent-light/40 blur-[80px] float-animation'></div>
          <div className='absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[80px] float-animation' style={{animationDelay: '1s'}}></div>
        </div>

        <div className='max-w-2xl mx-auto lg:mx-0'>
          {/* Badge */}
          <div className='fade-in stagger-1 inline-block px-5 py-2 glass rounded-full mb-8 shadow-sm border border-white/60'>
            <div className='flex items-center gap-2 text-sm font-semibold text-gray-800 tracking-wide uppercase'>
              <FaAward className='text-accent text-lg' />
              <span>{hero.badge}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className='fade-in stagger-2 text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] font-heading font-bold mb-8 text-dark'>
            {hero.title.normal}{' '}
            <span className='relative inline-block'>
              <span className='gradient-text'>{hero.title.highlight}</span>
              <svg className='absolute -bottom-2 left-0 w-full opacity-60' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,10 Q100,20 200,10" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            <br />
            {hero.title.end}
          </h1>

          {/* Description */}
          <p className='fade-in stagger-3 font-secondary text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light'>
            {hero.description}
          </p>

          {/* Buttons */}
          <div className='fade-in stagger-4 flex flex-wrap gap-5 mb-14'>
            <button className='px-8 py-4 bg-dark text-white rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:bg-black hover:shadow-xl hover:-translate-y-1 font-medium'>
              <FaCalendarAlt />
              <span>Book Consultation</span>
            </button>

            <button className='px-8 py-4 glass text-dark border border-dark/10 rounded-full flex items-center gap-3 hover:bg-white/50 transition-all duration-300 hover:shadow-lg font-medium group'>
              <FaPlayCircle className='text-accent text-xl group-hover:scale-110 transition-transform' />
              <span>View Projects</span>
            </button>
          </div>

          {/* Stats Section with Divider */}
          <div className='fade-in stagger-5'>
            <div className='section-divider mb-8'></div>
            <div className='grid grid-cols-3 gap-6 md:gap-10'>
              {hero.stats.map((stat, index) => (
                <div key={index} className='group'>
                  <h3 className='text-3xl md:text-4xl font-heading font-bold text-dark mb-1 group-hover:text-accent transition-colors'>
                    {stat.value}
                  </h3>
                  <p className='text-sm md:text-base font-secondary text-gray-500 font-medium tracking-wide'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Full Page Image */}
      <div className='relative w-full lg:w-[45%] h-[50vh] lg:h-full fade-in-right stagger-3'>
        <div className='absolute inset-0 bg-dark/10 z-10 hover:bg-transparent transition-colors duration-700 pointer-events-none'></div>
        <img
          className='w-full h-full object-cover object-center'
          src={hero.image.src}
          alt={hero.image.alt || 'Hero Image'}
        />
        
        {/* Floating Card overlaying the split */}
        <div className='absolute bottom-10 right-10 lg:right-auto lg:bottom-20 lg:-left-24 glass p-6 rounded-2xl shadow-2xl w-72 z-20 float-animation border border-white/40 backdrop-blur-md hidden sm:block'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='w-14 h-14 bg-gradient-to-br from-accent to-accent-deep rounded-full flex items-center justify-center shadow-lg transform -rotate-12'>
              <FaTrophy className='text-white text-2xl' />
            </div>
            <h4 className='font-bold text-dark text-lg leading-tight'>
              Design<br/>Excellence
            </h4>
          </div>
          <p className='text-sm font-secondary text-gray-600 font-medium'>
            2026 International Design Award Winner
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero