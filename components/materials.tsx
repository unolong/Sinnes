import React from 'react';
import { IMAGES } from '../data';
import { Leaf, RefreshCcw, Heart } from 'lucide-react';

const Materials: React.FC = () => {
  return (
    <section id="materials" className="py-20 bg-stone-900 text-wood-50 relative overflow-hidden">
      {/* Background texture via CSS or slight overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-800/50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Nachhaltigkeit & Materialien
            </h2>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Holz ist ein Geschenk der Natur. Wir behandeln es mit Respekt. Wir verwenden ausschließlich Hölzer aus nachhaltiger Forstwirtschaft, bevorzugt aus regionalen Beständen.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-forest-600/20 p-3 rounded-lg h-fit text-forest-500">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Natürliche Oberflächen</h3>
                  <p className="text-stone-400">
                    Wir verzichten auf giftige Lacke. Unsere Möbel werden mit hochwertigen Bio-Ölen und Wachsen veredelt. Das sorgt für ein gesundes Raumklima und eine haptisch warme Oberfläche.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-forest-600/20 p-3 rounded-lg h-fit text-forest-500">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Langlebigkeit statt Wegwerfware</h3>
                  <p className="text-stone-400">
                    Ein Massivholzmöbel kann abgeschliffen und renoviert werden. Es ist eine Investition für Generationen, kein Trendprodukt für eine Saison.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-forest-600/20 p-3 rounded-lg h-fit text-forest-500">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Regionale Partner</h3>
                  <p className="text-stone-400">
                    Unser Holz kommt vom Sägewerk nebenan, der Stahl vom Schlosser aus der Stadt. Wir stärken das lokale Handwerk in Sachsen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-lg overflow-hidden border border-stone-700 shadow-2xl">
                <img 
                    src={IMAGES.materials} 
                    alt="Nahaufnahme Holzstruktur Eiche"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                {/* TODO: Update data.ts with own image */}
             </div>
             <div className="absolute -bottom-6 -right-6 bg-wood-600 p-6 rounded-lg shadow-xl max-w-xs hidden sm:block">
                 <p className="text-white font-serif italic text-lg">
                     "Holz lebt. Es arbeitet, es atmet, es erzählt Geschichten."
                 </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;