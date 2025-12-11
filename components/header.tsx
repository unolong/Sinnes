import React, { useState } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Start', href: '#hero' },
    { name: 'Werkschau', href: '#gallery' },
    { name: 'Tischlerei', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Materialien', href: '#materials' },
    { name: 'Referenzen', href: '#testimonials' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-wood-500 p-1.5 rounded-lg">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-stone-900 leading-tight tracking-tight">
                Sinnesmagnet
              </h1>
              <p className="text-xs text-wood-600 uppercase tracking-widest">Tischleratelier</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-wood-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-wood-600 p-2"
              aria-label="Hauptmenü öffnen"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-stone-600 hover:text-wood-600 hover:bg-wood-50 block px-3 py-4 rounded-md text-base font-medium text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;