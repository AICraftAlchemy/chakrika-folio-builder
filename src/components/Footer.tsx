
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray/50 backdrop-blur-sm border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section - About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Chakrika Guttameedi</h3>
            <p className="text-gray-300 mb-4">
              AI/ML Engineer passionate about developing innovative solutions and contributing to cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/chakrikaguttameedi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-light-gray hover:bg-neon-blue hover:text-black transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/guttameedi-chakrika"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-light-gray hover:bg-neon-blue hover:text-black transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:chakrikaguttameedi10@gmail.com"
                className="p-2 rounded-full bg-light-gray hover:bg-neon-blue hover:text-black transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Center section - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-neon-blue transition-colors">About</a></li>
              <li><a href="/experience" className="text-gray-300 hover:text-neon-blue transition-colors">Experience</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-neon-blue transition-colors">Projects</a></li>
              <li><a href="/skills" className="text-gray-300 hover:text-neon-blue transition-colors">Skills</a></li>
              <li><a href="/certifications" className="text-gray-300 hover:text-neon-blue transition-colors">Certifications</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-neon-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Right section - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 chakrikaguttameedi10@gmail.com</p>
              <p>📱 +91 8688567704</p>
              <p>📍 Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="text-red-500 mx-2" size={16} /> by Chakrika Guttameedi © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
