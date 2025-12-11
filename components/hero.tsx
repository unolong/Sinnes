import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Tischlerei Werkstatt Innenansicht"
          className="w-full h-full object-cover"
        />
        {/* TODO: Für eigenes Bild in data.ts IMAGES.hero anpassen: '/img/hero.jpg' */}
        
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-wood-500/20 border border-wood-400/30 text-wood-100 text-sm font-medium mb-6 backdrop-blur-sm">
            Handwerkskunst aus Dresden
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Massivholzmöbel, <br />
            die Ihre Sinne berühren.
          </h1>
          <p className="text-lg sm:text-xl text-stone-200 mb-8 leading-relaxed max-w-xl">
            Wir fertigen Unikate mit Charakter. Nachhaltig, langlebig und exakt nach Ihren Vorstellungen geplant. Erleben Sie Holz in seiner schönsten Form.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="#gallery" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-wood-900 bg-wood-100 hover:bg-white transition-colors duration-300 shadow-lg"
            >
              Werkschau ansehen
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              Kontakt aufnehmen <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;