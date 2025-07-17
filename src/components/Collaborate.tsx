import React from 'react';
import { UserPlus, MessageSquare, Calendar, Clock } from 'lucide-react';

const Collaborate: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'You',
      role: 'Creative Director',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'online',
      projects: 8
    },
    {
      id: 2,
      name: 'Your Friend',
      role: 'Video Editor',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'online',
      projects: 6
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Your Friend',
      action: 'uploaded new thumbnail design',
      project: 'YouTube Channel Rebrand',
      time: '2 hours ago'
    },
    {
      id: 2,
      user: 'You',
      action: 'completed video editing for',
      project: 'Instagram Story Templates',
      time: '5 hours ago'
    },
    {
      id: 3,
      user: 'Your Friend',
      action: 'left a comment on',
      project: 'Podcast Episode Editing',
      time: '1 day ago'
    },
    {
      id: 4,
      user: 'You',
      action: 'created new project',
      project: 'Brand Video Series',
      time: '2 days ago'
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: 'Project Review Meeting',
      time: 'Today, 3:00 PM',
      attendees: ['You', 'Your Friend']
    },
    {
      id: 2,
      title: 'Creative Brainstorming',
      time: 'Tomorrow, 10:00 AM',
      attendees: ['You', 'Your Friend']
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-light mb-2">Collaborate</h1>
          <p className="text-secondary">Work together with your team on creative projects</p>
        </div>
        <button className="bg-primary hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 transform hover:scale-105">
          <UserPlus size={20} />
          Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Team Members */}
        <div className="lg:col-span-1">
          <div className="bg-dark p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-light mb-6">Team Members</h2>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="relative">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                      member.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-light">{member.name}</h3>
                    <p className="text-secondary text-sm">{member.role}</p>
                    <p className="text-secondary text-xs">{member.projects} active projects</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="bg-dark p-6 rounded-xl shadow-lg mt-6">
            <h2 className="text-xl font-semibold text-light mb-6">Upcoming Meetings</h2>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-medium text-light mb-2">{meeting.title}</h3>
                  <div className="flex items-center gap-2 text-secondary text-sm mb-2">
                    <Clock size={16} />
                    {meeting.time}
                  </div>
                  <div className="text-secondary text-sm">
                    {meeting.attendees.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-2">
          <div className="bg-dark p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-light">Recent Activity</h2>
              <button className="text-primary hover:text-purple-400 transition-colors duration-200">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-light">
                      <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                      <span className="text-primary">{activity.project}</span>
                    </p>
                    <p className="text-secondary text-sm mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-dark p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary bg-opacity-20 p-3 rounded-lg">
                  <MessageSquare className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-light">Team Chat</h3>
                  <p className="text-secondary text-sm">3 new messages</p>
                </div>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-light py-2 px-4 rounded-lg transition-colors duration-200">
                Open Chat
              </button>
            </div>

            <div className="bg-dark p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary bg-opacity-20 p-3 rounded-lg">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-light">Schedule Meeting</h3>
                  <p className="text-secondary text-sm">Plan your next session</p>
                </div>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-light py-2 px-4 rounded-lg transition-colors duration-200">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;