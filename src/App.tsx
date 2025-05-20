import React from 'react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import AboutMe from './components/AboutMe';
import VideoShowcase from './components/VideoShowcase';
import ThumbnailGallery from './components/ThumbnailGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <AboutMe />
        <VideoShowcase />
        <ThumbnailGallery />
        <Services />
        <Contact />
        <Footer />
      </motion.div>
    </Layout>
  );
}

export default App;