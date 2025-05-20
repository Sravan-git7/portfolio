import React from 'react';
import { motion } from 'framer-motion';
import { Video, Image, Sparkles, Brush } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const About: React.FC = () => {
  const skills = [
    { 
      icon: <Video className="w-8 h-8 text-primary-400" />, 
      title: 'Video Editing', 
      description: 'Professional-grade editing with attention to pacing, color grading, and emotional impact.' 
    },
    { 
      icon: <Image className="w-8 h-8 text-secondary-400" />, 
      title: 'Thumbnail Design', 
      description: 'Eye-catching thumbnails that drive clicks and accurately represent your content.' 
    },
    { 
      icon: <Sparkles className="w-8 h-8 text-accent-400" />, 
      title: 'Motion Graphics', 
      description: 'Custom animations and motion graphics that elevate your brand and messaging.' 
    },
    { 
      icon: <Brush className="w-8 h-8 text-success-400" />, 
      title: 'Visual Effects', 
      description: 'Stunning visual effects that enhance storytelling without overpowering content.' 
    },
  ];

  return (
    <section className="section bg-dark-400 relative" id="about">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-300 to-transparent"></div>
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">Bringing Your <span className="gradient-text">Vision</span> to Life</h2>
          <p className="text-lg text-white/80">
            With 1 year of experience in digital content creation, I specialize in creating 
            visually striking, emotionally resonant video content that captivates audiences and 
            delivers your message with impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-white/70">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;