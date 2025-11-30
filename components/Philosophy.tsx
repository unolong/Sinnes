import React from 'react';
import { Leaf, Award, Heart } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophie" className="py-24 bg-stone-900 text-stone-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Holz mit Charakter. <br/>
                <span className="text-primary italic">Ehrlich & Natürlich.</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-stone-300 leading-relaxed">
              <p>
                Wir sprechen bewusst von <strong>Massivholz</strong> und Vollholz, nicht von furniertem Plattenmaterial. 
                Bei uns wird der ganze Stamm verarbeitet. Das spürt man nicht nur an der Haptik, sondern auch am Raumklima. 
                Offenporiges Holz reguliert die Feuchtigkeit und lebt mit Ihnen.
              </p>
              <p>
                Unsere Hölzer stammen überwiegend aus regionalen Forstbetrieben in Sachsen und dem Erzgebirge. 
                Kurze Wege und zertifizierte Herkunft (FSC/PEFC) sind für uns selbstverständlich.
              </p>
              <p>
                Die Oberflächenbehandlung erfolgt ausschließlich mit hochwertigen, ökologischen Ölen und Wachsen. 
                So bleibt das Holz atmungsaktiv, reparaturfreundlich und erhält eine wunderbar samtige Oberfläche.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center p-4 bg-stone-800/50 rounded-xl border border-stone-700">
                <Leaf className="w-8 h-8 text-primary mb-3" />
                <span className="font-medium text-white">Ökologisch</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-stone-800/50 rounded-xl border border-stone-700">
                <Heart className="w-8 h-8 text-primary mb-3" />
                <span className="font-medium text-white">Gesundes Wohnen</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-stone-800/50 rounded-xl border border-stone-700">
                <Award className="w-8 h-8 text-primary mb-3" />
                <span className="font-medium text-white">Meisterqualität</span>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <ImageWithFallback 
              src="/image_3.jpg" 
              alt="Runde Tischplatte mit schöner Maserung auf Pflastersteinen" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serif text-2xl text-white italic">
                "Ein Möbelstück soll nicht der Mode folgen, sondern dem Menschen dienen."
              </p>
              <p className="mt-4 text-primary font-medium">– Till Epple, Tischlermeister</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;