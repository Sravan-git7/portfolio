import React from 'react';
import { Play, Scissors, Volume2, Palette, Clock, Award } from 'lucide-react';

const Editing: React.FC = () => {
  const services = [
    {
      icon: Play,
      title: 'Video Editing',
      description: 'Professional video editing with smooth transitions, color grading, and storytelling',
      features: ['Color Correction', 'Audio Sync', 'Transitions', 'Effects']
    },
    {
      icon: Scissors,
      title: 'Content Creation',
      description: 'Transform raw footage into engaging content for social media and platforms',
      features: ['Social Media Cuts', 'Highlights', 'Montages', 'Trailers']
    },
    {
      icon: Volume2,
      title: 'Audio Enhancement',
      description: 'Crystal clear audio with noise reduction and professional sound design',
      features: ['Noise Reduction', 'Audio Mixing', 'Sound Effects', 'Voice Enhancement']
    },
    {
      icon: Palette,
      title: 'Motion Graphics',
      description: 'Eye-catching animations and graphics to enhance your visual storytelling',
      features: ['Animations', 'Lower Thirds', 'Intros/Outros', 'Visual Effects']
    }
  ];

  const portfolio = [
    {
      title: 'Gaming Montage',
      category: 'Gaming',
      duration: '3:45',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Travel Documentary',
      category: 'Travel',
      duration: '12:30',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Product Review',
      category: 'Tech',
      duration: '8:15',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Music Video',
      category: 'Music',
      duration: '4:20',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="editing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-purple-500">Video Editing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your raw footage into compelling stories with our expert editing services. 
            From concept to final cut, we bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500/20 p-4 rounded-lg mr-4">
                    <Icon className="text-purple-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Recent Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors duration-200">
                      <Play size={24} />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-700/80 text-gray-300 px-2 py-1 rounded text-sm">
                    {item.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <span className="text-purple-500 text-sm">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-500/20 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Clock className="text-purple-500" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Hours Edited</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-500/20 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Play className="text-purple-500" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400">Videos Created</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-500/20 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-500" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editing;