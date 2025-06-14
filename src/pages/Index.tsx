
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Resume.pdf';
    link.download = 'Chakrika_Guttameedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left side - Text content */}
              <div className="animate-fade-in text-center lg:text-left">
                <div className="mb-4 sm:mb-6">
                  <span className="text-neon-blue text-base sm:text-lg font-semibold">Hello, I'm</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="text-white">Chakrika</span>
                  <br />
                  <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    Guttameedi
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  AI/ML Engineer & Data Scientist passionate about developing innovative solutions 
                  and contributing to cutting-edge technology
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                  <Link
                    to="/projects"
                    className="bg-gradient-to-r from-neon-blue to-neon-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <span>View Projects</span>
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </Link>
                  
                  <button 
                    onClick={handleDownloadCV}
                    className="border-2 border-neon-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <Download size={18} className="sm:w-5 sm:h-5" />
                    <span>Download CV</span>
                  </button>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4 sm:space-x-6 justify-center lg:justify-start">
                  <a
                    href="https://github.com/chakrikaguttameedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-light-gray hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guttameedi-chakrika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-light-gray hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="mailto:chakrikaguttameedi10@gmail.com"
                    className="p-3 rounded-full bg-light-gray hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
              
              {/* Right side - Visual element */}
              <div className="relative lg:ml-12 animate-float mt-8 lg:mt-0">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-1 animate-glow">
                    <div className="w-full h-full rounded-full bg-dark-gray flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl sm:text-6xl font-bold text-neon-blue mb-2 sm:mb-4">CG</div>
                        <div className="text-sm sm:text-lg text-gray-300">AI/ML Engineer</div>
                        <div className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">CGPA: 8.0</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-neon-purple/20 p-2 sm:p-4 rounded-lg backdrop-blur-sm animate-pulse">
                    <span className="text-xs sm:text-sm font-semibold text-neon-purple">Python</span>
                  </div>
                  
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-neon-blue/20 p-2 sm:p-4 rounded-lg backdrop-blur-sm animate-pulse delay-1000">
                    <span className="text-xs sm:text-sm font-semibold text-neon-blue">TensorFlow</span>
                  </div>
                  
                  <div className="absolute top-1/2 -left-4 sm:-left-8 bg-green-500/20 p-2 sm:p-4 rounded-lg backdrop-blur-sm animate-pulse delay-500">
                    <span className="text-xs sm:text-sm font-semibold text-green-400">ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-24">
            <div className="text-center p-4 sm:p-6 rounded-lg bg-light-gray/50 backdrop-blur-sm hover:bg-light-gray transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-neon-blue mb-1 sm:mb-2">4+</div>
              <div className="text-sm sm:text-base text-gray-300">Projects</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-light-gray/50 backdrop-blur-sm hover:bg-light-gray transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-neon-purple mb-1 sm:mb-2">8.0</div>
              <div className="text-sm sm:text-base text-gray-300">CGPA</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-light-gray/50 backdrop-blur-sm hover:bg-light-gray transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">3+</div>
              <div className="text-sm sm:text-base text-gray-300">Certifications</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-light-gray/50 backdrop-blur-sm hover:bg-light-gray transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">1</div>
              <div className="text-sm sm:text-base text-gray-300">Internship</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
