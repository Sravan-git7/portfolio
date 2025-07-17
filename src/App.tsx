import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Analytics />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CreativeStudio</h3>
            <p className="text-gray-400 mb-6">
              Bringing your creative vision to life with professional design solutions.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2025 CreativeStudio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;