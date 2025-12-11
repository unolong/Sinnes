import React from 'react';
import { IMAGES } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={IMAGES.about}
                alt="Tischlermeister in der Werkstatt"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* TODO: Change in data.ts IMAGES.about: '/img/portrait.jpg' */}
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-wood-200 rounded-2xl -z-10 hidden sm:block"></div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-wood-600 font-semibold uppercase tracking-wider text-sm">Das Atelier</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">
              Traditionelles Handwerk, <br />
              modern interpretiert.
            </h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Willkommen im Tischleratelier Sinnesmagnet. 
                Mein Name ist Till Epple, und Holz ist meine Leidenschaft. In meiner Werkstatt in Dresden entstehen Möbel, die mehr sind als nur Gebrauchsgegenstände.
              </p>
              <p>
                Wir glauben an die Kraft des Echten. Massives Holz, das atmet, duftet und mit den Jahren immer schöner wird. In einer schnelllebigen Welt setzen wir auf Beständigkeit und handwerkliche Präzision bis ins kleinste Detail.
              </p>
              <p>
                Jedes Projekt beginnt mit einem weißen Blatt Papier und einem Gespräch. Wir hören zu, planen individuell und fertigen Ihr Möbelstück mit der Sorgfalt, die es verdient.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-wood-200"></div>
              <span className="font-serif italic text-wood-800 text-xl">Ihr Tischlermeister</span>
              <div className="h-px flex-1 bg-wood-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;