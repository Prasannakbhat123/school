// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ChevronRight, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#2c1c42] to-[#1a0f29] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top with Newsletter */}
        <div className="relative z-10 -mt-24 mb-16 rounded-2xl bg-gradient-to-r from-[#6a4c93] to-[#9d4edd] p-8 shadow-xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Stay Updated with YourSchool</h2>
              <p className="mt-4 text-white/90">
                Sign up for our newsletter to receive updates on events, 
                programs, and important announcements.
              </p>
            </div>
            
            <div className="flex flex-col justify-center">
              <form className="w-full">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-full border-2 border-white bg-white py-4 pl-6 pr-16 text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a4c93]"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 rounded-full bg-[#6a4c93] p-3 text-white transition hover:bg-[#5a3c83] flex items-center justify-center"
                    style={{ height: "42px", width: "42px" }}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content - Adjusted Grid Layout with better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          {/* Logo and About - 2 columns on md+ screens */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#6a4c93] to-[#9d4edd] flex items-center justify-center text-white font-bold text-xl mr-2">
                YS
              </div>
              <div className="text-xl font-bold">
                <span className="text-[#b39ddb]">YourSchool</span>
                <span className="ml-1">Academy</span>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Nurturing responsible, compassionate, and resilient individuals for over 
              120 years through our commitment to educational excellence.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-[#6a4c93] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-[#6a4c93] transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-[#6a4c93] transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links - Centered - 1 column on md+ screens */}
          <div className="md:col-span-1 flex md:justify-center">
            <div>
              <h3 className="text-lg font-semibold text-[#b39ddb] mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Programs', 'Gallery', 'Contact', 'Admissions', 'Parent Portal', 'Student Resources', 'Faculty & Staff'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} 
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-[#b39ddb] group-hover:translate-x-1 transition-transform" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Info - 2 columns on md+ screens with extra left padding */}
          <div className="md:col-span-2 md:pl-4 lg:pl-24">
            <h3 className="text-lg font-semibold text-[#b39ddb] mb-6">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#b39ddb] mt-0.5" />
                <span className="text-gray-300">123 Education Lane<br/>Knowledge City, ST 12345</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#b39ddb]" />
                <a href="mailto:info@yourschool.edu" className="text-gray-300 hover:text-white transition-colors">
                  info@yourschool.edu
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#b39ddb]" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </address>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} YourSchool Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-gray-300 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
