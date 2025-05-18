// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import Gallery from '../components/Gallery';
import childrenImage from '../assets/children.jpg';
// Import Lucide icons
import { 
  Eye, 
  Building2, 
  BookOpen, 
  Users, 
  Clock, 
  Zap, 
  Phone, 
  Calendar 
} from 'lucide-react';

// Sample images for a preview gallery on the homepage
const previewImages = [
  { id: 'hp1', src: '/images/gallery/campus-life-1.jpg', alt: 'Vibrant campus life' },
  { id: 'hp2', src: '/images/gallery/students-studying.jpg', alt: 'Students engaged in learning' },
  { id: 'hp3', src: '/images/gallery/graduation-moment.jpg', alt: 'Joyful graduation ceremony' },
  { id: 'hp4', src: '/images/gallery/sports-activity.jpg', alt: 'Students in sports activity' },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <HeroSection
          title="Inspiring Excellence, Building Futures"
          subtitle="Celebrating 120 Years of Educational Tradition and Innovation."
          imageUrl={childrenImage}
          ctaText="Discover Our Legacy"
          onCtaClick={() => navigate('/about')}
          height="min-h-screen"
          isHomePage={true} // Explicitly set this for homepage wave pattern
        />

        {/* Mission & Vision Snippet Section - Improved layout and styling */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-30 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-100 rounded-full opacity-40 -mb-10 -ml-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#6a4c93' }}>
                Our Educational Philosophy
              </h2>
              <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #8a64b8, #c586ff)' }}></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We believe in nurturing both the mind and character of our students through a thoughtful approach to education.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 flex flex-col">
                {/* Moved decorative circles outside the content area */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-14 -right-14 w-32 h-32 bg-indigo-100 rounded-full opacity-60"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-100 rounded-full mr-4">
                      <Eye className="h-8 w-8 text-[#6a4c93]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#6a4c93' }}>
                      Our Vision
                    </h2>
                  </div>
                  
                  <div className="w-16 h-1 mb-6" style={{ background: 'linear-gradient(to right, #8a64b8, #c586ff)' }}></div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                    "We envision a school where every student is empowered to become a global leader, driven by curiosity, integrity, and a commitment to making a positive impact."
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-purple-700" />
                    </div>
                    <span className="text-purple-800 font-medium">Inspiring Excellence</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    <Building2 className="h-8 w-8 text-[#6a4c93]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#6a4c93' }}>
                    Our Mission
                  </h2>
                </div>
                
                <div className="w-16 h-1 mb-6" style={{ background: 'linear-gradient(to right, #8a64b8, #c586ff)' }}></div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "To provide holistic, high-quality education that fosters intellectual growth, character development, and a lifelong passion for learning."
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 transform">
                    <div className="text-[#c77dff] mb-2">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold">Academic Excellence</h3>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 transform">
                    <div className="text-[#c77dff] mb-2">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold">Community Values</h3>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    variant="lavender" 
                    onClick={() => navigate('/about')}
                    className="px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-shadow">
                    Explore Our History
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Key Features Section - Modern Interactive Cards */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(135deg, #6a4c93 0%, #2c1c42 100%)',
            clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
          }}></div>
          
          {/* Constrain the decorative circles to stay within the section */}
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300 rounded-full opacity-20" style={{ bottom: '5%', left: '5%' }}></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400 rounded-full opacity-10" style={{ top: '25%', right: '5%' }}></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Experience the Difference
            </h2>
            <p className="text-center text-purple-200 mb-12 max-w-2xl mx-auto">
              Discover what sets us apart and why our students thrive in our supportive environment
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group h-full">
                <div className="bg-[#6a4c93] bg-opacity-70 p-8 rounded-xl shadow-xl text-white border border-white/20 border-opacity-40 transform group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#8a64b8] p-3 rounded-full mr-4">
                      <Clock className="h-8 w-8 text-[#c19ee0]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Rich Heritage</h3>
                  </div>
                  <p className="text-white text-lg mb-4">
                    Over a century of educational excellence, building traditions that inspire generations and create lasting impact in our community.
                  </p>
                  <div className="w-0 h-1 bg-[#c19ee0] group-hover:w-full transition-all duration-300 mt-auto"></div>
                </div>
              </div>
              
              <div className="group h-full">
                <div className="bg-[#6a4c93] bg-opacity-70 p-8 rounded-xl shadow-xl text-white border border-white/20 border-opacity-40 transform group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#8a64b8] p-3 rounded-full mr-4">
                      <Zap className="h-8 w-8 text-[#c19ee0]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Holistic Growth</h3>
                  </div>
                  <p className="text-white text-lg mb-4">
                    We focus on nurturing intellectual, personal, and ethical development through diverse programs.
                  </p>
                  <div className="w-0 h-1 bg-[#c19ee0] group-hover:w-full transition-all duration-300 mt-auto"></div>
                </div>
              </div>
              
              <div className="group h-full">
                <div className="bg-[#6a4c93] bg-opacity-70 p-8 rounded-xl shadow-xl text-white border border-white/20 border-opacity-40 transform group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#8a64b8] p-3 rounded-full mr-4">
                      <BookOpen className="h-8 w-8 text-[#c19ee0]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Future-Ready</h3>
                  </div>
                  <p className="text-white text-lg mb-4">
                    Equipping students with the skills, knowledge, and mindset to succeed in a rapidly changing world.
                  </p>
                  <div className="w-0 h-1 bg-[#c19ee0] group-hover:w-full transition-all duration-300 mt-auto"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="ghost" 
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                onClick={() => navigate('/programs')}>
                <span className="flex items-center">
                  Explore Our Programs
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Mini Gallery Section - Redesigned with modern UI */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#6a4c93' }}>
                Campus Glimpses
              </h2>
              <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #8a64b8, #c77dff)' }}></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a peek into the vibrant life and inspiring spaces that make our campus special
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewImages.map((image, index) => (
                <div key={image.id} className={`relative group rounded-xl overflow-hidden shadow-lg ${
                  index === 0 ? 'sm:row-span-2 sm:col-span-2 lg:row-span-1 lg:col-span-1' : ''
                }`}>
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6a4c93]/90 via-[#6a4c93]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                    <div className="w-8 h-0.5 bg-white/80 my-2"></div>
                    <p className="text-white/90 text-sm">Experience our vibrant community</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="lavender" 
                onClick={() => navigate('/gallery')}
                className="px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                <span className="flex items-center">
                  View Full Gallery
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action for Contact/Visit - Completely Redesigned UI */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-[#6a4c93] to-[#9d4edd] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <img 
                    src="/images/campus-entrance.jpg" 
                    alt="Our welcoming campus" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = childrenImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6a4c93]/80 to-transparent md:bg-none"></div>
                </div>
                
                <div className="p-8 md:p-12 md:w-3/5 relative flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0aaff] rounded-full opacity-10 -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#c77dff] rounded-full opacity-10 -ml-10 -mb-10"></div>
                  
                  <div className="relative">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                      Ready to Join Our Community?
                    </h2>
                    
                    <p className="text-white/90 text-lg mb-8 max-w-lg">
                      Experience firsthand our vibrant campus, meet our dedicated faculty, and discover how we can empower your educational journey.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/15 backdrop-filter backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/25 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="bg-white/20 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">Contact Us</h3>
                            <p className="text-white/70 text-sm">Speak with our admissions team</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/15 backdrop-filter backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/25 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="bg-white/20 p-3 rounded-full">
                            <Calendar className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">Schedule a Visit</h3>
                            <p className="text-white/70 text-sm">See our campus in person</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="ghost" 
                        onClick={() => navigate('/contact')}
                        className="border-2 border-white text-white hover:bg-white hover:text-[#6a4c93] px-8 py-4 rounded-full font-medium text-lg transition-colors"
                      >
                        Contact Us Today
                      </Button>
                      <Button 
                        variant="ghost" 
                        onClick={() => navigate('/visit')}
                        className="bg-white text-[#6a4c93] border-2 border-white hover:bg-purple-100 px-8 py-4 rounded-full font-medium text-lg shadow-xl transition-colors"
                      >
                        Schedule a Visit →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
