import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="ablauf" className="py-20 bg-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Von der Idee zum Möbel</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Maßarbeit ist ein Prozess. Wir begleiten Sie Schritt für Schritt zu Ihrem Wunschmöbel.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-stone-200 -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full border-2 border-stone-100 flex items-center justify-center text-stone-400 mb-6 shadow-sm group-hover:border-primary group-hover:text-primary transition-all duration-300 relative">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center text-xs font-bold text-stone-500 group-hover:bg-primary group-hover:text-white transition-colors">
                    {index + 1}
                  </span>
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">{step.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;