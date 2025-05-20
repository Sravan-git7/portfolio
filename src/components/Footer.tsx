import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-400 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">SOHITH</span>
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Professional video editing, thumbnail design, and visual effects services
              that captivate audiences and tell compelling stories.
            </p>
            <div className="flex space-x-4">
              {[
                // { icon: <Facebook size={20} />, href: '#' },
                // { icon: <Twitter size={20} />, href: '#' },
                // { icon: <Instagram size={20} />, href: '#' },
                // { icon: <Youtube size={20} />, href: '#' },
                // { icon: <Linkedin size={20} />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary-500/20 transition-colors"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Video Editing',
                'Thumbnail Design',
                'Motion Graphics',
                'Audio Editing',
                'Content Optimization',
              ].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Videos', href: '#videos' },
                { label: 'Thumbnails', href: '#thumbnails' },
                { label: 'Contact', href: '#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;