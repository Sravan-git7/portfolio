import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Creative Director & Video Editor',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Video Editing', 'Motion Graphics', 'Creative Direction']
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer & Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Web Development', 'Graphic Design', 'UI/UX Design']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Get in touch with our team and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">hello@creativestudio.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">New York, USA</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-200"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Meet Our Team</h3>
            
            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h4>
                      <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-white text-gray-600 px-3 py-1 rounded-full border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className="mt-12 bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Start a Project</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none transition-colors duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none transition-colors duration-200 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;