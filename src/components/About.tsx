const About = () => {
  const features = [
    {
      icon: "🎬",
      title: "Professional Editing",
      description: "Cinema-grade video editing with advanced effects, transitions, and color grading."
    },
    {
      icon: "🎨",
      title: "Custom Thumbnails",
      description: "Eye-catching thumbnails designed to maximize click-through rates and engagement."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail."
    },
    {
      icon: "🤝",
      title: "Collaborative Process",
      description: "Work closely with our team to ensure your vision comes to life exactly as imagined."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                About <span className="text-purple">VideoCraftPro</span>
              </h2>
              <p className="text-xl text-white leading-relaxed">
                We are a passionate team of video editors and graphic designers dedicated to transforming raw footage into compelling visual stories that engage and inspire audiences.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                With years of experience in the digital content creation industry, we understand what makes videos stand out in today's competitive landscape. Our expertise spans from YouTube content to corporate presentations, ensuring every project receives the attention it deserves.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We combine technical excellence with creative vision to deliver videos that not only look professional but also drive results for your business or personal brand.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors duration-200">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                    <p className="text-purple-100">To elevate your content through exceptional video editing</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white">Professional quality standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white">Fast turnaround times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white">Creative collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white">Results-driven approach</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 