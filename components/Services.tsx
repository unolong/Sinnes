import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="leistungen" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Was wir fertigen</h2>
          <p className="text-stone-600">
            Vom Einzelstück bis zur kompletten Raumeinrichtung. Wir gestalten Lebensräume mit dem Werkstoff Holz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-bg border border-stone-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-white rounded-xl text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <a 
                href="#werkschau"
                className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300"
              >
                Mehr erfahren <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;