import React from 'react';
import { Hammer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hammer className="h-6 w-6 text-wood-500" />
              <span className="font-serif text-xl font-bold text-white">Sinnesmagnet</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Individuelle Massivholzmöbel aus Dresden. <br/>
              Handwerk mit Herz und Verstand für ein Zuhause, das bleibt.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-wood-400 transition-colors">Startseite</a></li>
              <li><a href="#gallery" className="hover:text-wood-400 transition-colors">Werkschau</a></li>
              <li><a href="#about" className="hover:text-wood-400 transition-colors">Tischlerei</a></li>
              <li><a href="#contact" className="hover:text-wood-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-wood-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-wood-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-wood-400 transition-colors">AGB</a></li>
            </ul>
            {/* TODO: Create separate legal pages */}
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Tischleratelier Sinnesmagnet. Alle Rechte vorbehalten.</p>
          <p>Handmade in Dresden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;