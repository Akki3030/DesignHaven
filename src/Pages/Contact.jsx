import React from 'react';
import { contactInfo, socialLinks, services } from '../assets/contactData';

const Contact = () => {
  return (
    <div className="w-full min-h-screen pb-24 bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary to-secondary py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next design project? Reach out to our team of experts and let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.id} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="text-xl text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-dark mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                      {info.value1 && <p className="text-gray-600">{info.value1}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-bold text-dark mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.id} 
                      href={social.link} 
                      className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white hover:shadow-md transition-all duration-300"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Send Us A Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interested Service</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white">
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-dark transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;