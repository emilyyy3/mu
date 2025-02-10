import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to}
    className="px-4 py-2 text-gray-600 font-normal hover:text-black transition-all duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B6BFB] via-[#7B5EFB] to-[#A158F6] group-hover:w-full transition-all duration-300" />
  </Link>
);

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
      <div className="pt-[72px] px-6">
        <div className="max-w-6xl mx-auto py-16">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Character Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[60%] flex items-start justify-start"
            >
              <img 
                src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/mmu.jpg" 
                alt="Character Illustration" 
                className="w-full max-w-[700px]"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[40%] pt-0"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-2"
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B6BFB] via-[#7B5EFB] to-[#A158F6]">Mu</span>
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B6BFB] via-[#7B5EFB] to-[#A158F6] font-medium">Muchiao</span>, is a highly motivated designer with a strong focus on mission-driven projects and product design. She possesses a keen eye for creating user-friendly, intuitive, and efficient user experiences (UX) that have a lasting impact on companies.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  She designs consumer apps, SaaS services, and web apps.
                  Emilie's expertise lies in crafting products that are not only easy-to-use but also adhere to the principles of minimalism and efficiency, ensuring their longevity in the market.
                </p>

                <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                  <li>Research, product strategy, UX planning, user-centered interviews, tests & experiments</li>
                  <li>Lead Designer, Strategic initiative: facilitated cross-functional workshops, identifying opportunity areas, and built team workflow alignment and unified fulfillment optimization team, defined internal communication principles & deliverable documents.</li>
                  <li>Designed the consumer product experiences for over 400+ million user</li>
                </ul>

                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold">Manager <span className="text-gray-500">2023 - 2025</span></h3>
                    <p className="text-gray-700">SaaS / AI customer B2B, B2C service product. Led the product team build the services from 0-1.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Senior UX Designer [Selfemployed & Remote] <span className="text-gray-500">2022 - now</span></h3>
                    <p className="text-gray-700">Web app/ iOS app product ux design. Design system planning.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Design Lead in SoopahGenius [Seattle | Taipei | Remote] <span className="text-gray-500">2018 - 2022</span></h3>
                    <p className="text-gray-700">Giving people visual storytelling superpowers via machine learning. AI video editor that helped people faster.</p>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Achievements</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Down app</h3>
                      <p className="text-gray-700">Redesigned UX approaches, conducted user research, developed product strategy, and contributed to growth and retention efforts, resulting in a 150% increase in user growth in 2024. <a href="https://finance.yahoo.com/news/down-dating-app-celebrates-milestone-140000066.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">News here</a></p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Microsoft</h3>
                      <p className="text-gray-700">The Cortana app conversion rate of the new sign in page was increased to 85%, and the sign in experience recovered 2K users to login.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Whoscall & ASUS</h3>
                      <p className="text-gray-700">The product designs that Muchiao was leading, remained from 2015 - now.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/emilieyangux/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100">
          Copyright reserved by Muchiao, 2025
        </footer>
      </div>
    </div>
  );
};

export default About;