
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, Database, Brain, Wrench, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "neon-blue",
      skills: [
        { name: "Python", expertise: "Expert" },
        { name: "Java", expertise: "Advanced" },
        { name: "C", expertise: "Proficient" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      color: "neon-purple",
      skills: [
        { name: "TensorFlow", expertise: "Advanced" },
        { name: "PyTorch", expertise: "Proficient" },
        { name: "Scikit-learn", expertise: "Expert" },
        { name: "NumPy", expertise: "Advanced" },
        { name: "Pandas", expertise: "Advanced" }
      ]
    },
    {
      title: "Technologies & Tools",
      icon: Database,
      color: "green-400",
      skills: [
        { name: "Machine Learning", expertise: "Expert" },
        { name: "Deep Learning", expertise: "Advanced" },
        { name: "MySQL", expertise: "Proficient" }
      ]
    },
    {
      title: "Specialized Skills",
      icon: Brain,
      color: "yellow-400",
      skills: [
        { name: "Natural Language Processing", expertise: "Advanced" },
        { name: "Computer Vision", expertise: "Proficient" },
        { name: "Data Analysis", expertise: "Expert" },
        { name: "Statistical Analysis", expertise: "Advanced" },
        { name: "Algorithm Design", expertise: "Advanced" }
      ]
    }
  ];

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case 'Expert': return 'text-green-400';
      case 'Advanced': return 'text-neon-blue';
      case 'Proficient': return 'text-neon-purple';
      default: return 'text-yellow-400';
    }
  };

  const getStarCount = (expertise: string) => {
    switch (expertise) {
      case 'Expert': return 5;
      case 'Advanced': return 4;
      case 'Proficient': return 3;
      default: return 2;
    }
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
                className="bg-gradient-to-br from-light-gray/10 to-light-gray/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-neon-blue/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neon-blue/10 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r from-${category.color}/20 to-${category.color}/10 p-4 rounded-2xl mr-4 border border-${category.color}/20`}>
                    <category.icon className={`text-${category.color}`} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="bg-dark-gray/30 rounded-xl p-4 border border-gray-600/30 hover:bg-dark-gray/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
                        <span className={`${getExpertiseColor(skill.expertise)} font-bold text-sm px-3 py-1 rounded-full bg-gray-800/50`}>
                          {skill.expertise}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={16}
                            className={`${
                              starIndex < getStarCount(skill.expertise)
                                ? `text-${category.color} fill-current`
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Overall Proficiency - Redesigned */}
          <div className="bg-gradient-to-r from-dark-gray/60 to-light-gray/40 p-10 rounded-3xl backdrop-blur-sm mb-16 animate-fade-in border border-gray-700/50">
            <h3 className="text-4xl font-bold text-center text-white mb-12">Core Competencies</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-blue/5 border border-neon-blue/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-blue mb-2">AI/ML</div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-neon-blue fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-gray-300 font-semibold">Artificial Intelligence</div>
              </div>
              
              <div className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-purple/5 border border-neon-purple/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-purple mb-2">CODE</div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={12} className="text-neon-purple fill-current" />
                      ))}
                      <Star size={12} className="text-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="text-gray-300 font-semibold">Programming</div>
              </div>
              
              <div className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-400/5 border border-green-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">DATA</div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-green-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-gray-300 font-semibold">Data Science</div>
              </div>
              
              <div className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border border-yellow-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">TOOLS</div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-current" />
                      ))}
                      <Star size={12} className="text-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="text-gray-300 font-semibold">Frameworks</div>
              </div>
            </div>
          </div>

          {/* Skill Highlights - Enhanced */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-neon-blue/15 to-cyan-500/10 p-8 rounded-3xl border border-neon-blue/20 text-center animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-neon-blue/20">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-neon-blue mb-4">AI/ML Expert</h3>
              <p className="text-gray-300 leading-relaxed">Advanced knowledge in machine learning algorithms, deep learning, and neural networks with hands-on project experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-neon-purple/15 to-pink-500/10 p-8 rounded-3xl border border-neon-purple/20 text-center animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-neon-purple/20">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-neon-purple mb-4">Data Scientist</h3>
              <p className="text-gray-300 leading-relaxed">Expert in data analysis, statistical modeling, and predictive analytics with strong visualization skills</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/15 to-emerald-500/10 p-8 rounded-3xl border border-green-400/20 text-center animate-fade-in hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Problem Solver</h3>
              <p className="text-gray-300 leading-relaxed">Proficient in multiple programming languages and modern development frameworks with strong algorithmic thinking</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Skills;
