import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Complete brand identity for tech startup'
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Modern responsive website with advanced features'
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'Video Editing',
      image: 'https://images.pexels.com/photos/3846262/pexels-photo-3846262.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'High-impact product launch campaign video'
    },
    {
      id: 4,
      title: 'YouTube Thumbnails',
      category: 'Thumbnail Design',
      image: 'https://images.pexels.com/photos/1666316/pexels-photo-1666316.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Engaging thumbnails that increased CTR by 40%'
    },
    {
      id: 5,
      title: 'Business Presentation',
      category: 'PPT Design',
      image: 'https://images.pexels.com/photos/256473/pexels-photo-256473.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Professional pitch deck for investment round'
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      description: 'Full-featured online store with payment integration'
    }
  ];
  
  const categories = ['All', 'Web Development', 'Video Editing', 'Graphic Design', 'Thumbnail Design', 'PPT Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our latest projects and see how we've helped clients achieve their creative goals.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeFilter === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-300'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-200">
                    <ExternalLink size={20} />
                  </button>
                  {project.category === 'Video Editing' && (
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-200">
                      <Play size={20} />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;