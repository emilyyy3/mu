import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import About from './About.tsx';
import AboutMu from './AboutMu.tsx';
import AICustomerService from './AICustomerService.tsx';
import FemaleFriendly from './FemaleFriendly.tsx';
import './index.css';

// Disable right click
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

// Disable keyboard shortcuts for copy
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
    e.preventDefault();
    return false;
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-mu" element={<AboutMu />} />
        <Route path="/ai-customer-service" element={<AICustomerService />} />
        <Route path="/female-friendly" element={<FemaleFriendly />} />
      </Routes>
    </Router>
  </StrictMode>
);