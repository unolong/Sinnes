import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple spy logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#start" className="text-2xl font-serif font-semibold tracking-tight text-stone-900 group">
          sinnes<span className="text-primary font-light group-hover:text-stone-900 transition-colors">magnet</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            {NAV_LINKS.filter(l => l.label !== 'Kontakt').map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative hover:text-primary ${
                  activeSection === link.href.substring(1) 
                    ? 'text-primary font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary/50' 
                    : 'text-stone-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button 
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            variant="primary" 
            size="sm"
          >
            Projekt anfragen
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-stone-800 focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-24 px-6 pb-6 flex flex-col items-center space-y-8 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xl font-serif text-stone-800 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Button 
          fullWidth
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projekt anfragen
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;