import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ExternalLink, X } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const thumbnails = [
  {
    id: 1,
    title: 'Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/Astro%20K%20Joseph%20figma.png?updatedAt=1749140686247',
    category: 'YouTube',
  },
  {
    id: 2,
    title: 'Content',
    image: 'https://ik.imagekit.io/ji2lkjg53/Rohit%20Sai%20Vignesh.png?updatedAt=1747702975858',
    category: 'YouTube',
  },
  {
    id: 3,
    title: 'Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/Resume%20Google-sruthi.png?updatedAt=1747703061266',
    category: 'YouTube',
  },
  {
    id: 4,
    title: 'AI Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/ai%20coach.png?updatedAt=1751939579853',
    category: 'YouTube',
  },
  {
    id: 5,
    title: 'Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/student.png?updatedAt=1751939850316',
    category: 'YouTube',
  },
  {
    id: 6,
    title: 'Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/clone%20website.png?updatedAt=1751939683234',
    category: 'YouTube',
  },
  {
    id: 7,
    title: 'Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/UIBraniX.png?updatedAt=1751939744256',
    category: 'YouTube',
  },
  {
    id: 8,
    title: 'Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/Resume.png?updatedAt=1751940538005',
    category: 'YouTube',
  },
  {
    id: 9,
    title: 'Education',
    image: 'https://ik.imagekit.io/ji2lkjg53/linkedin-jayanth%20padhi.png?updatedAt=1751940506503',
    category: 'YouTube',
  },
];

const ThumbnailModal: React.FC<{
  thumbnail: typeof thumbnails[0] | null;
  onClose: () => void;
}> = ({ thumbnail, onClose }) => {
  if (!thumbnail) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl w-full bg-dark-200 rounded-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-300/80 text-white/80 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="aspect-video">
          <img
            src={thumbnail.image}
            alt={thumbnail.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <span className="text-sm bg-primary-500/30 text-primary-300 px-2 py-1 rounded-full">
            {thumbnail.category}
          </span>
          <h3 className="text-2xl font-bold mt-2">{thumbnail.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ThumbnailGallery: React.FC = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState<typeof thumbnails[0] | null>(null);

  return (
    <section className="section bg-dark-400 relative" id="thumbnails">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-300 to-transparent"></div>
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">Thumbnail <span className="gradient-text">Gallery</span></h2>
          <p className="text-lg text-white/80">
            Captivating thumbnails designed to maximize click-through rates while accurately 
            representing content. Each design balances eye-catching visuals with clear messaging.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          {thumbnails.map((thumbnail, index) => (
            <motion.div
              key={thumbnail.id}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedThumbnail(thumbnail)}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }
              }}
            >
              <img 
                src={thumbnail.image} 
                alt={thumbnail.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 via-dark-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs bg-primary-500/30 text-primary-300 px-2 py-1 rounded-full">
                    {thumbnail.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{thumbnail.title}</h3>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="text-white w-5 h-5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <a href="#contact" className="btn btn-outline inline-flex items-center">
            Request Custom Thumbnails
            <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedThumbnail && (
          <ThumbnailModal
            thumbnail={selectedThumbnail}
            onClose={() => setSelectedThumbnail(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ThumbnailGallery;