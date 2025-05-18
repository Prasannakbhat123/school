// src/components/HeroSection.tsx
import React from 'react';
import Button from './Button'; // Assuming Button.tsx is in the same directory
import childrenImage from '../assets/children.jpg'; // Import the children image

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl?: string; // Optional background image
  ctaText?: string;
  onCtaClick?: () => void;
  showOverlay?: boolean; // To darken the image for better text readability
  height?: string; // e.g., 'min-h-screen', 'h-96'
  isHomePage?: boolean; // New prop to differentiate homepage from other pages
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageUrl = childrenImage, // Set children.jpg as default image
  ctaText,
  onCtaClick,
  showOverlay = true,
  height = 'min-h-[70vh]', // Default height, adjust as needed
  isHomePage = false, // Default to false (for all pages except home)
}) => {
  const sectionStyle = imageUrl
    ? { backgroundImage: `url(${imageUrl})` }
    : { backgroundColor: '#111111' }; // Dark background if no image

  return (
    <section
      className={`relative ${height} bg-cover bg-center flex items-center justify-center text-white overflow-hidden`}
      style={sectionStyle}
    >
      {/* Add a subtle animation to the background */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105" style={sectionStyle}></div>
      
      {imageUrl && showOverlay && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(40, 20, 70, 0.6), rgba(0, 0, 0, 0.7))',
          }}
        ></div>
      )}
      
      <div className="relative z-10 p-8 max-w-3xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
              {subtitle}
            </p>
          )}
          {ctaText && onCtaClick && (
            <div className="mt-2 animate-bounce-subtle">
              <Button
                variant="secondary" // White button on dark/image background
                onClick={onCtaClick}
                className="text-lg px-8 py-4 hover:bg-opacity-90 rounded-full shadow-xl transform transition-transform hover:scale-105"
                style={{ backgroundColor: 'white', color: '#6a4c93', borderColor: '#8a64b8' }}
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Remove wave pattern completely - replace with a simple gradient for all pages */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-gradient-to-t from-black/30 to-transparent h-24"></div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow z-10">
        <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-2">Scroll to explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
