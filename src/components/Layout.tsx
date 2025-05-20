import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-300 text-white overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
        layoutId="progress-bar"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1, originX: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;