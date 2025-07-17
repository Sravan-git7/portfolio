import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'services', 'portfolio', 'contact'];
      let found = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const sectionGradients: Record<string, string> = {
    home: 'from-[#732EE1] to-[#656565]',      // Purple to Gray
    services: 'from-[#732EE1] to-[#D8D8D8]',  // Purple to White
    portfolio: 'from-[#732EE1] to-[#1E1E1E]', // Purple to Black
    contact: 'from-[#732EE1] to-[#656565]',   // Purple to Gray
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              CreativeStudio
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                const gradient = sectionGradients[sectionId] || 'from-[#732EE1] to-[#656565]';
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group rounded-lg
                      ${isActive
                        ? `bg-gradient-to-r ${gradient} text-white font-bold shadow-lg`
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-100'
                      }
                    `}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-200
                      ${isActive ? 'w-full' : 'w-0'} group-hover:w-full`}
                      style={{ transitionProperty: 'width' }}
                    ></span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              const gradient = sectionGradients[sectionId] || 'from-[#732EE1] to-[#656565]';
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 rounded-lg
                    ${isActive
                      ? `bg-gradient-to-r ${gradient} text-white font-bold shadow-lg`
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-100'
                    }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;