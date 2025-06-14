
import Navigation from '@/components/Navigation';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "neon-blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C", level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      color: "neon-purple",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 88 }
      ]
    },
    {
      title: "Technologies & Tools",
      icon: Database,
      color: "green-400",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "Specialized Skills",
      icon: Brain,
      color: "yellow-400",
      skills: [
        { name: "Natural Language Processing", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "Data Analysis", level: 90 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Algorithm Design", level: 88 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-400';
    if (level >= 80) return 'bg-neon-blue';
    if (level >= 70) return 'bg-neon-purple';
    return 'bg-yellow-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technical expertise and proficiency across various domains of AI/ML and software development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-light-gray/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-${category.color}/20 p-3 rounded-lg mr-4`}>
                    <category.icon className={`text-${category.color}`} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-${category.color} font-bold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-gray/60 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Overall Proficiency */}
          <div className="bg-gradient-to-r from-dark-gray/80 to-light-gray/80 p-8 rounded-2xl backdrop-blur-sm mb-16 animate-fade-in">
            <h3 className="text-3xl font-bold text-center text-white mb-8">Overall Proficiency</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#00d4ff"
                      strokeWidth="2"
                      strokeDasharray="90, 100"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-neon-blue">90%</span>
                  </div>
                </div>
                <div className="text-gray-300">AI/ML</div>
              </div>
              
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#b347d9"
                      strokeWidth="2"
                      strokeDasharray="85, 100"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-neon-purple">85%</span>
                  </div>
                </div>
                <div className="text-gray-300">Programming</div>
              </div>
              
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="88, 100"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-400">88%</span>
                  </div>
                </div>
                <div className="text-gray-300">Data Science</div>
              </div>
              
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eab308"
                      strokeWidth="2"
                      strokeDasharray="82, 100"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-400">82%</span>
                  </div>
                </div>
                <div className="text-gray-300">Tools & Frameworks</div>
              </div>
            </div>
          </div>

          {/* Skill Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-neon-blue/10 to-cyan-500/10 p-6 rounded-2xl border border-neon-blue/20 text-center animate-fade-in">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-neon-blue mb-2">AI/ML Expert</h3>
              <p className="text-gray-300 text-sm">Advanced knowledge in machine learning algorithms, deep learning, and neural networks</p>
            </div>
            
            <div className="bg-gradient-to-br from-neon-purple/10 to-pink-500/10 p-6 rounded-2xl border border-neon-purple/20 text-center animate-fade-in">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-neon-purple mb-2">Data Scientist</h3>
              <p className="text-gray-300 text-sm">Expert in data analysis, statistical modeling, and predictive analytics</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-emerald-500/10 p-6 rounded-2xl border border-green-400/20 text-center animate-fade-in">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Full-Stack Developer</h3>
              <p className="text-gray-300 text-sm">Proficient in multiple programming languages and modern development frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
