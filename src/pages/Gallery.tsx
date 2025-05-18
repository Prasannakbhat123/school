// src/pages/Gallery.tsx
import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X, ChevronDown, Facebook, Instagram, Twitter } from 'lucide-react';
import childrenImage from '../assets/children.jpg';

// Image interface
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  year: number;
}

// Sample gallery data
const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/gallery/campus-1.jpg', alt: 'Main Building', year: 2023 },
  { id: '2', src: '/images/gallery/academics-1.jpg', alt: 'Science Lab', year: 2023 },
  { id: '3', src: '/images/gallery/sports-1.jpg', alt: 'Basketball Court', year: 2023 },
  { id: '4', src: '/images/gallery/arts-1.jpg', alt: 'Art Exhibition', year: 2023 },
  { id: '5', src: '/images/gallery/events-1.jpg', alt: 'Annual Day', year: 2023 },
  { id: '6', src: '/images/gallery/campus-2.jpg', alt: 'Library', year: 2022 },
  { id: '7', src: '/images/gallery/academics-2.jpg', alt: 'Computer Lab', year: 2022 },
  { id: '8', src: '/images/gallery/sports-2.jpg', alt: 'Soccer Field', year: 2022 },
  // Add more images as needed
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  // Display initial images or all images based on showAll state
  const displayImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  // Open image modal
  const openModal = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  // Close image modal
  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Custom Gallery Hero Section - Fixed height and contained wave */}
        <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
          {/* Background image with proper styling */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ 
              backgroundImage: `url('/images/gallery-hero.jpg')`,
              backgroundPosition: 'center'
            }}
            onError={(e) => {
              const target = e.target as HTMLDivElement;
              target.style.backgroundImage = `url(${childrenImage})`;
            }}
          ></div>
          
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(rgba(40, 20, 70, 0.6), rgba(0, 0, 0, 0.7))',
            }}
          ></div>
          
          {/* Content container */}
          <div className="relative z-10 p-8 max-w-3xl mx-auto text-center">
            <div className="animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight text-white">
                School Life in Pictures
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
                Explore our vibrant community through our visual journey
              </p>
            </div>
          </div>
          
          {/* Properly contained bottom decoration */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow z-10">
            <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-white" />
          </div>
        </section>

        {/* Animation styles */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0) translateX(-50%); }
            50% { transform: translateY(-10px) translateX(-50%); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-bounce-slow {
            animation: bounceSlow 2s infinite;
          }
          .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          @media (min-width: 768px) {
            .image-grid {
              grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            }
          }
        `}</style>

        {/* Gallery Section Header */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c93] mb-4">Our Gallery</h2>
              <p className="text-lg text-gray-600">
                Capturing the moments that make our school community special
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="pb-16 md:pb-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="image-grid">
              {displayImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-xl shadow-lg h-72 bg-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = childrenImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-white/70 text-sm">{image.year}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Show More Button */}
            {!showAll && galleryImages.length > 6 && (
              <div className="text-center mt-12">
                <button 
                  onClick={() => setShowAll(true)} 
                  className="px-8 py-3 bg-[#6a4c93] text-white rounded-full hover:bg-[#5a3c83] transition-colors shadow-md"
                >
                  Show More Photos
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col">
              <button 
                className="absolute top-0 right-0 -mt-12 -mr-4 bg-white rounded-full p-2 shadow-lg z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
              
              <div 
                className="overflow-hidden rounded-lg bg-gray-800 h-full max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = childrenImage;
                  }}
                />
              </div>
              
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-bold text-xl text-gray-900">{selectedImage.alt}</p>
                <p className="text-gray-600">{selectedImage.year}</p>
              </div>
            </div>
          </div>
        )}

        {/* Social Media CTA */}
        <section className="py-16 text-center bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#6a4c93] mb-4">Want to see more?</h3>
              <p className="text-lg text-gray-600 mb-8">
                Follow us on social media for more photos and updates from our school community!
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://facebook.com/yourschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors group"
                >
                  <Facebook className="h-6 w-6 text-[#6a4c93] group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a 
                  href="https://instagram.com/yourschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-[#6a4c93] group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a 
                  href="https://twitter.com/yourschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors group"
                >
                  <Twitter className="h-6 w-6 text-[#6a4c93] group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
