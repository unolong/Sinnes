import React from 'react';
import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-stone-600">
            Ob Einzelstück oder kompletter Innenausbau – wir realisieren Ihre Wohnwünsche mit Fachwissen und Kreativität.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            // Dynamically get the icon component
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Hammer;

            return (
              <div 
                key={service.id} 
                className="bg-wood-50/50 p-8 rounded-xl border border-wood-100 hover:border-wood-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm text-wood-600 group-hover:text-wood-800 group-hover:bg-wood-100 transition-colors">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;