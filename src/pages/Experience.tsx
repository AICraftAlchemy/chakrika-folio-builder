
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and hands-on experience in technology
            </p>
          </div>

          {/* Internship Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-6 sm:p-8 rounded-2xl border border-neon-blue/20 backdrop-blur-sm animate-fade-in">
              <div className="flex flex-col lg:flex-row items-start justify-between mb-4 sm:mb-6 gap-4">
                <div className="flex items-start w-full">
                  <div className="bg-neon-blue/20 p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Briefcase className="text-neon-blue" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Cybersecurity Intern</h2>
                    <h3 className="text-lg sm:text-xl text-neon-blue font-semibold">Supraja Technologies</h3>
                  </div>
                </div>
                <div className="text-left lg:text-right w-full lg:w-auto flex-shrink-0">
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end text-gray-300 mb-2 gap-2 sm:gap-4 lg:gap-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">May 2023 - June 2023</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base">Remote</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-neon-purple mb-3">Key Achievements & Learning</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-light-gray/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={18} />
                      <span className="font-semibold text-white text-sm sm:text-base">Ethical Hacking Course</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm">Successfully completed comprehensive 1-month course on ethical hacking methodologies and practices</p>
                  </div>
                  
                  <div className="bg-light-gray/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={18} />
                      <span className="font-semibold text-white text-sm sm:text-base">Cybersecurity Fundamentals</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm">Gained deep understanding of cybersecurity principles and threat analysis techniques</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-gray/50 p-4 sm:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Description</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  During my internship at Supraja Technologies, I successfully completed a comprehensive 1-month course 
                  on Ethical Hacking and Cyber Security. This experience provided me with hands-on knowledge of 
                  cybersecurity fundamentals, ethical hacking methodologies, and understanding of various security 
                  threats and vulnerabilities. I learned the basics of penetration testing, network security, 
                  and defensive security measures, which enhanced my overall understanding of secure software development practices.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Gained */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">Skills Gained Through Experience</h2>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-light-gray/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-light-gray/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                <h3 className="text-lg sm:text-xl font-bold text-neon-blue mb-2">Ethical Hacking</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Penetration testing, vulnerability assessment, and security auditing</p>
              </div>
              
              <div className="bg-light-gray/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-light-gray/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛡️</div>
                <h3 className="text-lg sm:text-xl font-bold text-neon-purple mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Network security, threat analysis, and security best practices</p>
              </div>
              
              <div className="bg-light-gray/30 p-4 sm:p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-light-gray/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2">Security Analysis</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Risk assessment, incident response, and security monitoring</p>
              </div>
            </div>
          </div>

          {/* Professional Development */}
          <div className="bg-gradient-to-r from-dark-gray/80 to-light-gray/80 p-6 sm:p-8 rounded-2xl backdrop-blur-sm animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Professional Development</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-neon-blue mb-3 sm:mb-4">Technical Skills Enhanced</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Network security and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Vulnerability assessment tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Security documentation and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Incident response procedures</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-neon-purple mb-3 sm:mb-4">Soft Skills Developed</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Problem-solving and analytical thinking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Attention to detail and precision</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Professional communication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">Time management and project delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Experience;
