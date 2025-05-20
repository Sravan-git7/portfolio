import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, X } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const videos = [
  {
    id: 1,
    title: 'Matchcut',
    thumbnail: 'https://ik.imagekit.io/ji2lkjg53/Screenshot%202025-05-20%20064657.png?updatedAt=1747703845282',
    description: 'A match cut is a seamless editing technique that connects two visually or thematically similar shots to create a smooth, meaningful transition.',
    category: 'Documentary',
    videoUrl: 'https://ik.imagekit.io/ji2lkjg53/matchcut.mp4?updatedAt=1747702503887'
  },
  {
    id: 2,
    title: 'Documentary',
    thumbnail: 'https://ik.imagekit.io/ji2lkjg53/Screenshot%202025-05-20%20064938.png?updatedAt=1747703993528',
    description: 'A documentary edit focuses on assembling real-life footage, interviews, and narration to present factual storytelling in an informative and engaging way.',
    category: 'Commercial',
    videoUrl: 'https://ik.imagekit.io/ji2lkjg53/mark%20zukerberg.mp4?updatedAt=1747701549657'
  },
  {
    id: 3,
    title: 'Reel Edit',
    thumbnail: 'https://ik.imagekit.io/ji2lkjg53/Screenshot%202025-05-20%20064751.png?updatedAt=1747703888741',
    description: 'A reel edit is a fast-paced, visually engaging video cut designed to capture attention quickly, often used for highlights, promotions, or social media content.',
    category: 'Music',
    videoUrl: 'https://ik.imagekit.io/ji2lkjg53/before%20after.mp4?updatedAt=1747702023385'
  },
];

const VideoModal: React.FC<{
  video: typeof videos[0];
  onClose: () => void;
}> = ({ video, onClose }) => {
  if (!video.videoUrl) return null;

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
        
        <video
          controls
          autoPlay
          className="w-full aspect-video"
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
};

const VideoShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  const handlePrevVideo = () => {
    setActiveVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNextVideo = () => {
    setActiveVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    const video = videos[activeVideo];
    if (video.videoUrl) {
      setSelectedVideo(video);
    }
  };

  return (
    <section className="section bg-dark-300 relative" id="videos">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-400 to-transparent"></div>
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">Video <span className="gradient-text">Masterpieces</span></h2>
          <p className="text-lg text-white/80">
            Showcasing a selection of professionally edited videos with cinematic quality, 
            perfect pacing, and emotional impact that resonates with viewers.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="lg:col-span-2">
            <div 
              className="relative aspect-video bg-dark-200 rounded-xl overflow-hidden cursor-pointer"
              onClick={handleVideoClick}
            >
              <img 
                src={videos[activeVideo].thumbnail} 
                alt={videos[activeVideo].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent flex items-end p-6">
                <div>
                  <span className="text-sm bg-primary-500/30 text-primary-300 px-3 py-1 rounded-full">
                    {videos[activeVideo].category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{videos[activeVideo].title}</h3>
                  <p className="text-white/70 mt-2 text-sm max-w-xl">
                    {videos[activeVideo].description}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? 
                    <Pause className="text-white w-6 h-6" /> : 
                    <Play className="text-white w-6 h-6 ml-1" />
                  }
                </motion.button>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <motion.button 
                  className="p-2 rounded-full bg-dark-200 hover:bg-dark-100 transition-colors"
                  onClick={handlePrevVideo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SkipBack size={18} />
                </motion.button>
                <motion.button 
                  className="p-2 rounded-full bg-dark-200 hover:bg-dark-100 transition-colors"
                  onClick={handleNextVideo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SkipForward size={18} />
                </motion.button>
              </div>
              
              <div className="text-sm text-white/60">
                {activeVideo + 1} / {videos.length}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {videos.map((video, index) => (
              <motion.div 
                key={video.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  activeVideo === index 
                    ? 'bg-primary-500/20 border border-primary-500/30' 
                    : 'bg-dark-200 hover:bg-dark-100 border border-transparent'
                }`}
                onClick={() => {
                  setActiveVideo(index);
                  setIsPlaying(false);
                  if (video.videoUrl) {
                    setSelectedVideo(video);
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-20 h-12 rounded bg-dark-100 overflow-hidden flex-shrink-0">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{video.title}</h4>
                    <p className="text-xs text-white/60">{video.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcase;