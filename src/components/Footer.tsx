const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Video Editing', href: '#services' },
      { name: 'Thumbnail Design', href: '#services' },
      { name: 'Motion Graphics', href: '#services' },
      { name: 'Audio Editing', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Pricing', href: '#services' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'YouTube', icon: '🎥', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' }
  ]

  return (
    <footer className="bg-black border-t border-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-purple mb-4">
              VideoCraft<span className="text-white">Pro</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional video editing and thumbnail design services that help creators and businesses stand out in the digital landscape.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg hover:bg-purple-600 transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest tips and updates in video editing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} VideoCraftPro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 