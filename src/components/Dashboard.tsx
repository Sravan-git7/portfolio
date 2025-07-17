import React from 'react';
import { TrendingUp, Clock, CheckCircle, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Projects', value: '12', icon: TrendingUp, change: '+2 this week' },
    { label: 'Hours Worked', value: '156', icon: Clock, change: '+12 this week' },
    { label: 'Completed Tasks', value: '89', icon: CheckCircle, change: '+15 this week' },
    { label: 'Team Members', value: '2', icon: Users, change: 'You + 1 friend' },
  ];

  const recentProjects = [
    { name: 'YouTube Thumbnail Set', status: 'In Progress', progress: 75, dueDate: '2 days' },
    { name: 'Instagram Reels Edit', status: 'Review', progress: 100, dueDate: 'Today' },
    { name: 'Podcast Cover Design', status: 'Draft', progress: 30, dueDate: '1 week' },
    { name: 'Brand Video Edit', status: 'In Progress', progress: 60, dueDate: '3 days' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-light mb-2">Welcome back!</h1>
        <p className="text-secondary">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary bg-opacity-20 p-3 rounded-lg">
                  <Icon className="text-primary" size={24} />
                </div>
              </div>
              <div className="text-2xl font-bold text-light mb-1">{stat.value}</div>
              <div className="text-secondary text-sm mb-2">{stat.label}</div>
              <div className="text-primary text-xs">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Projects */}
      <div className="bg-dark rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-light mb-6">Recent Projects</h2>
        <div className="space-y-4">
          {recentProjects.map((project, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <div className="flex-1">
                <h3 className="font-medium text-light">{project.name}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'In Progress' ? 'bg-primary bg-opacity-20 text-primary' :
                    project.status === 'Review' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                    'bg-gray-600 bg-opacity-20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-secondary text-sm">Due in {project.dueDate}</span>
                </div>
              </div>
              <div className="w-24">
                <div className="flex items-center justify-between text-sm text-secondary mb-1">
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;