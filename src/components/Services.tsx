import React from 'react';
import { motion } from 'framer-motion';
import { 
  Film, 
  ImagePlus, 
  PenTool, 
  Music, 
  Crop 
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const services = [
  {
    icon: <Film className="w-6 h-6 text-primary-400" />,
    title: 'Video Editing',
    description: 'Professional editing with seamless cuts, perfect pacing, and emotional storytelling.',
    features: ['Color grading', 'Sound design', 'Motion graphics', 'Narrative structure']
  },
  {
    icon: <ImagePlus className="w-6 h-6 text-secondary-400" />,
    title: 'Thumbnail Design',
    description: 'Eye-catching thumbnails that drive engagement and accurately represent content.',
    features: ['Custom typography', 'Color psychology', 'Composition optimization', 'A/B testing']
  },
  {
    icon: <PenTool className="w-6 h-6 text-success-400" />,
    title: 'Motion Graphics',
    description: 'Dynamic visual elements that explain concepts and enhance branding.',
    features: ['Logo animation', 'Infographics', 'Title sequences', 'Lower thirds']
  },
  {
    icon: <Music className="w-6 h-6 text-warning-400" />,
    title: 'Audio Editing',
    description: 'Professional sound design and music selection that elevates your content.',
    features: ['Sound mixing', 'Music selection', 'Voice enhancement', 'Sound effects']
  },
  {
    icon: <Crop className="w-6 h-6 text-error-400" />,
    title: 'Content Optimization',
    description: 'Strategic editing and formatting for maximum engagement across platforms.',
    features: ['Platform-specific versions', 'Aspect ratio adjustment', 'SEO optimization', 'Audience retention']
  }
];

const Services: React.FC = () => {
  return (
    <section className="section bg-dark-400 relative" id="services">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-300 to-transparent"></div>
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">Professional <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-white/80">
            Comprehensive video production services to elevate your content and captivate your audience.
            Each service is tailored to your specific needs and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="card h-full flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70 mb-4">{service.description}</p>
              
              <ul className="mt-auto space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;