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

const AboutMu = () => {
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
                className="text-4xl font-bold mb-6"
              >
                你好
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-8">
                  我是一位專注於數據驅動項目的產品設計師。善於打造用戶友好、直覺且高效的使用者體驗（UX）。
                  憑藉著十年的軟體產品與使用者設計經驗，我帶領設計團隊、同時也是主要資深設計師。曾在科技巨頭和新創公司擔任團隊中的個人貢獻者與領導者職位。
                </p>

                <p className="text-lg text-gray-700 mb-8">
                  作為過去所有項目的主要設計師，我透過:
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">研究、產品策略與 UX 規劃</h3>
                  <p className="text-gray-700">
                    負責使用者研究、產品策略制定、UX 規劃，並執行以使用者為中心的訪談、測試與實驗。
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">首席設計師，策略性專案負責人</h3>
                  <p className="text-gray-700">
                    主導跨部門工作坊，識別機會領域，建立團隊工作流程。進一步定義內部溝通原則與交付文件，提升協作效率與產品體驗。
                  </p>
                </div>

                <p className="text-lg text-gray-700 mb-8">
                  來幫助產品用戶成長(Growth)、設計良好易用、通用性佳的客戶端使用者體驗以及幫助團隊建立良好溝通的渠道。
                </p>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">近期成就</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">現在</h3>
                      <p className="text-gray-700">
                        帶領產品團隊從0-1建構AI網頁工具型軟體/ B2B-B2C, SaaS AI客服系統管理平台，建構團隊與團隊流程與設計系統。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">2022-2024</h3>
                      <p className="text-gray-700">
                        第四季協助交友軟體改良使用者體驗、用戶留存率與互動率提升, 用戶增長150% <a href="https://finance.yahoo.com/news/down-dating-app-celebrates-milestone-140000066.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">新聞連結</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">過去</h3>
                      <p className="text-gray-700">
                        在Microsoft微軟公司，我負責AI Cortana手機版用戶註冊體驗改進專案，成功將用戶註冊的轉換率從80%提升至85%。
                        過去在Whoscall、華碩電腦主要領導的設計師，其核心UX體驗設計在市場長久維持易用性，獲得良好聲譽、使用至今。
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-12">
                  累積了發行超過4億的終端用戶為大眾服務的軟體設計經驗，適應市場快速的迭代，始終維持良好設計質量。
                </p>

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

export default AboutMu;