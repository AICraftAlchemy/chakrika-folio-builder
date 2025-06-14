
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Geethanjali College of Engineering and Technology",
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      duration: "2021-2025",
      grade: "CGPA: 8.0",
      description: "Specialized in AI/ML with focus on deep learning, neural networks, and data science. Completed coursework in algorithms, data structures, machine learning, and software engineering.",
      color: "neon-blue"
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Board of Intermediate Education Telangana",
      duration: "2019-2021",
      grade: "Percentage: 91",
      description: "Completed intermediate education with strong foundation in Mathematics, Physics, and Chemistry, preparing for engineering entrance examinations.",
      color: "neon-purple"
    },
    {
      institution: "Indira High School",
      degree: "SSC",
      duration: "2018-2019",
      grade: "Percentage: 93",
      description: "Completed secondary education with excellent academic performance across all subjects, demonstrating strong analytical and problem-solving skills.",
      color: "green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Education</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              My academic journey in technology and artificial intelligence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-green-400"></div>

            <div className="space-y-8 sm:space-y-12">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline node */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-${edu.color} rounded-full border-4 border-dark-gray z-10`}></div>

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} md:w-1/2`}>
                    <div className={`bg-gradient-to-br from-light-gray/20 to-light-gray/5 p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-l-4 border-${edu.color} hover:bg-light-gray/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${edu.color}/20`}>
                      <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4 sm:gap-0">
                        <div className="flex items-start w-full">
                          <div className={`bg-${edu.color}/20 p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0`}>
                            <GraduationCap className={`text-${edu.color}`} size={24} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">{edu.institution}</h3>
                            <p className={`text-${edu.color} font-semibold text-sm sm:text-base leading-tight`}>{edu.degree}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 space-y-3 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center bg-dark-gray/30 px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto">
                          <Calendar className="text-gray-400 mr-2 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm sm:text-base">{edu.duration}</span>
                        </div>
                        <div className="flex items-center bg-dark-gray/30 px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto">
                          <Award className="text-gray-400 mr-2 flex-shrink-0" size={16} />
                          <span className={`text-${edu.color} font-bold text-sm sm:text-base`}>{edu.grade}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-neon-blue/15 to-neon-purple/10 p-6 sm:p-8 rounded-3xl border border-neon-blue/20 text-center animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-neon-blue/20">
              <div className="text-3xl sm:text-4xl font-bold text-neon-blue mb-2">8.0</div>
              <div className="text-gray-300 font-semibold text-base sm:text-lg">Current CGPA</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">B.Tech AI/ML</div>
            </div>
            
            <div className="bg-gradient-to-br from-neon-purple/15 to-pink-500/10 p-6 sm:p-8 rounded-3xl border border-neon-purple/20 text-center animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-neon-purple/20">
              <div className="text-3xl sm:text-4xl font-bold text-neon-purple mb-2">91%</div>
              <div className="text-gray-300 font-semibold text-base sm:text-lg">Intermediate</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Science Stream</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/15 to-emerald-500/10 p-6 sm:p-8 rounded-3xl border border-green-400/20 text-center animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">93%</div>
              <div className="text-gray-300 font-semibold text-base sm:text-lg">Secondary School</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">SSC Board</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Education;
