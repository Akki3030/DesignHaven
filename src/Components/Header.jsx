import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { id: '', label: "Home" },
    { id: 'about', label: "About" },
    { id: 'services', label: "Services" },
    { id: 'portfolio', label: "Portfolio" },
    { id: 'team', label: "Team" },
    { id: 'blog', label: "Blog" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center transition-all duration-300 ${
      scrolled ? 'h-20 bg-white shadow-md' : 'h-24 bg-white/95 shadow-sm'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="w-11 h-11 bg-accent text-white rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-accent/30">
            <FaHome className="text-xl" />
          </div>
          <span className="text-2xl font-bold text-dark tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Design<span className="text-accent gradient-text">Haven</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
    key={item.label}
    to={`/${item.id}`}
    className={({ isActive }) => `
      text-base font-medium relative group transition-colors duration-300 uppercase tracking-wider
      ${isActive ? 'text-accent' : 'text-gray-700 hover:text-dark'}
    `}
  >
    {({ isActive }) => (
      <>
        {item.label}
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </>
    )}
  </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block w-48 mt-4">
  <Link 
    to="/contact" 
    className="flex items-center justify-center w-full h-12 bg-dark text-white rounded-full font-medium text-center hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/40"
  >
    Contact
  </Link>
</div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes className='text-2xl right-1 text-accent'/> : <FaBars   className='text-2xl  text-accent'/>}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`
        fixed inset-0 bg-white z-40 lg:hidden flex flex-col justify-center items-center transition-transform duration-500 origin-top
        ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
      `}>
        <nav className="flex flex-col items-center gap-8 text-center w-full max-w-[1440px] mx-auto px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={`/${item.id}`}
              className={({ isActive }) => `
                text-3xl font-bold transition-colors duration-300
                ${isActive ? 'text-accent' : 'text-dark hover:text-accent'}
              `}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.label}
            </NavLink>
          ))}
          
          <Link 
            to="/contact" 
            className="mt-8 w-37 h-12 flex items-center justify-center max-w-xs py-4 bg-accent text-white text-xl rounded-full font-medium hover:bg-dark transition-colors duration-300 shadow-md block"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;