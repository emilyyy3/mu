import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

const EmojiRain = () => {
  const emojis = Array(15).fill("👩🏻‍💻");
  
  return (
    <div className="absolute inset-x-0 top-0 h-screen pointer-events-none overflow-hidden">
      {emojis.map((emoji, index) => (
        <motion.div
          key={index}
          initial={{ 
            y: -50,
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: 0.5,
            rotate: Math.random() * 360
          }}
          animate={{ 
            y: window.innerHeight + 50,
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            rotate: Math.random() * 720
          }}
          transition={{ 
            duration: 3,
            delay: index * 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute text-6xl"
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

const AICustomerService = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Emoji Rain Animation */}
      <EmojiRain />

      <div className="pt-[72px]">
        {/* Hero Image with hover effect */}
        <div className="relative h-[60vh] overflow-hidden group">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img 
              src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/customer-service1.jpg"
              alt="AI Customer Service Hero"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </div>

        <div className="px-6">
          <div className="max-w-4xl mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Title Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">AI Customer Service Platform</h1>
                <p className="text-xl text-gray-600">SaaS / Web tool / B2B.B2C  Role: PO/UX manager</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-8">
                  In 2024-2025, spearheaded the creation of the AI customer support system from the ground up, including the information architecture, product workflows, and user experience design.
                </p>

                <p className="text-lg text-gray-700 mb-8">
                  Led the team in establishing collaborative workflows and developed both mobile and desktop versions of the product. Designed exclusive features tailored for managers, ensuring ease of use, highly customizable function management, real-time data monitoring, and conversation tracking. Enabled customer support users to engage in seamless real-time multilingual conversations, with AI significantly reducing operational costs for businesses.
                </p>

                <p className="text-lg text-gray-700 mb-12">
                  The product offers advanced capabilities such as real-time translation, automated database creation, multi-language support, and manager-focused customization. It stands out in the market with its unique features, building an AI SaaS customer service solution from zero to a fully operational and competitive platform.
                </p>

                {/* Added Image with hover effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-16 overflow-hidden group rounded-lg"
                >
                  <img 
                    src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/2.jpg"
                    alt="AI Customer Service Platform Interface"
                    className="w-full shadow-lg transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                <div className="space-y-16">
                  {/* Project Images */}
                  <div>
                    <div className="overflow-hidden rounded-lg group">
                      <img 
                        src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/dashboard.png"
                        alt="AI Customer Service Interface"
                        className="w-full shadow-lg mb-6 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Realtime Dashboard</h2>
                    <p className="text-gray-700">
                      Real-time data monitoring, with a user-friendly interface that requires minimal learning effort to set up and manage a customer service team. Team performance can be easily compared through data analysis, enabling managers to identify service issues and take steps for improvement.
                    </p>
                    <p className="text-gray-700 mt-4">
                      We designed features for real-time conversation monitoring, allowing managers to intervene when necessary, along with highly customizable permission controls for all options.
                    </p>
                  </div>

                  <div>
                    <div className="overflow-hidden rounded-lg group">
                      <img 
                        src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/1.png"
                        alt="Multilingual Conversations"
                        className="w-full shadow-lg mb-6 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Seamless real-time multilingual conversations <a href="https://www.figma.com/proto/ZWDblor2mEd4umw8XOHgqv/Portfolio-AI?node-id=2-13113&t=jMsu8WCvcwJ342W3-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">🔗Prototype</a></h2>
                  </div>

                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="overflow-hidden rounded-lg group">
                        <img 
                          src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/theme1.png"
                          alt="Customizable Interface Theme 1"
                          className="w-full shadow-lg transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg group">
                        <img 
                          src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/Theme.png"
                          alt="Customizable Interface Theme 2"
                          className="w-full shadow-lg transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Highly customizable</h2>
                    <p className="text-gray-700">
                      From the entry point of the internal dashboard to every detail presented to customers, we offer fully customizable options to tailor the corporate image to your needs.
                    </p>
                  </div>

                  <div>
                    <div className="overflow-hidden rounded-lg group">
                      <img 
                        src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/Mobile.png"
                        alt="Customer Service Center"
                        className="w-full shadow-lg mb-6 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Customer service center</h2>
                  </div>

                  <div>
                    <div className="overflow-hidden rounded-lg group">
                      <img 
                        src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/kit.png"
                        alt="Design System"
                        className="w-full shadow-lg mb-6 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Design system</h2>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">And yet...</h2>
                    <p className="text-gray-700">
                      The customer support system industry is already well-established, but with the rapid growth of AI, we are committed to creating a product that stands out in the market with a simple and user-friendly experience. As of September 2024, our product has officially launched and continues to undergo iterative updates for constant improvement.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100">
            Copyright reserved by Muchiao, 2025
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AICustomerService;