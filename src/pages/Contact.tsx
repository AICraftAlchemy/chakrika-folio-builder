
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, and innovative projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm passionate about AI/ML and always excited to discuss new projects, share ideas, 
                or explore potential collaborations. Whether you have a project in mind, want to 
                discuss technology, or just want to say hello, I'd love to hear from you!
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-neon-blue/20 p-3 rounded-lg mr-4">
                    <Mail className="text-neon-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <a 
                      href="mailto:chakrikaguttameedi10@gmail.com"
                      className="text-neon-blue hover:text-neon-purple transition-colors"
                    >
                      chakrikaguttameedi10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-neon-purple/20 p-3 rounded-lg mr-4">
                    <Phone className="text-neon-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <a 
                      href="tel:+919182225733"
                      className="text-neon-purple hover:text-neon-blue transition-colors"
                    >
                      +91 9182225733
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <span className="text-gray-300">India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/chakrikaguttameedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-light-gray/30 p-4 rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-110 group"
                  >
                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guttameedi-chakrika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-light-gray/30 p-4 rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-light-gray/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="text-neon-blue mr-3" size={28} />
                Send Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark-gray/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark-gray/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark-gray/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-gray/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-gray/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-8 rounded-2xl border border-neon-blue/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Something Amazing?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether it's a machine learning project, web development, or just a tech discussion, 
              I'm here to help bring your ideas to life. Let's build the future together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:chakrikaguttameedi10@gmail.com"
                className="bg-gradient-to-r from-neon-blue to-neon-purple px-8 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/guttameedi-chakrika"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-neon-blue px-8 py-3 rounded-lg text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
