import React from 'react';
import { Plus, Calendar, Users, ExternalLink, Trophy, Zap, Target } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Gaming Channel Rebrand',
      description: 'Complete visual identity overhaul with custom thumbnails and intro animations',
      status: 'Completed',
      progress: 100,
      dueDate: '2024-01-15',
      collaborators: ['Alex', 'Sam'],
      type: 'Branding',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      views: '2.4M',
      engagement: '94%'
    },
    {
      id: 2,
      title: 'Tech Review Series',
      description: 'Professional video editing and thumbnail design for tech product reviews',
      status: 'Active',
      progress: 75,
      dueDate: '2024-01-10',
      collaborators: ['Alex', 'Sam'],
      type: 'Video Editing',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      views: '1.8M',
      engagement: '87%'
    },
    {
      id: 3,
      title: 'Travel Vlog Collection',
      description: 'Cinematic editing and storytelling for adventure travel content',
      status: 'Planning',
      progress: 30,
      dueDate: '2024-01-20',
      collaborators: ['Alex'],
      type: 'Cinematography',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 0,
      views: '0',
      engagement: '0%'
    },
    {
      id: 4,
      title: 'Music Video Production',
      description: 'Creative music video with advanced visual effects and color grading',
      status: 'Review',
      progress: 85,
      dueDate: '2024-01-25',
      collaborators: ['Alex', 'Sam'],
      type: 'Music Video',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 0,
      views: '0',
      engagement: '0%'
    },
    {
      id: 5,
      title: 'Corporate Training Videos',
      description: 'Professional training content with motion graphics and clear narration',
      status: 'Completed',
      progress: 100,
      dueDate: '2024-01-05',
      collaborators: ['Sam'],
      type: 'Corporate',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      views: '890K',
      engagement: '91%'
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      description: 'Short-form content creation for Instagram and TikTok marketing',
      status: 'Active',
      progress: 60,
      dueDate: '2024-02-01',
      collaborators: ['Alex', 'Sam'],
      type: 'Social Media',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 0,
      views: '0',
      engagement: '0%'
    }
  ];

  return (
    <section id="projects" className="py-36 bg-[#F7F7F7] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#732EE1]/10 to-[#656565]/10 px-8 py-4 rounded-full mb-8 animate-fade-in">
            <Trophy className="text-[#732EE1] animate-wiggle" size={32} />
            <span className="font-extrabold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#732EE1] via-[#656565] to-[#D8D8D8] tracking-wide drop-shadow-lg">Our Portfolio</span>
          </div>
          <div className="w-full flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-[#732EE1] to-[#656565] rounded-full mb-4"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-light via-primary to-light mb-8 animate-slide-up">
            EPIC PROJECTS
          </h2>
          <p className="text-2xl text-light/80 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Explore our portfolio of <span className="text-primary font-bold">mind-blowing</span> creative projects spanning video editing, 
            thumbnail design, and visual storytelling across <span className="text-primary font-bold">various industries</span>.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Trophy, label: 'Projects Completed', value: '50+', color: 'from-yellow-400 to-orange-500' },
            { icon: Users, label: 'Happy Clients', value: '25+', color: 'from-green-400 to-blue-500' },
            { icon: Zap, label: 'Hours of Content', value: '1000+', color: 'from-purple-400 to-pink-500' },
            { icon: Target, label: 'Average Rating', value: '4.9', color: 'from-blue-400 to-purple-500' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-dark to-secondary p-8 rounded-3xl text-center transform transition-all duration-500 hover:scale-110 hover:-rotate-2 shadow-2xl hover:shadow-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:animate-wiggle`}>
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-black text-light mb-3 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                <div className="text-light/70 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-[#656565] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up p-8 text-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-gradient-to-r from-[#732EE1] to-[#656565] text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl hover:brightness-110">
                    <ExternalLink size={24} />
                  </button>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${
                    project.status === 'Active' ? 'bg-primary/90 text-white' :
                    project.status === 'Review' ? 'bg-yellow-500/90 text-white' :
                    project.status === 'Completed' ? 'bg-green-500/90 text-white' :
                    'bg-gray-600/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Views Badge */}
                {project.views !== '0' && (
                  <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md text-light px-3 py-2 rounded-full text-sm font-bold">
                    {project.views} views
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  {/* Project rating stars removed */}
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 rounded-full text-sm bg-primary/20 text-primary font-bold">
                      {project.type}
                    </span>
                    {project.engagement !== '0%' && (
                      <span className="px-4 py-2 rounded-full text-sm bg-green-500/20 text-green-400 font-bold">
                        {project.engagement} engagement
                      </span>
                    )}
                  </div>
                
                  {project.status !== 'Completed' && (
                    <div>
                      <div className="flex justify-between text-sm text-light/70 mb-2 font-semibold">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-primary to-purple-600 h-3 rounded-full transition-all duration-1000 animate-pulse"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-light/60 font-semibold">
                      <Calendar size={18} />
                      {new Date(project.dueDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-light/60 font-semibold">
                      <Users size={18} />
                      {project.collaborators.length} members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-20">
          <button className="group relative bg-gradient-to-r from-[#732EE1] to-[#656565] text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-md hover:shadow-xl hover:brightness-110">
            Start Your Epic Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;