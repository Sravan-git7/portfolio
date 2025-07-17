import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full opacity-10 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-5 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-800">Creative</span>
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Design</span>
            <br />
            <span className="text-gray-800">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We bring your ideas to life through stunning video editing, graphic design, web development, and creative solutions that make your brand stand out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-300 flex items-center gap-2 text-lg font-semibold"
            >
              Explore Our Services
              <ArrowRight size={20} />
            </button>
            
            <button className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors duration-200 text-lg font-medium group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-200 transition-all duration-300">
                <Play size={20} className="ml-1" />
              </div>
              Watch Our Work
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-60 animate-float">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-40 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-50 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;