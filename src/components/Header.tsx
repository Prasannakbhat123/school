// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  // Explicitly set to false to ensure menu is closed by default
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
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

  // Close mobile menu when location changes and scroll to top
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle toggle for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Direct value instead of using callback to ensure immediate update
    console.log('Menu toggled, new state will be:', !isMobileMenuOpen);
  };

  // Check if a nav link is active
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#6a4c93] to-[#9d4edd] flex items-center justify-center text-white font-bold text-xl mr-2">
                YS
              </div>
              <div>
                <span className="font-bold text-xl text-[#6a4c93]">YourSchool</span>
                <span className="text-gray-600 text-lg ml-1 hidden sm:inline-block">Academy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  to={link.href}
                  className={`px-4 py-2 rounded-full flex items-center font-medium transition-colors ${
                    isActive(link.href) 
                      ? 'text-[#6a4c93]' 
                      : 'text-gray-700 hover:text-[#6a4c93]'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#6a4c93] text-[#6a4c93] bg-white rounded-full hover:bg-[#6a4c93] hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>Get in touch</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-[#6a4c93] hover:bg-purple-50 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed implementation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        style={{ 
          top: '56px'
        }}
      >
        <nav className="h-full overflow-y-auto pb-20">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href} className="border-b border-gray-200 last:border-0">
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-base font-medium ${
                    isActive(link.href) ? 'text-[#6a4c93]' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            {/* Mobile contact button */}
            <div className="pt-4">
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#6a4c93] to-[#9d4edd] text-white rounded-lg shadow-md"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
