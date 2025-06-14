
import Navigation from '@/components/Navigation';
import { Target, Heart, Book } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about AI/ML and committed to developing innovative solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Info */}
            <div className="animate-fade-in">
              <div className="bg-light-gray/30 p-8 rounded-2xl backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-neon-blue mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Name:</span>
                    <span className="text-white font-semibold">Chakrika Guttameedi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Email:</span>
                    <span className="text-neon-blue">chakrikaguttameedi10@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Phone:</span>
                    <span className="text-white">9182225733</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Location:</span>
                    <span className="text-white">India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Degree:</span>
                    <span className="text-white">B.Tech AI & ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">CGPA:</span>
                    <span className="text-neon-purple font-bold">8.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-8 rounded-2xl border border-neon-blue/20">
                <div className="flex items-center mb-6">
                  <Target className="text-neon-blue mr-3" size={28} />
                  <h2 className="text-2xl font-bold text-white">Career Objective</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To contribute my knowledge and skills to develop innovative solutions and grow 
                  professionally in a dynamic and challenging environment. I am passionate about 
                  leveraging AI and machine learning technologies to solve real-world problems 
                  and create meaningful impact.
                </p>
              </div>
            </div>
          </div>

          {/* Interests and Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light-gray/30 p-8 rounded-2xl backdrop-blur-sm animate-fade-in">
              <div className="flex items-center mb-6">
                <Heart className="text-neon-purple mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Interests</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                  Reading books and staying updated with latest tech trends
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                  Sports and physical fitness
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                  Exploring new AI/ML frameworks and technologies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                  Contributing to open-source projects
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-8 rounded-2xl border border-neon-blue/20 animate-fade-in">
              <div className="flex items-center mb-6">
                <Book className="text-neon-blue mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Core Values</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  Continuous learning and professional growth
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  Innovation and creative problem-solving
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  Ethical technology development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  Collaboration and teamwork
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
