import React from 'react';
import { motion } from 'framer-motion';
import { Code, Camera, Palette, Trophy, Briefcase, GraduationCap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const AboutMe: React.FC = () => {
  const experiences = [
    {
      year: '2024 - Present',
      role: 'Video Editor',
      company: 'Creative Studios Inc.',
      description: 'Creating engaging video content and developing editing skills.'
    },
    {
      year: '2024',
      role: 'Freelance Content Creator',
      company: 'Self-employed',
      description: 'Working with clients on video editing and thumbnail design projects.'
    }
  ];

  const skills = [
    { name: 'Video Editing', level: 90, icon: <Camera className="w-5 h-5" /> },
    { name: 'Motion Graphics', level: 65, icon: <Code className="w-5 h-5" /> },
    { name: 'Color Grading', level: 70, icon: <Palette className="w-5 h-5" /> }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-accent-400" />,
      title: 'Rising Star Editor',
      description: 'Recognized for rapid skill development'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-400" />,
      title: '10+ Projects',
      description: 'Completed for satisfied clients'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-secondary-400" />,
      title: 'Result-Driven Editing',
      description: 'Professional Video Editing'
    }
  ];

  return (
    <section className="section bg-dark-400 relative" id="about-me">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-300 to-transparent"></div>
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">About <span className="gradient-text">Me</span></h2>
          <p className="text-lg text-white/80">
            Hi, I'm <span className="gradient-text font-semibold">SOHITH</span>. With 1 year of experience in digital content creation, 
            I've developed a passion for crafting compelling visual stories that captivate audiences and deliver impactful messages.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Journey</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="md:grid md:grid-cols-5 md:gap-6">
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <span className="text-primary-400 font-semibold">{exp.year}</span>
                  </div>
                  <div className="md:col-span-4">
                    <div className="card">
                      <h4 className="text-xl font-semibold mb-2">{exp.role}</h4>
                      <p className="text-secondary-400 mb-2">{exp.company}</p>
                      <p className="text-white/70">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Core Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary-500/20 mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
                <div className="w-full h-2 bg-dark-300 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
                <span className="text-sm text-white/60 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                <p className="text-white/70">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;