// src/pages/Programs.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { BookOpen, ChevronDown, Zap, Users, Brush, Trophy, Laptop, Award, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import childrenImage from '../assets/children.jpg';

interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Path to an image for the program
  detailsLink?: string; // Optional link to a more detailed page
}

const programsData: Program[] = [
  {
    id: 'academics',
    title: 'Rigorous Academics',
    description: 'Our comprehensive curriculum challenges students to think critically and achieve their full potential, preparing them for higher education and beyond.',
    imageUrl: '/images/programs/academics.jpg',
    detailsLink: '/programs/academics-detail', // Example link
  },
  {
    id: 'arts',
    title: 'Vibrant Arts Program',
    description: 'From visual arts to performing arts, we nurture creativity and self-expression, providing students with diverse opportunities to explore their talents.',
    imageUrl: '/images/programs/arts.jpg',
  },
  {
    id: 'sports',
    title: 'Competitive Sports',
    description: 'Fostering teamwork, discipline, and sportsmanship through a wide range of athletic activities and competitive teams.',
    imageUrl: '/images/programs/sports.jpg',
  },
  {
    id: 'stem',
    title: 'STEM & Innovation',
    description: 'Engaging students in Science, Technology, Engineering, and Mathematics through hands-on projects and modern labs.',
    imageUrl: '/images/programs/stem.jpg',
  },
  {
    id: 'leadership',
    title: 'Leadership Development',
    description: 'Cultivating future leaders through various programs, clubs, and community service initiatives that build responsibility and integrity.',
    imageUrl: '/images/programs/leadership.jpg',
  },
  {
    id: 'global',
    title: 'Global Citizenship',
    description: 'Preparing students to be informed and engaged global citizens through cultural exchange programs and diverse perspectives.',
    imageUrl: '/images/programs/global.jpg',
  },
];

const ProgramsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Custom Programs Hero Section - Fixed height and wave pattern */}
        <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
          {/* Background image with proper styling */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ 
              backgroundImage: `url('/images/programs-hero.jpg')`,
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
                Discover Your Potential
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
                Diverse educational pathways designed to nurture excellence and inspire success
              </p>
              
              <div className="mt-2 animate-bounce-subtle">
                <Button
                  variant="secondary" 
                  onClick={() => {
                    const programsSection = document.getElementById('programs-grid');
                    if (programsSection) {
                      programsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-lg px-8 py-4 hover:bg-opacity-90 rounded-full shadow-xl transform transition-transform hover:scale-105"
                  style={{ backgroundColor: 'white', color: '#6a4c93', borderColor: '#8a64b8' }}
                >
                  Explore Programs
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements at bottom with fixed wave pattern */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-gradient-to-t from-black/30 to-transparent h-24"></div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow z-10">
            <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-2">Scroll to discover</span>
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

        {/* Improved Educational Excellence Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-full opacity-30 -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100 rounded-full opacity-40 -mb-10 -ml-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-6">
                <BookOpen className="h-8 w-8 text-[#6a4c93]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#6a4c93]">
                Educational Excellence
              </h2>
              <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-[#6a4c93] to-[#9d4edd]"></div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive approach nurtures the intellectual, physical, creative, and social development 
                of each student through a diverse range of exceptional programs.
              </p>
              
              {/* Added Feature Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
                <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <Award className="h-4 w-4 text-[#6a4c93]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#6a4c93]">Academic Excellence</h3>
                  </div>
                  <p className="text-gray-600">Rigorous curriculum designed to challenge and inspire students to achieve their full potential.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-[#6a4c93]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#6a4c93]">Student-Centered</h3>
                  </div>
                  <p className="text-gray-600">Personalized learning experiences tailored to individual strengths, interests, and learning styles.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <Globe className="h-4 w-4 text-[#6a4c93]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#6a4c93]">Global Perspective</h3>
                  </div>
                  <p className="text-gray-600">Preparing students to thrive as responsible global citizens in an interconnected world.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid Section - Enhanced UI */}
        <section id="programs-grid" className="py-16 md:py-24 bg-purple-50 text-black relative overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full opacity-70"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#6a4c93]">
              Pathways to Success
            </h2>
            <div className="w-24 h-1 mx-auto mb-16 bg-gradient-to-r from-[#6a4c93] to-[#9d4edd]"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {programsData.map((program) => {
                // Assign an icon based on the program id
                let IconComponent: LucideIcon;
                switch(program.id) {
                  case 'academics': IconComponent = BookOpen; break;
                  case 'arts': IconComponent = Brush; break;
                  case 'sports': IconComponent = Trophy; break;
                  case 'stem': IconComponent = Laptop; break;
                  case 'leadership': IconComponent = Award; break;
                  case 'global': IconComponent = Globe; break;
                  default: IconComponent = Zap;
                }
                
                return (
                  <div
                    key={program.id}
                    className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={program.imageUrl}
                        alt={program.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = childrenImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-purple-100 rounded-full mr-3">
                          <IconComponent className="h-6 w-6 text-[#6a4c93]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#6a4c93]">
                          {program.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                        {program.description}
                      </p>
                      
                      {program.detailsLink ? (
                        <Button
                          variant="lavender"
                          onClick={() => navigate(program.detailsLink as string)}
                          className="mt-auto self-start rounded-full px-6"
                        >
                          Learn More
                        </Button>
                      ) : (
                        <span className="inline-block mt-auto text-sm py-2 px-4 rounded-full bg-purple-100 text-[#6a4c93] font-medium">
                          More details coming soon
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action - Enhanced UI */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6a4c93] to-[#8a64b8]"
          style={{ background: 'linear-gradient(to right, #6a4c93, #2c1c42)' }}></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-5"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Find Your Path at YourSchool
              </h2>
              <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
                Discover an environment where your talents are nurtured and your ambitions are supported.
                Join our community of learners and leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="ghost"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#6a4c93]"
                  onClick={() => navigate('/admissions')} 
                >
                  Apply Now
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white text-[#6a4c93] hover:bg-gray-100 border-2 border-white font-bold"
                  onClick={() => navigate('/contact')}
                >
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
