
import Navigation from '@/components/Navigation';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Next Word Prediction using Federated Learning",
      description: "This project implements a next-word prediction system using a hybrid deep learning model combining BERT, LSTM, and CNN. It features a simulated federated learning environment that ensures user data privacy while maintaining high model performance.",
      technologies: ["Python", "TensorFlow", "BERT", "LSTM", "CNN", "Federated Learning", "NLP"],
      category: "Machine Learning",
      color: "neon-blue",
      github: "https://github.com/chakrikaguttameedi",
      live: "#"
    },
    {
      title: "Credit Card Fraud Detection using ML Models",
      description: "This project uses machine learning algorithms such as Logistic Regression, Decision Trees, and Random Forest to detect fraudulent credit card transactions based on customer behavior patterns. The system achieves high accuracy in identifying suspicious activities.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Logistic Regression", "Random Forest"],
      category: "Machine Learning",
      color: "neon-purple",
      github: "https://github.com/chakrikaguttameedi",
      live: "#"
    },
    {
      title: "Spam Email Classifier using Multinomial Naive Bayes",
      description: "A machine learning-based system built using the Multinomial Naive Bayes algorithm to classify emails as spam or ham. It applies NLP techniques such as TF-IDF for feature extraction and achieves high classification accuracy.",
      technologies: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Naive Bayes", "Email Processing"],
      category: "Natural Language Processing",
      color: "green-400",
      github: "https://github.com/chakrikaguttameedi",
      live: "#"
    },
    {
      title: "Stock Price Prediction using Linear Regression",
      description: "This project predicts future stock prices using linear regression models. It analyzes historical stock data to forecast trends and assist investors in decision-making. The system includes data visualization and trend analysis features.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Linear Regression", "Financial Data"],
      category: "Data Science",
      color: "yellow-400",
      github: "https://github.com/chakrikaguttameedi",
      live: "#"
    }
  ];

  const categories = ["All", "Machine Learning", "Natural Language Processing", "Data Science"];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-gray via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my machine learning, data science, and AI projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  index === 0 
                    ? 'bg-neon-blue text-black border-neon-blue' 
                    : 'border-gray-600 text-gray-300 hover:border-neon-blue hover:text-neon-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-light-gray/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`bg-${project.color}/20 p-3 rounded-lg mr-4`}>
                      <Code className={`text-${project.color}`} size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <span className={`text-${project.color} text-sm font-semibold`}>{project.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-gray/60 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-neon-blue/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-dark-gray/60 text-gray-300 rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-6 rounded-2xl border border-neon-blue/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-blue mb-2">4+</div>
              <div className="text-gray-300">Total Projects</div>
            </div>
            
            <div className="bg-gradient-to-br from-neon-purple/10 to-pink-500/10 p-6 rounded-2xl border border-neon-purple/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-purple mb-2">3</div>
              <div className="text-gray-300">ML Projects</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-emerald-500/10 p-6 rounded-2xl border border-green-400/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-green-400 mb-2">7+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-6 rounded-2xl border border-yellow-400/20 text-center animate-fade-in">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
