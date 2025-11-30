import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Button from './Button';
import ImageWithFallback from './ImageWithFallback';

const Hero: React.FC = () => {
  return (
    <section id="start" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-stone-900">
              Möbel, die bleiben. <br />
              <span className="text-stone-500 text-3xl md:text-4xl italic">Handwerk aus Dresden.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl">
              Im Tischleratelier Sinnesmagnet fertigen wir individuelle Massivholzmöbel, die Geschichten erzählen. 
              Zeitloses Design, regionale Hölzer und langlebige Qualität – maßgeschneidert für Ihr Zuhause.
            </p>

            <div className="space-y-3">
              {[
                'Individuelle Planung & Fertigung',
                'Nachhaltiges Holz aus der Region',
                'Gesunde, geölte Oberflächen'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-stone-700">
                  <div className="bg-primary/10 p-1 rounded-full text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
              >
                Projekt anfragen
              </Button>
              <a 
                href="#werkschau"
                className="inline-flex items-center justify-center px-6 py-4 text-stone-600 font-medium hover:text-primary transition-colors group"
              >
                Werkschau ansehen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="lg:w-1/2 relative w-full aspect-[4/3] lg:aspect-square max-h-[600px]">
            <div className="absolute inset-0 bg-stone-200 rounded-2xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-700">
              <ImageWithFallback 
                src="/image_1.jpg" 
                alt="Detailaufnahme einer handgefertigten Zinkenverbindung" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 -rotate-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;