import React from 'react';
import { teamData } from '../assets/teamData';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Teams = () => {
  return (
    <div className="w-full min-h-screen pb-24 bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary to-secondary py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Meet Our <span className="text-accent">Team</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The creative minds behind DesignHaven. A collective of passionate architects, designers, and visionaries dedicated to excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={member.socials.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                      <FaLinkedinIn />
                    </a>
                    <a href={member.socials.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                      <FaTwitter />
                    </a>
                    <a href={member.socials.instagram} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                      <FaInstagram />
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-dark mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Teams;