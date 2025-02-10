import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Users, Lightbulb } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to}
    className="px-4 py-2 text-gray-600 font-normal hover:text-black transition-all duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B6BFB] via-[#7B5EFB] to-[#A158F6] group-hover:w-full transition-all duration-300" />
  </Link>
);

interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Customer Service",
      description: "Developing an AI Customer service SaaS web product",
      imageSrc: "https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/customer-service1.jpg",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500/80 to-blue-600/80",
      link: "/ai-customer-service"
    },
    {
      id: 2,
      title: "Female Friendly Iterations",
      description: "Research, UX improvements and redesign for a dating app. 150% user growth in 2024.",
      imageSrc: "https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/female-friendly.jpg",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#CD4351]/80 to-[#CD4351]/80",
      link: "/female-friendly"
    },
    {
      id: 3,
      title: "Microsoft Cortana",
      description: "Voice UX, A/B Testing, Cross-platform Experience Design for Digital Assistant",
      imageSrc: "https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/cortana.jpg",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-[#104DD3]/80 to-[#104DD3]/80",
      link: "https://docs.google.com/presentation/d/1OkVnHIhFfei_u9FN1uh--9Snm0IBwcd6OtfYG_DsMlk/edit?usp=sharing"
    }
  ];

  const hashtags = ["UX", "Research", "Human-centered", "Data Driven", "Psychology", "Business"];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-[72px] bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            <Link to="/">
              <img 
                src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/mu-logo.png" 
                alt="Mu Logo" 
                className="h-8"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Project</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about-mu">關於我</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100"
          >
            <div className="flex flex-col items-center py-4">
              <NavLink to="/">Project</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/about-mu">關於我</NavLink>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-[72px]">
        {/* Hero Section */}
        <div className="min-h-[calc(63vh-72px)] flex items-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto w-full"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-black">Hi, I am Mu. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B6BFB] via-[#7B5EFB] to-[#A158F6]">
                UX/Product Designer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Formerly at Microsoft, Asus and startups for over 10 years. 
              I like to help on making people's lives easier and better.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div id="projects" className="px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => project.link.startsWith('http') ? window.open(project.link, '_blank') : navigate(project.link)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="w-full aspect-[16/6] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-b ${project.color} 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex items-center gap-3">
                        {project.icon}
                        <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <p className="text-black">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hashtags */}
          <div className="max-w-6xl mx-auto mt-16 flex flex-wrap gap-3 justify-center">
            {hashtags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <footer className="max-w-6xl mx-auto mt-16 py-8 text-center text-gray-500 text-sm border-t border-gray-100">
            Copyright reserved by Muchiao, 2025
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;