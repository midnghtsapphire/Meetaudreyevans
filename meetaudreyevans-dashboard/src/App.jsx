import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  TrendingUp, 
  Link as LinkIcon, 
  Share2, 
  Music, 
  Coffee, 
  Zap, 
  BarChart3,
  Settings,
  Plus,
  Play,
  Pause,
  Users,
  DollarSign,
  Target,
  Sparkles,
  Rocket,
  Heart,
  Star,
  Crown,
  Palette,
  Camera,
  Headphones,
  Brain,
  Shield,
  Globe
} from 'lucide-react';
import './App.css';

// Simple Dashboard Component
const Dashboard = () => {
  const [metrics] = useState({
    totalRevenue: 24078.50,
    todayRevenue: 342.89,
    totalClicks: 15847,
    conversionRate: 6.57,
    activeCampaigns: 8,
    totalProducts: 12,
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <motion.div 
          className="welcome-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Welcome to MeetAudreyEvans.com 🎵</h1>
          <p className="welcome-subtitle">
            Your complete music industry automation and intelligence platform
          </p>
        </motion.div>
      </div>

      <div className="metrics-grid">
        <motion.div 
          className="metric-card revenue"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="metric-icon">
            <DollarSign size={32} />
          </div>
          <div className="metric-content">
            <h3>Total Revenue</h3>
            <div className="metric-value">${metrics.totalRevenue.toLocaleString()}</div>
            <div className="metric-change positive">+18.2% this month</div>
          </div>
        </motion.div>

        <motion.div 
          className="metric-card clicks"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="metric-icon">
            <Target size={32} />
          </div>
          <div className="metric-content">
            <h3>Total Clicks</h3>
            <div className="metric-value">{metrics.totalClicks.toLocaleString()}</div>
            <div className="metric-change positive">+12.4% this week</div>
          </div>
        </motion.div>

        <motion.div 
          className="metric-card conversion"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="metric-icon">
            <TrendingUp size={32} />
          </div>
          <div className="metric-content">
            <h3>Conversion Rate</h3>
            <div className="metric-value">{metrics.conversionRate}%</div>
            <div className="metric-change positive">+2.1% improvement</div>
          </div>
        </motion.div>

        <motion.div 
          className="metric-card campaigns"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="metric-icon">
            <Rocket size={32} />
          </div>
          <div className="metric-content">
            <h3>Active Campaigns</h3>
            <div className="metric-value">{metrics.activeCampaigns}</div>
            <div className="metric-change neutral">Running smoothly</div>
          </div>
        </motion.div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <motion.button 
            className="action-btn music"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Music size={24} />
            <span>Stem Separation</span>
          </motion.button>
          
          <motion.button 
            className="action-btn social"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={24} />
            <span>Social Media</span>
          </motion.button>
          
          <motion.button 
            className="action-btn affiliate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkIcon size={24} />
            <span>Affiliate Links</span>
          </motion.button>
          
          <motion.button 
            className="action-btn analytics"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart3 size={24} />
            <span>Analytics</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// Simple Affiliate Management Component
const AffiliateManagement = () => {
  return (
    <div className="affiliate-management">
      <h1>🔗 Affiliate Link Management</h1>
      <p>Manage your affiliate links and track performance</p>
      <div className="coming-soon">
        <Sparkles size={48} />
        <h3>Coming Soon!</h3>
        <p>Advanced affiliate management features are being developed</p>
      </div>
    </div>
  );
};

// Simple Social Media Management Component
const SocialMediaManagement = () => {
  return (
    <div className="social-media-management">
      <h1>📱 Social Media Automation</h1>
      <p>Automate your social media posting and engagement</p>
      <div className="coming-soon">
        <Share2 size={48} />
        <h3>Coming Soon!</h3>
        <p>Social media automation tools are being developed</p>
      </div>
    </div>
  );
};

// Simple Music Component
const MusicSection = () => {
  return (
    <div className="music-section">
      <h1>🎵 Music Tools</h1>
      <p>Professional music production and promotion tools</p>
      <div className="music-tools-grid">
        <div className="tool-card">
          <Headphones size={32} />
          <h3>Stem Separation</h3>
          <p>AI-powered audio stem separation</p>
        </div>
        <div className="tool-card">
          <Music size={32} />
          <h3>Music Promotion</h3>
          <p>Promote your music across platforms</p>
        </div>
        <div className="tool-card">
          <Globe size={32} />
          <h3>Global Trends</h3>
          <p>Track music trends worldwide</p>
        </div>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard', color: '#8B5CF6' },
    { path: '/affiliate', icon: LinkIcon, label: 'Affiliate Links', color: '#10B981' },
    { path: '/social', icon: Share2, label: 'Social Media', color: '#F59E0B' },
    { path: '/music', icon: Music, label: 'Music', color: '#EC4899' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', color: '#3B82F6' }
  ];

  return (
    <nav className="main-navigation">
      <div className="nav-header">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Crown size={32} />
          <span>Audrey Evans</span>
        </motion.div>
      </div>
      
      <div className="nav-items">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <motion.div 
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--nav-color': item.color }}
            >
              <item.icon size={24} />
              <span>{item.label}</span>
              {location.pathname === item.path && (
                <motion.div 
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          </Link>
        ))}
      </div>
      
      <div className="nav-footer">
        <motion.button 
          className="settings-btn"
          whileHover={{ scale: 1.1, rotate: 90 }}
        >
          <Settings size={24} />
        </motion.button>
      </div>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/affiliate" element={<AffiliateManagement />} />
              <Route path="/social" element={<SocialMediaManagement />} />
              <Route path="/music" element={<MusicSection />} />
              <Route path="/analytics" element={<div className="coming-soon"><BarChart3 size={48} /><h3>Analytics Coming Soon!</h3></div>} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
};

export default App;

