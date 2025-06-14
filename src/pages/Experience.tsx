
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and hands-on experience in technology
            </p>
          </div>

          {/* Internship Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-8 rounded-2xl border border-neon-blue/20 backdrop-blur-sm animate-fade-in">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-neon-blue/20 p-3 rounded-lg mr-4">
                    <Briefcase className="text-neon-blue" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Cybersecurity Intern</h2>
                    <h3 className="text-xl text-neon-blue font-semibold">Supraja Technologies</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-300 mb-2">
                    <Calendar className="mr-2" size={18} />
                    <span>May 2023 - June 2023</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-2" size={18} />
                    <span>Remote</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-neon-purple mb-3">Key Achievements & Learning</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-light-gray/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-green-400 mr-2" size={20} />
                      <span className="font-semibold text-white">Ethical Hacking Course</span>
                    </div>
                    <p className="text-gray-300 text-sm">Successfully completed comprehensive 1-month course on ethical hacking methodologies and practices</p>
                  </div>
                  
                  <div className="bg-light-gray/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-green-400 mr-2" size={20} />
                      <span className="font-semibold text-white">Cybersecurity Fundamentals</span>
                    </div>
                    <p className="text-gray-300 text-sm">Gained deep understanding of cybersecurity principles and threat analysis techniques</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-gray/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                <p className="text-gray-300 leading-relaxed">
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
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Skills Gained Through Experience</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-light-gray/30 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-light-gray/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-neon-blue mb-2">Ethical Hacking</h3>
                <p className="text-gray-300 text-sm">Penetration testing, vulnerability assessment, and security auditing</p>
              </div>
              
              <div className="bg-light-gray/30 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-light-gray/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-neon-purple mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">Network security, threat analysis, and security best practices</p>
              </div>
              
              <div className="bg-light-gray/30 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-light-gray/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Security Analysis</h3>
                <p className="text-gray-300 text-sm">Risk assessment, incident response, and security monitoring</p>
              </div>
            </div>
          </div>

          {/* Professional Development */}
          <div className="bg-gradient-to-r from-dark-gray/80 to-light-gray/80 p-8 rounded-2xl backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Development</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-neon-blue mb-4">Technical Skills Enhanced</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                    Network security and analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                    Vulnerability assessment tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                    Security documentation and reporting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                    Incident response procedures
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neon-purple mb-4">Soft Skills Developed</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                    Problem-solving and analytical thinking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                    Attention to detail and precision
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                    Professional communication
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                    Time management and project delivery
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
