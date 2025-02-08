import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Users, Lightbulb } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="px-4 py-2 text-gray-600 font-normal hover:text-black transition-all duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B6BFB] via-[#7B5EFB] to-[#A158F6] group-hover:w-full transition-all duration-300" />
  </a>
);

interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  color: string;
}

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Customer Service",
      description: "Developing AI SaaS web product - In Progress -",
      imageSrc: "/customer-service.jpg",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500/80 to-blue-600/80"
    },
    {
      id: 2,
      title: "Female Friendly Iterations",
      description: "Research, UX improvements and redesign for dating app. 150% user growth in 2024.",
      imageSrc: "/female-friendly.jpg",
      icon: <Users className="w-6 h-6" />,
      color: "from-pink-500/80 to-pink-600/80"
    },
    {
      id: 3,
      title: "Microsoft Cortana",
      description: "Voice UX, A/B Testing, Cross-platform Experience Design",
      imageSrc: "/cortana.jpg",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-indigo-500/80 to-indigo-600/80"
    }
  ];

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
            <img src="/mu-logo.png" alt="Mu Logo" className="h-8" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
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
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#about">About</NavLink>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-[72px]">
        {/* Hero Section */}
        <div className="min-h-[calc(70vh-72px)] flex items-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto w-full"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-black">Hi, I am Muchiao </span>
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
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="w-full aspect-[16/6] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-b ${project.color} 
                      flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {project.icon}
                      <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-white/90">{project.description}</p>
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="bg-gray-50 py-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I am a passionate UX/Product Designer focused on creating intuitive and engaging user experiences.
              Over the past decade, I've had the privilege of working on exciting projects ranging from enterprise applications to innovative startup products.
              I believe great design not only solves problems but brings joy to users.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600">User Research</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600">UI/UX Design</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600">Product Strategy</span>
              <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600">Design Systems</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100">
        © 2025 Muchiao Design All rights reserved.
      </footer>
    </div>
  );
};

export default App;