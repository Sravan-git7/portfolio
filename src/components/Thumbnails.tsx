import React from 'react';
import { Plus, Download, Share2, Heart, Eye, Palette, Zap, TrendingUp } from 'lucide-react';

const Thumbnails: React.FC = () => {
  const thumbnails = [
    {
      id: 1,
      title: 'Epic Gaming Montage',
      project: 'Gaming Channel',
      created: '2024-01-08',
      likes: 245,
      downloads: 1200,
      views: '2.4M',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Gaming',
      trending: true
    },
    {
      id: 2,
      title: 'iPhone 15 Pro Review',
      project: 'Tech Reviews',
      created: '2024-01-07',
      likes: 189,
      downloads: 890,
      views: '1.8M',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology',
      trending: false
    },
    {
      id: 3,
      title: '5-Minute Pasta Recipe',
      project: 'Cooking Channel',
      created: '2024-01-06',
      likes: 312,
      downloads: 1500,
      views: '3.2M',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Lifestyle',
      trending: true
    },
    {
      id: 4,
      title: 'Bali Adventure Vlog',
      project: 'Travel Diaries',
      created: '2024-01-05',
      likes: 428,
      downloads: 2100,
      views: '4.1M',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Travel',
      trending: true
    },
    {
      id: 5,
      title: 'Summer Vibes Music Video',
      project: 'Music Production',
      created: '2024-01-04',
      likes: 567,
      downloads: 3200,
      views: '5.7M',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Music',
      trending: true
    },
    {
      id: 6,
      title: '30-Day Fitness Challenge',
      project: 'Fitness Journey',
      created: '2024-01-03',
      likes: 234,
      downloads: 980,
      views: '1.9M',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fitness',
      trending: false
    }
  ];

  const categories = ['All', 'Gaming', 'Technology', 'Lifestyle', 'Travel', 'Music', 'Fitness'];

  return (
    <section id="thumbnails" className="py-36 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Thumbnail Icons */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          >
            <Palette className="text-primary" size={30 + Math.random() * 20} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-full mb-8 animate-fade-in">
            <Palette className="text-[#732EE1] animate-wiggle" size={32} />
            <span className="font-extrabold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#732EE1] via-[#656565] to-[#D8D8D8] tracking-wide drop-shadow-lg">Visual Masterpieces</span>
          </div>
          <div className="w-full flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-[#732EE1] to-[#656565] rounded-full mb-4"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-light via-primary to-light mb-8 animate-slide-up">
            STUNNING THUMBNAILS
          </h2>
          <p className="text-2xl text-light/80 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Eye-catching thumbnail designs that <span className="text-primary font-bold">drive clicks</span> and engagement. 
            Each design is crafted to <span className="text-primary font-bold">capture attention</span> and tell your story at first glance.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              className="group px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-500 border-2 border-primary/30 text-light/70 hover:text-white hover:border-primary hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 transform hover:scale-110 hover:-rotate-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Palette, label: 'Thumbnails Created', value: '150+', color: 'from-purple-400 to-pink-500' },
            { icon: Eye, label: 'Total Views', value: '25M+', color: 'from-blue-400 to-purple-500' },
            { icon: Download, label: 'Downloads', value: '12K+', color: 'from-green-400 to-blue-500' },
            { icon: Heart, label: 'Likes', value: '8.5K', color: 'from-red-400 to-pink-500' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group bg-[#656565] p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up text-white"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:animate-wiggle`}>
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-black text-white mb-3 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                <div className="text-white/70 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thumbnails.map((thumbnail, index) => (
            <div 
              key={thumbnail.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative group">
                <img 
                  src={thumbnail.image} 
                  alt={thumbnail.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <button className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white p-3 rounded-2xl transition-all duration-300 transform hover:scale-125 animate-glow">
                    <Eye size={20} />
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white p-3 rounded-2xl transition-all duration-300 transform hover:scale-125">
                    <Download size={20} />
                  </button>
                  <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white p-3 rounded-2xl transition-all duration-300 transform hover:scale-125">
                    <Share2 size={20} />
                  </button>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-bold rounded-full backdrop-blur-md">
                    {thumbnail.category}
                  </span>
                </div>
                
                {/* Trending Badge */}
                {thumbnail.trending && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1 animate-pulse">
                    <TrendingUp size={16} />
                    Trending
                  </div>
                )}
                
                {/* Views Badge */}
                <div className="absolute bottom-4 right-4 bg-dark/80 backdrop-blur-md text-light px-3 py-2 rounded-full text-sm font-bold">
                  {thumbnail.views} views
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {thumbnail.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{thumbnail.project}</p>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-light/60 font-semibold">{thumbnail.created}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-light/60">
                      <Heart size={18} className="text-red-400" />
                      <span className="font-bold">{thumbnail.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-light/60">
                      <Download size={18} className="text-green-400" />
                      <span className="font-bold">{thumbnail.downloads}</span>
                    </div>
                  </div>
                  {/* Thumbnail rating stars removed */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-20">
          <button className="group relative bg-gradient-to-r from-[#732EE1] to-[#656565] text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-md hover:shadow-xl hover:brightness-110">
            Create Custom Thumbnail
          </button>
        </div>
      </div>
    </section>
  );
};

export default Thumbnails;