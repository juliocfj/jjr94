import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Header = ({ currentLanguage, onLanguageChange, languages, data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { key: 'about', id: 'about' },
    { key: 'experience', id: 'experience' },
    { key: 'projects', id: 'projects' },
    { key: 'education', id: 'education' },
    { key: 'skills', id: 'skills' },
    { key: 'contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl lg:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Julio Cesar
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
              >
                {data.navigation[item.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
                languages={languages}
              />
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-cyan-400 hover:bg-slate-800/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-slate-800/50' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg font-medium transition-colors duration-300"
              >
                {data.navigation[item.key]}
              </button>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-4 py-2 sm:hidden">
              <div className="text-slate-400 text-sm mb-2">Language / Idioma / Lingua</div>
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
                languages={languages}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;