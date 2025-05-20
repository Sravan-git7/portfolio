import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import HeroCanvas from './3d/HeroCanvas';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm inline-block mb-4">
              Visual Storytelling through Digital Artistry
            </span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate Your Vision With <br />
            <span className="gradient-text">Cinematic Craftsmanship</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Expert video editing, stunning thumbnails, and seamless transitions that captivate your audience and tell your story.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#videos" className="btn btn-primary">
              <Play size={18} className="mr-2" />
              Watch Showreel
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;