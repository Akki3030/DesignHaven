import React, { useState } from 'react';
import { filters, projects } from '../assets/portfolioData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="w-full min-h-screen pb-24 bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary to-secondary py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of award-winning designs. From modern residential spaces to sustainable commercial buildings.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-accent text-white shadow-md shadow-accent/30' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent text-sm font-medium tracking-wider mb-2 uppercase">
                      {project.categories.join(' • ')}
                    </p>
                    <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <button className="text-white border-b border-accent pb-1 hover:text-accent transition-colors duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Portfolio;