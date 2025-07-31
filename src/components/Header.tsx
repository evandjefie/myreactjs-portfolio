import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Linkedin, Github, Mail, Youtube } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Réalisations', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/evan-djefie', label: 'LinkedIn' },
    { icon: Github, href: 'http://github.com/evandjefie/', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/@evandjefie1007', label: 'YouTube' },
    { icon: Mail, href: 'mailto:elishadjefie@gmail.com', label: 'Email' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <span className={`text-xl font-bold ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Evan DJEFIE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`hover:text-[#19a89e] transition-colors mx-4 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[#19a89e] transition-colors ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[#19a89e] transition-colors ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 py-4 ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } rounded-lg shadow-lg`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-2 px-4 hover:text-[#19a89e] transition-colors ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;