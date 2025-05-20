import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Contact: React.FC = () => {
  return (
    <section className="section bg-dark-300 relative" id="contact">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-400 to-transparent"></div>
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-lg text-white/80">
            Ready to bring your vision to life? Reach out to discuss your project needs and how we can collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-4 mx-auto w-full card p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-semibold mb-8 text-center">Contact Information</h3>
            
            <div className="space-y-6 text-lg">
              <div className="flex items-start">
                <div className="bg-primary-500/20 p-4 rounded-lg mr-5">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white/70">Email</h4>
                  <p className="text-white">sohithkontham5@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary-500/20 p-4 rounded-lg mr-5">
                  <Phone className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white/70">Phone</h4>
                  <p className="text-white">+91 6304198661</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent-500/20 p-4 rounded-lg mr-5">
                  <MapPin className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white/70">Location</h4>
                  <p className="text-white">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
