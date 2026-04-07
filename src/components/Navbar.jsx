import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHeart, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/services', key: 'services' },
  { path: '/facilities', key: 'facilities' },
  { path: '/programs', key: 'programs' },
  { path: '/gallery', key: 'gallery' },
  { path: '/get-involved', key: 'getInvolved' },
  { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="BSA Institute Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <h1 className={`text-sm md:text-base font-bold leading-tight transition-colors ${
                scrolled ? 'text-primary-900' : 'text-white'
              }`}>
                भोई समाज आश्रय संस्था
              </h1>
              <p className={`text-xs transition-colors ${
                scrolled ? 'text-primary-500' : 'text-primary-200'
              }`}>
                Bhoi Samaj Ashray Sanstha, Pune
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-primary-800 bg-primary-50'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-primary-600 hover:text-primary-800 hover:bg-gray-50'
                    : 'text-primary-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                scrolled
                  ? 'text-primary-600 hover:bg-gray-100'
                  : 'text-primary-100 hover:bg-white/10'
              }`}
              aria-label="Toggle language"
            >
              <FaGlobe className="text-xs" />
              <span className="hidden md:inline">{t.nav.language}</span>
            </button>

            {/* Donate CTA */}
            <Link
              to="/get-involved"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/20 text-sm"
            >
              <FaHeart className="text-xs" />
              {t.nav.donate}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-primary-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-800 bg-primary-50'
                      : 'text-primary-700 hover:text-primary-800 hover:bg-gray-50'
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
              <Link
                to="/get-involved"
                className="block text-center mt-4 px-4 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl"
              >
                <FaHeart className="inline mr-2 text-xs" />
                {t.nav.donate}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
