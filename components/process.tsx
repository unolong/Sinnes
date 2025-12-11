import React from 'react';
import { PROCESS_STEPS } from '../data';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-wood-600 font-semibold uppercase tracking-wider text-sm">Der Weg zum Möbel</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">
            Wie wir arbeiten
          </h2>
        </div>

        <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-wood-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {PROCESS_STEPS.map((step) => (
                    <div key={step.number} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-wood-100 text-wood-600 font-serif font-bold text-xl flex items-center justify-center mb-6 shadow-sm group-hover:border-wood-400 group-hover:bg-wood-50 transition-all duration-300">
                            {step.number}
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
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