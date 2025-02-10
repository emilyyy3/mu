import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to}
    className="px-4 py-2 text-[#eee] font-normal hover:text-white transition-all duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4B6BFB] via-[#7B5EFB] to-[#A158F6] group-hover:w-full transition-all duration-300" />
  </Link>
);

const UnicornAnimation = () => {
  return (
    <div className="fixed bottom-[20%] right-[20%] pointer-events-none z-50">
      {/* Large Unicorn */}
      <motion.div
        initial={{ 
          scale: 0.4,
          opacity: 0,
          rotate: 0,
          x: 0
        }}
        animate={{ 
          scale: 1.15,
          opacity: [0, 1, 1, 0],
          rotate: 360,
          x: -50
        }}
        transition={{ 
          duration: 2,
          ease: "easeOut"
        }}
        className="text-8xl"
      >
        🦄
      </motion.div>

      {/* Small Unicorn */}
      <motion.div
        initial={{ 
          scale: 0.3,
          opacity: 0,
          rotate: 0,
          x: 50
        }}
        animate={{ 
          scale: 0.8,
          opacity: [0, 1, 1, 0],
          rotate: -360,
          x: 100
        }}
        transition={{ 
          duration: 2,
          delay: 0.3,
          ease: "easeOut"
        }}
        className="text-8xl absolute top-0"
      >
        🦄
      </motion.div>
    </div>
  );
};

const FemaleFriendly = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showUnicorn, setShowUnicorn] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initial animation
    setShowUnicorn(true);
    const initialTimer = setTimeout(() => {
      setShowUnicorn(false);
    }, 2000);

    // Set up recurring animation every 15 seconds
    const interval = setInterval(() => {
      setShowUnicorn(true);
      setTimeout(() => {
        setShowUnicorn(false);
      }, 2000);
    }, 15000);

    // Cleanup
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const processSteps = [
    'Research',
    'users interviews',
    'mvp tests',
    'competitor analytics',
    'user behavior data research',
    'user profile',
    'users flow',
    'product design',
    'prototypes',
    'tests',
    'redesign',
    'revise'
  ];

  return (
    <div className="bg-[#111] min-h-screen text-[#eee]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-[72px] bg-[#111]/80 backdrop-blur-sm border-b border-gray-800 z-50">
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
            className="md:hidden p-2 text-[#eee] hover:text-white transition-colors duration-300"
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
            className="md:hidden absolute top-[72px] left-0 right-0 bg-[#111]/80 backdrop-blur-sm border-b border-gray-800"
          >
            <div className="flex flex-col items-center py-4">
              <NavLink to="/">Project</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/about-mu">關於我</NavLink>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Unicorn Animation */}
      {showUnicorn && <UnicornAnimation />}

      {/* Main Content */}
      <div className="pt-[72px]">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img 
              src="https://raw.githubusercontent.com/emilyyy3/mu/refs/heads/main/project/public/female-friendly.jpg"
              alt="Female Friendly Hero"
              className="w-full h-full object-cover"
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
              <div className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-[#eee]">Female Friendly Iterations</h1>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#4B6BFB]/10 to-[#A158F6]/10 rounded-xl px-5 py-4"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold bg-gradient-to-r from-[#4B6BFB] to-[#A158F6] text-transparent bg-clip-text">Users growth</span>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#4B6BFB] to-[#A158F6] text-transparent bg-clip-text">150</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-[#4B6BFB] to-[#A158F6] text-transparent bg-clip-text">%</span>
                    </div>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <p className="text-xl text-[#eee]/80">Role: Lead Designer</p>
                  <p className="text-lg text-[#eee]/80">Research, UX improvements, new UI for the new generations</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none prose-invert">
                <p className="text-lg font-light text-[#eee] mb-8">
                  Since 2014, the Down app has remained unchanged, leading to stagnating user growth.
                  Among its one million users, only 10% are women. Most users stop using the app after just one week. However, the natural user growth brought by the pandemic temporarily revived the platform, though the original issues persisted. This prompted us to begin a new post-pandemic iteration for the next phase of development.
                </p>

                <p className="text-lg font-light text-[#eee] mb-8">
                  A key observation: the majority of users on hook-up apps were male, primarily seeking matches to chat with or meet in person. However, the gender imbalance created a challenge, often resulting in lower engagement and satisfaction for male users due to the limited presence of active female participants. We hypothesized that by increasing the retention of female users during the critical early stages—from day 1 to day 7, and extending into the second week—we could create a more balanced user base.
                </p>

                <p className="text-lg font-light text-[#eee] mb-12">
                  This, in turn, would naturally enhance the experience for male users, driving higher retention across the platform. This insight shaped our strategy to focus on improving female retention through personalized onboarding, engaging features, and a welcoming community. By addressing this imbalance, we aimed to foster a more dynamic and enjoyable environment for all users, ensuring long-term success for the platform.
                </p>

                {/* Project Process Section */}
                <div className="bg-[#222] p-8 rounded-lg">
                  <h2 className="text-4xl font-bold mb-6 text-[#eee]">Project Process</h2>
                  <div className="space-y-4">
                    <p className="text-2xl text-[#eee]">
                      we did...
                    </p>
                    <div className="flex flex-wrap gap-4 items-center text-[#eee] text-2xl">
                      {processSteps.map((step, index) => (
                        <React.Fragment key={step}>
                          <span className="whitespace-nowrap">{step}</span>
                          {index < processSteps.length - 1 && (
                            <span className="text-[#eee]/40 whitespace-nowrap">{'>'}</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Pitch Embed */}
                  <div className="mt-8">
                    <iframe 
                      src="https://pitch.com/public/99fe226f-ecd0-450a-88ca-7ffd20af1f29/embed" 
                      allow="fullscreen; clipboard-write" 
                      allowFullScreen
                      width="100%" 
                      height="368" 
                      style={{ border: 0 }}
                      title="Project Pitch"
                    />
                  </div>
                </div>

                <div className="mt-12 p-6 bg-[#222] rounded-lg">
                  <p className="text-sm text-[#eee]/60 italic">
                    *To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in all case studies.
                    All information in the case studies is my own and does not necessarily reflect the views of the companies.*
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <footer className="py-8 text-center text-[#eee]/60 text-sm border-t border-gray-800">
            Copyright reserved by Muchiao, 2025
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FemaleFriendly;