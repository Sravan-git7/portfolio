import React from 'react';
import { Video, Image, Code, FileText, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [currentWork, setCurrentWork] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  let autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Reset currentWork when modal opens
  useEffect(() => {
    if (selectedService !== null) setCurrentWork(0);
  }, [selectedService]);

  // Auto-advance logic
  useEffect(() => {
    if (selectedService === null) return;
    if (isPaused) return;
    autoPlayRef.current && clearTimeout(autoPlayRef.current);
    autoPlayRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentWork((prev) => {
        const worksArr = works[selectedService];
        return prev < worksArr.length - 1 ? prev + 1 : 0;
      });
    }, 2500);
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    };
  }, [currentWork, selectedService, isPaused]);

  // Swipe handler
  const handleDragEnd = (event: any, info: any, worksArr: any[]) => {
    setIsPaused(true);
    if (info.offset.x < -100) {
      // Swipe left
      setDirection(1);
      setCurrentWork((prev) => (prev < worksArr.length - 1 ? prev + 1 : 0));
    } else if (info.offset.x > 100) {
      // Swipe right
      setDirection(-1);
      setCurrentWork((prev) => (prev > 0 ? prev - 1 : worksArr.length - 1));
    }
    setTimeout(() => setIsPaused(false), 1200); // Resume auto after short pause
  };

  // Example works for each service (replace with your own later)
  const works = [
    [ // Video Editing
      { img: 'https://source.unsplash.com/random/400x300?video,1', title: 'Edit 1' },
      { img: 'https://source.unsplash.com/random/400x300?video,2', title: 'Edit 2' },
      { img: 'https://source.unsplash.com/random/400x300?video,3', title: 'Edit 3' },
    ],
    [ // Thumbnail Design
      { img: '/Thumbnail-1.jpg', title: 'Thumbnail 1' },
      { img: '/Thumbnail-2.jpg', title: 'Thumbnail 2' },
      { img: '/Thumbnail-3.jpg', title: 'Thumbnail 3' },
      { img: '/Thumbnail-4.jpg', title: 'Thumbnail 4' },
      { img: '/Thumbnail-5.jpg', title: 'Thumbnail 5' },
      { img: '/Thumbnail-6.jpg', title: 'Thumbnail 6' },
      { img: '/Thumbnail-7.jpg', title: 'Thumbnail 7' },
      { img: '/Thumbnail-8.jpg', title: 'Thumbnail 8' },
      { img: '/Thumbnail-9.jpg', title: 'Thumbnail 9' },
    ],
    [ // Web Development
      { img: 'https://source.unsplash.com/random/400x300?web,1', title: 'Website 1' },
      { img: 'https://source.unsplash.com/random/400x300?web,2', title: 'Website 2' },
      { img: 'https://source.unsplash.com/random/400x300?web,3', title: 'Website 3' },
    ],
    [ // PPT Design
      { img: 'https://source.unsplash.com/random/400x300?ppt,1', title: 'PPT 1' },
      { img: 'https://source.unsplash.com/random/400x300?ppt,2', title: 'PPT 2' },
      { img: 'https://source.unsplash.com/random/400x300?ppt,3', title: 'PPT 3' },
    ],
    [ // Graphic Design
      { img: 'https://source.unsplash.com/random/400x300?graphic,1', title: 'Graphic 1' },
      { img: 'https://source.unsplash.com/random/400x300?graphic,2', title: 'Graphic 2' },
      { img: 'https://source.unsplash.com/random/400x300?graphic,3', title: 'Graphic 3' },
    ],
  ];

  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing with cutting-edge techniques, color grading, and post-production magic.',
      features: ['Motion Graphics', 'Color Correction', 'Audio Enhancement']
    },
    {
      icon: Image,
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnails that boost click-through rates and capture audience attention instantly.',
      features: ['YouTube Thumbnails', 'Social Media Graphics', 'Custom Designs']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies and optimized for performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Custom Development']
    },
    {
      icon: FileText,
      title: 'PPT Design',
      description: 'Stunning presentations that communicate your message clearly and leave lasting impressions.',
      features: ['Corporate Presentations', 'Pitch Decks', 'Interactive Slides']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual solutions including logos, branding, and marketing materials that stand out.',
      features: ['Logo Design', 'Brand Identity', 'Print Design']
    }
  ];

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
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive creative solutions to bring your vision to life with professional quality and innovative approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200 cursor-pointer"
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Icon with glow */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-300 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        {/* Modal Overlay for Works - now as a carousel */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full relative flex flex-col items-center"
                initial={{ scale: 0.9, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 40 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-purple-600 text-2xl font-bold focus:outline-none"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {services[selectedService].title} Works
                </h3>
                <div className="relative w-full flex items-center justify-center" style={{ minHeight: 480 }}>
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentWork}
                      custom={direction}
                      initial={{ x: direction > 0 ? 600 : -600, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: direction > 0 ? -600 : 600, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragStart={() => setIsPaused(true)}
                      onDragEnd={(e, info) => handleDragEnd(e, info, works[selectedService])}
                      className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl w-full flex flex-col items-center"
                      style={{ minHeight: 380, maxWidth: 1800, width: '98vw' }}
                    >
                      <img src={works[selectedService][currentWork].img} alt={works[selectedService][currentWork].title} className="w-full h-[320px] object-cover" />
                      <div className="p-8 w-full">
                        <h4 className="text-4xl font-bold text-gray-800 mb-4 text-center">{works[selectedService][currentWork].title}</h4>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;