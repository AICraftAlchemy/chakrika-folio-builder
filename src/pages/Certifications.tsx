
import Navigation from '@/components/Navigation';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Front-End Development",
      issuer: "Coursera (authorized by META)",
      date: "2024",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and modern front-end development practices. Learned responsive design principles, UI/UX fundamentals, and modern web development workflows.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      color: "neon-blue",
      verified: true,
      type: "Professional Certificate"
    },
    {
      title: "Wipro TalentNext – Java Full Stack",
      issuer: "Wipro TalentNext",
      date: "2024",
      description: "Extensive training program covering Java full-stack development including backend development, database management, and enterprise application development. Focused on industry best practices and real-world application development.",
      skills: ["Java", "Spring Framework", "Database Management", "Backend Development", "Full Stack Development"],
      color: "neon-purple",
      verified: true,
      type: "Professional Training"
    },
    {
      title: "Java Fundamentals",
      issuer: "Oracle Academy",
      date: "2024",
      description: "Foundational course in Java programming covering object-oriented programming concepts, data structures, algorithms, and best practices in Java development. Includes hands-on programming exercises and projects.",
      skills: ["Java Programming", "OOP Concepts", "Data Structures", "Algorithms", "Software Development"],
      color: "green-400",
      verified: true,
      type: "Technical Certification"
    }
  ];

  const achievements = [
    {
      title: "Poster Presentation",
      event: "GCET College Event",
      description: "Certified for outstanding poster presentation demonstrating research and communication skills",
      icon: "🏆"
    },
    {
      title: "Essay Writing Competition",
      event: "GCET College Event",
      description: "Recognized for excellent writing skills and critical thinking in essay competition",
      icon: "✍️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Certifications</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional certifications and achievements demonstrating continuous learning and expertise
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-8 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-light-gray/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Certificate Icon and Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start">
                      <div className={`bg-${cert.color}/20 p-4 rounded-lg mr-4`}>
                        <Award className={`text-${cert.color}`} size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                        <p className={`text-${cert.color} font-semibold mb-2`}>{cert.issuer}</p>
                        <div className="flex items-center text-gray-300 mb-2">
                          <Calendar className="mr-2" size={16} />
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 bg-${cert.color}/20 text-${cert.color} rounded-full text-xs font-semibold`}>
                            {cert.type}
                          </span>
                          {cert.verified && (
                            <div className="flex items-center">
                              <CheckCircle className="text-green-400 mr-1" size={16} />
                              <span className="text-green-400 text-xs">Verified</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 leading-relaxed mb-6">{cert.description}</p>
                    
                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">SKILLS GAINED</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1 bg-${cert.color}/10 text-${cert.color} rounded-full text-sm border border-${cert.color}/30 hover:bg-${cert.color}/20 transition-colors`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105">
                        <ExternalLink size={18} />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Academic Achievements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-6 rounded-2xl border border-yellow-400/20 hover:bg-yellow-400/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{achievement.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-yellow-400 font-semibold mb-3">{achievement.event}</p>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-neon-blue/10 to-cyan-500/10 p-6 rounded-2xl border border-neon-blue/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-blue mb-2">3</div>
              <div className="text-gray-300">Professional Certificates</div>
            </div>
            
            <div className="bg-gradient-to-br from-neon-purple/10 to-pink-500/10 p-6 rounded-2xl border border-neon-purple/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-purple mb-2">2</div>
              <div className="text-gray-300">Academic Achievements</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-emerald-500/10 p-6 rounded-2xl border border-green-400/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Completion Rate</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-6 rounded-2xl border border-yellow-400/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2024</div>
              <div className="text-gray-300">Most Recent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
