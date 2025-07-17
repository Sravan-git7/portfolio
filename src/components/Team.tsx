const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Video Editor",
      avatar: "👨‍💻",
      bio: "5+ years experience in cinematic editing and color grading",
      skills: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Motion Graphics Designer",
      avatar: "👩‍🎨",
      bio: "Specialist in dynamic animations and visual effects",
      skills: ["After Effects", "Cinema 4D", "Blender"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Mike Rodriguez",
      role: "Thumbnail Designer",
      avatar: "👨‍🎨",
      bio: "Expert in creating click-worthy thumbnails and graphics",
      skills: ["Photoshop", "Illustrator", "Figma"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Emma Wilson",
      role: "Audio Specialist",
      avatar: "👩‍🎵",
      bio: "Professional audio mixing and sound design expert",
      skills: ["Pro Tools", "Logic Pro", "Audition"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Meet Our <span className="text-purple">Team</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our talented team of creative professionals is dedicated to bringing your vision to life with exceptional quality and attention to detail.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-black hover:border-purple"
            >
              {/* Avatar */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple font-semibold">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-white text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-black text-purple px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-gray hover:text-purple transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray hover:text-purple transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={member.social.instagram}
                  className="text-gray hover:text-purple transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple mb-2">15+</div>
            <div className="text-gray">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple mb-2">100+</div>
            <div className="text-gray">Tools & Software Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple mb-2">24/7</div>
            <div className="text-gray">Support & Communication</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-purple rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our team can bring your creative vision to life.
            </p>
            <button className="bg-white text-purple px-8 py-3 rounded-lg font-semibold hover:bg-gray transition-colors duration-200">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team 