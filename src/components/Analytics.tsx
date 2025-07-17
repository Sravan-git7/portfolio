import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const Analytics = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      number: '1,200+',
      label: 'Projects Completed',
      description: 'Successful deliveries'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Positive feedback rate'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Years Experience',
      description: 'In creative industry'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for themselves - our commitment to excellence in every project we deliver.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-purple-300 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
              </div>
              
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h4>
              
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;