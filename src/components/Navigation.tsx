
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, GraduationCap, Briefcase, Code, Award, Mail, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: User },
    { path: '/about', label: 'About', icon: User },
    { path: '/education', label: 'Education', icon: GraduationCap },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/projects', label: 'Projects', icon: Code },
    { path: '/skills', label: 'Skills', icon: BookOpen },
    { path: '/certifications', label: 'Certifications', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-gray/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-neon-blue hover:text-neon-purple transition-colors">
            Chakrika Guttameedi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-light-gray ${
                  location.pathname === path
                    ? 'text-neon-blue bg-light-gray'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === path
                      ? 'text-neon-blue bg-light-gray'
                      : 'text-gray-300 hover:text-white hover:bg-light-gray'
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
