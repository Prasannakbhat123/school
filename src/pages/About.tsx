import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Heart, 
  Globe, 
  Lightbulb,
  Star,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import childrenImage from '../assets/children.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Custom About Hero Section - Made to look like homepage HeroSection with fixed height and wave */}
        <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
          {/* Background image with proper styling like homepage */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ 
              backgroundImage: `url('/images/campus-view.jpg')`,
              backgroundPosition: 'center'
            }}
            onError={(e) => {
              const target = e.target as HTMLDivElement;
              target.style.backgroundImage = `url(${childrenImage})`;
            }}
          ></div>
          
          {/* Dark overlay like homepage */}
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
                Our Story of Excellence
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
                Celebrating 120 years of educational leadership and innovation
              </p>
              
              <div className="mt-2 animate-bounce-subtle">
                <Button
                  variant="secondary" 
                  onClick={() => {
                    const historySection = document.getElementById('history');
                    if (historySection) {
                      historySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-lg px-8 py-4 hover:bg-opacity-90 rounded-full shadow-xl transform transition-transform hover:scale-105"
                  style={{ backgroundColor: 'white', color: '#6a4c93', borderColor: '#8a64b8' }}
                >
                  Explore Our Journey
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements at bottom - Fixed positioning */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-gradient-to-t from-black/30 to-transparent h-24"></div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow z-10">
            <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-white" />
          </div>
        </section>

        {/* Style definitions to match HeroSection */}
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

        {/* Introduction Section - White background and explicit styling */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-full opacity-30 -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100 rounded-full opacity-40 -mb-10 -ml-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#6a4c93]">
                Excellence in Education Since 1903
              </h2>
              <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#6a4c93] to-[#9d4edd]"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                For over a century, YourSchool Academy has been dedicated to nurturing young minds, 
                building character, and preparing students for success in a rapidly changing world.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "120+", label: "Years of Excellence" },
                { number: "15,000+", label: "Alumni Worldwide" },
                { number: "97%", label: "College Acceptance" },
                { number: "93%", label: "Student Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                  <p className="text-3xl md:text-4xl font-bold text-[#6a4c93] mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="bg-gradient-to-br from-[#6a4c93] to-[#9d4edd] rounded-xl shadow-xl text-white p-8 flex flex-col">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed text-lg mb-6 flex-grow">
                  To provide holistic, high-quality education that fosters intellectual growth, character development, 
                  and a lifelong passion for learning. We are committed to nurturing responsible, compassionate, 
                  and resilient individuals who are prepared to succeed in a dynamic world.
                </p>
                <div className="flex items-center mt-auto gap-3 pt-4 border-t border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-white/80" />
                  <span className="font-medium">Committed to Educational Excellence</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl border border-purple-100 p-8 flex flex-col">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-[#6a4c93]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#6a4c93]">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                  To be a beacon of educational excellence, inspiring future generations to excel academically, 
                  grow personally, and contribute meaningfully to society. We envision a school where every 
                  student is empowered to become a global leader, driven by curiosity, integrity, and a 
                  commitment to making a positive impact.
                </p>
                <div className="flex items-center mt-auto gap-3 pt-4 border-t border-gray-200">
                  <CheckCircle2 className="h-5 w-5 text-[#6a4c93]" />
                  <span className="font-medium text-gray-700">Shaping Tomorrow's Leaders</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values - Explicitly light colored background */}
        <section className="py-16 md:py-24 bg-purple-50 relative overflow-hidden">
          {/* Add decorative circles for visual interest */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full opacity-70"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#6a4c93]">Our Core Values</h2>
              <p className="text-xl text-gray-700">
                These principles guide everything we do at YourSchool Academy
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Heart className="h-8 w-8 text-[#6a4c93]" />,
                  title: "Integrity",
                  description: "We uphold the highest standards of honesty, ethics, and accountability in all actions and interactions."
                },
                { 
                  icon: <Globe className="h-8 w-8 text-[#6a4c93]" />,
                  title: "Inclusivity",
                  description: "We celebrate diversity and create an environment where all students feel valued, respected, and supported."
                },
                { 
                  icon: <Lightbulb className="h-8 w-8 text-[#6a4c93]" />,
                  title: "Innovation",
                  description: "We embrace creative thinking and continuous improvement in our approach to education."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-purple-100">
                  <div className="bg-purple-50 p-4 rounded-full inline-block mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#6a4c93]">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Through History - Fix timeline circles positioning */}
        <section id="history" className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-100 rounded-full opacity-30"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6a4c93]">Our Journey Through History</h2>
              <p className="text-xl text-gray-700">Significant milestones that have shaped our institution</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#6a4c93] to-[#9d4edd] transform -translate-x-1/2 z-0"></div>
              
              {/* Timeline items */}
              {[
                { year: "1903", title: "Our Founding", description: "YourSchool Academy was established with a vision to provide quality education for all." },
                { year: "1956", title: "Campus Expansion", description: "Major expansion of our facilities to accommodate growing enrollment and new programs." },
                { year: "1985", title: "Technology Integration", description: "Pioneered computer education and technological integration in our curriculum." },
                { year: "2003", title: "Centennial Celebration", description: "Marked 100 years of educational excellence with alumni events worldwide." },
                { year: "2023", title: "Modern Innovation Hub", description: "Opened our state-of-the-art innovation center for STEAM education." }
              ].map((event, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center mb-12 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <div className={`bg-gray-50 p-6 rounded-xl shadow-lg border-l-4 ${index % 2 === 0 ? 'md:text-right border-[#6a4c93]' : 'border-[#9d4edd]'}`}>
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-start">
                        <div className="bg-[#6a4c93] text-white text-sm py-1 px-3 rounded-full font-bold">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#6a4c93]">{event.title}</h3>
                      </div>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Fix circle positioning - Move slightly left */}
                  <div className="hidden md:flex absolute items-center justify-center z-10" 
                       style={{ 
                         top: '30%',
                         left: 'calc(50% - 4px)', /* Moved 4px to the left from center */
                         transform: 'translateX(-50%)'
                       }}>
                    <div className="w-8 h-8 rounded-full bg-[#6a4c93] border-4 border-white"></div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership/Faculty Section */}
        <section className="py-16 md:py-24 bg-purple-50 relative overflow-hidden">
          {/* Add more decorative elements for visual interest */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6a4c93]">Our Leadership Team</h2>
              <p className="text-xl text-gray-700">Meet the dedicated educators who guide our institution</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Dr. Emily Johnson", role: "Principal", image: "/images/faculty/emily-johnson.jpg" },
                { name: "Prof. Michael Stevens", role: "Vice Principal, Academics", image: "/images/faculty/michael-stevens.jpg" },
                { name: "Sarah Richardson", role: "Head of Student Affairs", image: "/images/faculty/sarah-richardson.jpg" }
              ].map((person, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 relative">
                    {/* Better fallback with placeholder gradient */}
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = childrenImage; // Fallback image
                        target.classList.add('object-contain', 'p-4');
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-[#6a4c93]">{person.name}</h3>
                    <p className="text-gray-600 mb-4">{person.role}</p>
                    <Button 
                      variant="outline"
                      className="w-full text-sm"
                      onClick={() => {}} // Add action if needed
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button
                variant="lavender"
                className="px-6 py-3 rounded-full"
                onClick={() => {}} // Add navigation to faculty page
              >
                <span className="flex items-center">
                  Meet Our Full Faculty
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Testimonials - Clean white background */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/3 left-0 w-32 h-32 bg-purple-100 rounded-full opacity-20 -ml-10"></div>
          <div className="absolute bottom-1/3 right-0 w-48 h-48 bg-indigo-100 rounded-full opacity-30 -mr-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6a4c93]">What Our Community Says</h2>
              <p className="text-xl text-gray-700">The impact of YourSchool Academy in their own words</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  quote: "My children have thrived at YourSchool. The teachers truly care about each student and help them discover their unique potential.",
                  author: "Jennifer P.",
                  role: "Parent"
                },
                {
                  quote: "The education I received prepared me not just academically, but to be a thoughtful, engaged citizen. I'm forever grateful for my time here.",
                  author: "Marcus T.",
                  role: "Alumni, Class of 2015"
                },
                {
                  quote: "Teaching at YourSchool has been the most rewarding experience of my career. We're truly making a difference in students' lives.",
                  author: "David L.",
                  role: "Faculty Member"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-purple-100">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="font-bold text-[#6a4c93]">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-[#6a4c93]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Fix "Apply Now" button visibility */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6a4c93] to-[#8a64b8]"
          style={{ background: 'linear-gradient(to right, #6a4c93, #2c1c42)' }}></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-5"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Educational Community</h2>
              <p className="text-xl mb-8 text-white">
                Discover how YourSchool Academy can provide the foundation for your child's future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="ghost"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#6a4c93]"
                  onClick={() => {}} // Add navigation
                >
                  Schedule a Visit
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white text-[#6a4c93] hover:bg-gray-100 border-2 border-white font-bold"
                  onClick={() => {}} // Add navigation
                >
                  Apply Now
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

export default AboutPage;
