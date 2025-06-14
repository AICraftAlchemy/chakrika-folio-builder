
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Heart, Book } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about AI/ML and committed to developing innovative solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Profile Info */}
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="bg-gradient-to-br from-light-gray/20 to-light-gray/5 p-6 sm:p-8 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-neon-blue/30 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-neon-blue mb-6 sm:mb-8 flex items-center">
                  <div className="w-1 h-6 sm:h-8 bg-neon-blue rounded-full mr-3 sm:mr-4"></div>
                  Personal Information
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-xl bg-dark-gray/30 gap-1 sm:gap-0">
                    <span className="text-gray-300 font-medium">Name:</span>
                    <span className="text-white font-semibold">Chakrika Guttameedi</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-xl bg-dark-gray/30 gap-1 sm:gap-0">
                    <span className="text-gray-300 font-medium">Email:</span>
                    <span className="text-neon-blue font-medium text-sm sm:text-base break-all">chakrikaguttameedi10@gmail.com</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-xl bg-dark-gray/30 gap-1 sm:gap-0">
                    <span className="text-gray-300 font-medium">Phone:</span>
                    <span className="text-white font-medium">9182225733</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-xl bg-dark-gray/30 gap-1 sm:gap-0">
                    <span className="text-gray-300 font-medium">Location:</span>
                    <span className="text-white font-medium">India</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-xl bg-dark-gray/30 gap-1 sm:gap-0">
                    <span className="text-gray-300 font-medium">Degree:</span>
                    <span className="text-white font-medium">B.Tech AI & ML</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-xl bg-dark-gray/30 gap-1 sm:gap-0">
                    <span className="text-gray-300 font-medium">CGPA:</span>
                    <span className="text-neon-purple font-bold text-lg">8.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="animate-fade-in order-1 lg:order-2">
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-6 sm:p-8 rounded-3xl border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="bg-neon-blue/20 p-3 rounded-xl mr-3 sm:mr-4">
                    <Target className="text-neon-blue" size={24} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Career Objective</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  To contribute my knowledge and skills to develop innovative solutions and grow 
                  professionally in a dynamic and challenging environment. I am passionate about 
                  leveraging AI and machine learning technologies to solve real-world problems 
                  and create meaningful impact in the technology sector.
                </p>
              </div>
            </div>
          </div>

          {/* Interests and Values */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-light-gray/20 to-light-gray/5 p-6 sm:p-8 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-neon-purple/30 animate-fade-in transition-all duration-300">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="bg-neon-purple/20 p-3 rounded-xl mr-3 sm:mr-4">
                  <Heart className="text-neon-purple" size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Interests</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-gray-300">
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-purple rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Reading books and staying updated with latest tech trends</span>
                </li>
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-purple rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Sports and physical fitness</span>
                </li>
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-purple rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Exploring new AI/ML frameworks and technologies</span>
                </li>
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-purple rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Contributing to open-source projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-6 sm:p-8 rounded-3xl border border-neon-blue/20 hover:border-neon-blue/40 animate-fade-in transition-all duration-300">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="bg-neon-blue/20 p-3 rounded-xl mr-3 sm:mr-4">
                  <Book className="text-neon-blue" size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Core Values</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-gray-300">
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-blue rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Continuous learning and professional growth</span>
                </li>
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-blue rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Innovation and creative problem-solving</span>
                </li>
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-blue rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Ethical technology development</span>
                </li>
                <li className="flex items-start p-3 rounded-xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300">
                  <div className="w-3 h-3 bg-neon-blue rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1"></div>
                  <span className="text-sm sm:text-base">Collaboration and teamwork</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
