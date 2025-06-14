
import Navigation from '@/components/Navigation';
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
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Education</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My academic journey in technology and artificial intelligence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-green-400"></div>

            <div className="space-y-12">
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
                    <div className={`bg-light-gray/30 p-8 rounded-2xl backdrop-blur-sm border-l-4 border-${edu.color} hover:bg-light-gray/50 transition-all duration-300 hover:scale-105`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <GraduationCap className={`text-${edu.color} mr-3`} size={28} />
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                            <p className={`text-${edu.color} font-semibold`}>{edu.degree}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mb-4 space-x-6">
                        <div className="flex items-center">
                          <Calendar className="text-gray-400 mr-2" size={18} />
                          <span className="text-gray-300">{edu.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="text-gray-400 mr-2" size={18} />
                          <span className={`text-${edu.color} font-bold`}>{edu.grade}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-6 rounded-2xl border border-neon-blue/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-blue mb-2">8.0</div>
              <div className="text-gray-300">Current CGPA</div>
              <div className="text-sm text-gray-400 mt-1">B.Tech AI/ML</div>
            </div>
            
            <div className="bg-gradient-to-br from-neon-purple/10 to-pink-500/10 p-6 rounded-2xl border border-neon-purple/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-purple mb-2">91%</div>
              <div className="text-gray-300">Intermediate</div>
              <div className="text-sm text-gray-400 mt-1">Science Stream</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-emerald-500/10 p-6 rounded-2xl border border-green-400/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-green-400 mb-2">93%</div>
              <div className="text-gray-300">Secondary School</div>
              <div className="text-sm text-gray-400 mt-1">SSC Board</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
