import React from 'react';
import { Quote, User } from 'lucide-react';
import { TESTIMONIALS } from '../data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 text-center mb-12">
          Was unsere Kunden sagen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-stone-50 p-8 rounded-2xl relative border border-stone-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-wood-200" />
              
              <p className="text-stone-700 italic mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-200 flex-shrink-0">
                  {testimonial.imageUrl ? (
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-wood-200 text-wood-600">
                      <User className="h-6 w-6" />
                    </div>
                  )}
                  {/* TODO: Check data.ts for image replacement */}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{testimonial.name}</h4>
                  {testimonial.role && (
                    <p className="text-xs text-stone-500">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;