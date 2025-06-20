
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
              Get In <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, and innovative projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Let's Connect</h2>
              <p className="text-gray-300 mb-8 sm:mb-12 leading-relaxed text-center max-w-3xl mx-auto text-sm sm:text-base">
                I'm passionate about AI/ML and always excited to discuss new projects, share ideas, 
                or explore potential collaborations. Whether you have a project in mind, want to 
                discuss technology, or just want to say hello, I'd love to hear from you!
              </p>

              {/* Contact Details */}
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="bg-light-gray/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 text-center hover:bg-light-gray/30 transition-all duration-300 hover:scale-105">
                  <div className="bg-neon-blue/20 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 inline-block">
                    <Mail className="text-neon-blue" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Email</h3>
                  <a 
                    href="mailto:chakrikaguttameedi10@gmail.com"
                    className="text-neon-blue hover:text-neon-purple transition-colors text-xs sm:text-sm break-all"
                  >
                    chakrikaguttameedi10@gmail.com
                  </a>
                </div>

                <div className="bg-light-gray/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 text-center hover:bg-light-gray/30 transition-all duration-300 hover:scale-105">
                  <div className="bg-neon-purple/20 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 inline-block">
                    <Phone className="text-neon-purple" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Phone</h3>
                  <a 
                    href="tel:+919182225733"
                    className="text-neon-purple hover:text-neon-blue transition-colors text-sm sm:text-base"
                  >
                    +91 9182225733
                  </a>
                </div>

                <div className="bg-light-gray/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 text-center hover:bg-light-gray/30 transition-all duration-300 hover:scale-105">
                  <div className="bg-green-400/20 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 inline-block">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Location</h3>
                  <span className="text-gray-300 text-sm sm:text-base">India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Follow Me</h3>
                <div className="flex justify-center space-x-4 sm:space-x-6">
                  <a
                    href="https://github.com/chakrikaguttameedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-light-gray/30 p-4 sm:p-6 rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-110 group"
                  >
                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guttameedi-chakrika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-light-gray/30 p-4 sm:p-6 rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-6 sm:p-8 rounded-2xl border border-neon-blue/20 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Start Something Amazing?</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Whether it's a machine learning project, web development, or just a tech discussion, 
              I'm here to help bring your ideas to life. Let's build the future together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="mailto:chakrikaguttameedi10@gmail.com"
                className="bg-gradient-to-r from-neon-blue to-neon-purple px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/guttameedi-chakrika"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-neon-blue px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
