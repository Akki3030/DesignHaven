import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pt-16 pb-8 flex-shrink-0 flex items-center justify-center">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center">
        
        {/* Footer Logo */}
        <Link to="/" className="flex flex-col items-center gap-3 group mb-8">
          <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center transform group-hover:-rotate-6 transition-transform duration-300 shadow-lg shadow-accent/20">
            <FaHome className="text-2xl top-10" />
          </div>
          <span className="text-3xl font-bold text-dark tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Design<span className="text-accent">Haven</span>
          </span>
        </Link>
        
        {/* Footer Description */}
        <p className="text-gray-500 max-w-md mx-auto mb-10 text-base leading-relaxed">
          Crafting premium, user-centric digital experiences that captivate and perform. Let's build your next masterpiece together.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1">
            <FaTwitter className="text-lg" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1">
            <FaFacebookF className="text-lg" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1">
            <FaInstagram className="text-lg" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="w-full border-t border-gray-100 pt-8 flex items-center justify-center">
          <p className="text-sm text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} DesignHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer