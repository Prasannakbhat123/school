// src/pages/Contact.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, CheckCircle } from 'lucide-react';
import childrenImage from '../assets/children.jpg';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Simplified Hero Section with Gradient */}
        <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
          {/* Simple gradient background */}
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #6a4c93, #2c1c42)' }}
          ></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 max-w-3xl mx-auto text-center">
            <div className="animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight text-white">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
                We're here to help and answer any questions you may have
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-medium">(123) 456-7890</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full">
                  <Mail className="h-5 w-5 mr-2" />
                  <span className="font-medium">info@yourschool.edu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation styles */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}</style>

        {/* Contact Info & Form Section */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-full opacity-20 -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100 rounded-full opacity-30 -mb-10 -ml-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-[#6a4c93] to-[#9d4edd] text-white p-8 rounded-2xl shadow-xl">
                  <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex items-start">
                      <div className="p-3 bg-white/20 rounded-full mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Our Location</h3>
                        <address className="not-italic text-white/80">
                          123 Education Lane<br />
                          Knowledge City, ST 12345
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-white/20 rounded-full mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                        <p className="text-white/80">
                          <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-white/20 rounded-full mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                        <p className="text-white/80">
                          <a href="mailto:info@yourschool.edu" className="hover:text-white">info@yourschool.edu</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-white/20 rounded-full mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Office Hours</h3>
                        <p className="text-white/80">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-white/80">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map */}
                  <div className="rounded-xl overflow-hidden h-48 md:h-64 border-4 border-white/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086438995027!2d-122.419415484681!3d37.77492927975849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c9b9a251f%3A0x1d9a87c1a5f0c7f0!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1620900000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border:0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="School Location Map"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
                  <h2 className="text-3xl font-bold mb-8 text-[#6a4c93]">Send Us a Message</h2>
                  
                  {formStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-green-700">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required
                            className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6a4c93] focus:border-transparent transition-colors" 
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required
                            className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6a4c93] focus:border-transparent transition-colors" 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input 
                          type="text" 
                          name="subject" 
                          id="subject" 
                          required
                          className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6a4c93] focus:border-transparent transition-colors" 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={6}
                          required
                          className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6a4c93] focus:border-transparent transition-colors resize-none" 
                        ></textarea>
                      </div>
                      
                      <div>
                        <Button 
                          type="submit" 
                          variant="lavender" 
                          className="w-full py-4 rounded-lg text-lg flex items-center justify-center"
                          disabled={formStatus === 'sending'}
                        >
                          {formStatus === 'sending' ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-purple-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6a4c93]">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">Find answers to common inquiries about our admissions and programs</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What are the admission requirements?",
                  answer: "Our admission process considers academic records, extracurricular activities, and a personal interview. We look for students who will thrive in our challenging yet supportive environment."
                },
                {
                  question: "Do you offer financial aid or scholarships?",
                  answer: "Yes, we offer need-based financial aid and merit scholarships to qualified students. Applications are reviewed on a rolling basis throughout the year."
                },
                {
                  question: "When can I schedule a campus tour?", 
                  answer: "Campus tours are available Monday through Friday from 9:00 AM to 3:00 PM. Please contact our admissions office to schedule a visit."
                },
                {
                  question: "What extracurricular activities do you offer?",
                  answer: "We offer a wide range of activities including sports, arts, music, debate, robotics, and various academic clubs to enhance student development."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-medium text-[#6a4c93]">{faq.question}</h3>
                      <span className="ml-6 flex-shrink-0 p-1.5 bg-purple-100 rounded-full group-open:rotate-180 transition-transform duration-300">
                        <ChevronDown className="h-5 w-5 text-[#6a4c93]" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
