import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlayCircle, 
  Zap, 
  Share2, 
  RotateCcw, 
  Shuffle, 
  MoveHorizontal 
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const transitions = [
  {
    id: 1,
    name: 'Smooth Slide',
    icon: <MoveHorizontal className="w-6 h-6" />,
    description: 'Elegant horizontal sliding transition with subtle easing',
  },
  {
    id: 2,
    name: 'Quick Flash',
    icon: <Zap className="w-6 h-6" />,
    description: 'Fast flash transition for high-energy scene changes',
  },
  {
    id: 3,
    name: 'Rotating Wipe',
    icon: <RotateCcw className="w-6 h-6" />,
    description: 'Circular rotation wipe transition for creative scene changes',
  },
  {
    id: 4,
    name: 'Cross Dissolve',
    icon: <Share2 className="w-6 h-6" />,
    description: 'Smooth fade between scenes for a gentle mood shift',
  },
  {
    id: 5,
    name: 'Zoom Blur',
    icon: <PlayCircle className="w-6 h-6" />,
    description: 'Dynamic zoom with motion blur for impactful moments',
  },
  {
    id: 6,
    name: 'Random Blocks',
    icon: <Shuffle className="w-6 h-6" />,
    description: 'Pixelated block dissolve for a digital aesthetic',
  },
];

const TransitionShowcase: React.FC = () => {
  const [activeTransition, setActiveTransition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = (index: number) => {
    setActiveTransition(index);
    setIsPlaying(true);
    // In a real implementation, this would play the transition demo
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <section className="section bg-dark-300 relative" id="transitions">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-400 to-transparent"></div>
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">Seamless <span className="gradient-text">Transitions</span></h2>
          <p className="text-lg text-white/80">
            Professional transitions that enhance storytelling and create a polished, cohesive viewing experience.
            Each transition is carefully crafted to match the mood and pace of your content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2 aspect-video bg-dark-200 rounded-xl overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {transitions[activeTransition].icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {transitions[activeTransition].name}
                </h3>
                <p className="text-white/70 max-w-md mx-auto">
                  {transitions[activeTransition].description}
                </p>
                
                <motion.button
                  className="mt-6 btn btn-primary"
                  onClick={() => setIsPlaying(!isPlaying)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isPlaying}
                >
                  {isPlaying ? 'Playing...' : 'Play Demo'}
                </motion.button>
              </div>
            </div>
            
            {isPlaying && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  times: [0, 0.5, 1],
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.div>
          
          <motion.div 
            className="space-y-4 h-96 overflow-y-auto scrollbar-hide pr-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            {transitions.map((transition, index) => (
              <motion.div 
                key={transition.id}
                className={`p-4 rounded-lg cursor-pointer flex items-center space-x-4 transition-all ${
                  activeTransition === index 
                    ? 'bg-primary-500/20 border border-primary-500/30' 
                    : 'bg-dark-200 hover:bg-dark-100 border border-transparent'
                }`}
                onClick={() => handlePlayDemo(index)}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`p-2 rounded-full ${
                  activeTransition === index 
                    ? 'bg-primary-500/30 text-primary-300' 
                    : 'bg-dark-100 text-white/70'
                }`}>
                  {transition.icon}
                </div>
                <div>
                  <h4 className="font-medium">{transition.name}</h4>
                  <p className="text-xs text-white/60">{transition.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransitionShowcase;